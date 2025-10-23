import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const colors = {
  primary: '#00b8b0',
  secondary: '#FF6B35',
  text: '#1A1A1A',
  textSecondary: '#9C9C9C',
  background: '#FAF7F2', // warna beige lembut
  white: '#FFFFFF',
  dark: '#343A40',
};

const travelTypes = ['Hotel', 'Aircraft', 'Villa', 'Attraction'];

const calendarDays = [
  { day: 'S', date: '22' },
  { day: 'M', date: '23', selected: true },
  { day: 'T', date: '24' },
  { day: 'W', date: '25' },
  { day: 'T', date: '26' },
  { day: 'F', date: '27' },
  { day: 'S', date: '28' },
];

const flights = [
  {
    id: 1,
    airline: 'AIRLINES',
    from: { code: 'NL', city: 'Rotterdam', time: '5:30pm', day: 'Mon, 23 Jun' },
    to: { code: 'IDN', city: 'Labuan Bajo', time: '3:30am', day: 'Tue, 24 Jun' },
    price: '$1.700',
  },
  {
    id: 2,
    airline: 'AIRLINES',
    from: { code: 'NL', city: 'Rotterdam', time: '7:30pm', day: 'Mon, 23 Jun' },
    to: { code: 'IDN', city: 'Labuan Bajo', time: '5:30am', day: 'Tue, 24 Jun' },
    price: '$1.500',
  },
];

const FlightBooking = () => {
  const navigation = useNavigation();
  const [selectedTravelType, setSelectedTravelType] = useState('Aircraft');
  const [selectedMonth, setSelectedMonth] = useState('June, 2025');

  const handleFlightSelect = (flight: any) => {
    console.log('Selected flight:', flight);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tickets</Text>
        <TouchableOpacity style={styles.menuButton}>
          <FontAwesome name="ellipsis-v" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Location */}
        <View style={styles.locationSection}>
          <Text style={styles.locationLabel}>Current locations</Text>
          <TouchableOpacity style={styles.locationSelector}>
            <Text style={styles.locationText}>Netherlands</Text>
            <FontAwesome name="chevron-down" size={16} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* Travel Type */}
        <View style={styles.travelTypeSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.travelTypeScroll}>
            {travelTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.travelTypeButton,
                  selectedTravelType === type && styles.travelTypeButtonActive,
                ]}
                onPress={() => setSelectedTravelType(type)}
              >
                <Text
                  style={[
                    styles.travelTypeText,
                    selectedTravelType === type && styles.travelTypeTextActive,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Calendar */}
        <View style={styles.calendarSection}>
          <TouchableOpacity style={styles.monthSelector}>
            <Text style={styles.monthText}>{selectedMonth}</Text>
            <FontAwesome name="chevron-down" size={16} color={colors.textSecondary} />
          </TouchableOpacity>

          <View style={styles.calendarGrid}>
            {calendarDays.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.calendarDay, day.selected && styles.calendarDaySelected]}
              >
                <Text style={[styles.dayLabel, day.selected && styles.dayLabelSelected]}>
                  {day.day}
                </Text>
                <Text style={[styles.dayDate, day.selected && styles.dayDateSelected]}>
                  {day.date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Results */}
        <View style={styles.resultsSection}>
          <Text style={styles.resultsText}>4 Tickets Found</Text>

          {flights.map((flight) => (
            <TouchableOpacity
              key={flight.id}
              style={styles.flightCard}
              onPress={() => handleFlightSelect(flight)}
            >
              {/* Left strip */}
              <View style={styles.airlineStrip}>
                <Text style={styles.airlineText}>{flight.airline}</Text>
              </View>

              {/* Details */}
              <View style={styles.flightDetails}>
                <View style={styles.flightSegment}>
                  <Text style={styles.flightCode}>{flight.from.code}</Text>
                  <Text style={styles.flightCity}>{flight.from.city}</Text>
                  <Text style={styles.flightTime}>{flight.from.time}</Text>
                  <Text style={styles.flightDay}>{flight.from.day}</Text>
                </View>

                <View style={styles.flightCenter}>
                  <FontAwesome name="plane" size={20} color={colors.textSecondary} />
                </View>

                <View style={styles.flightSegment}>
                  <Text style={styles.flightCode}>{flight.to.code}</Text>
                  <Text style={styles.flightCity}>{flight.to.city}</Text>
                  <Text style={styles.flightTime}>{flight.to.time}</Text>
                  <Text style={styles.flightDay}>{flight.to.day}</Text>
                </View>
              </View>

              {/* Price */}
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{flight.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  menuButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  locationSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  locationLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginRight: 8,
  },
  travelTypeSection: {
    paddingVertical: 16,
  },
  travelTypeScroll: {
    paddingHorizontal: 20,
  },
  travelTypeButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  travelTypeButtonActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    shadowColor: colors.secondary,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  travelTypeText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  travelTypeTextActive: {
    color: colors.white,
  },
  calendarSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginRight: 8,
  },
  calendarGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarDay: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    minWidth: 44,
    backgroundColor: colors.white,
  },
  calendarDaySelected: {
    backgroundColor: colors.secondary,
  },
  dayLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  dayLabelSelected: {
    color: colors.white,
  },
  dayDate: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  dayDateSelected: {
    color: colors.white,
  },
  resultsSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  resultsText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  flightCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  airlineStrip: {
    backgroundColor: colors.secondary,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  airlineText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
    transform: [{ rotate: '-90deg' }],
    letterSpacing: 1,
  },
  flightDetails: {
    flexDirection: 'row',
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flightSegment: {
    alignItems: 'center',
  },
  flightCode: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  flightCity: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  flightTime: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  flightDay: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  flightCenter: {
    paddingHorizontal: 16,
  },
  priceContainer: {
    position: 'absolute',
    right: 120,
    bottom: 12,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.secondary,
  },
});

export default FlightBooking;
