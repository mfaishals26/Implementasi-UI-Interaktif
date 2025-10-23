import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@react-native-vector-icons/fontawesome';

const colors = {
  primary: '#00b8b0', // Teal
  secondary: '#FF6B35', // Orange
  text: '#000',
  textSecondary: '#666',
  background: '#F8F9FA',
  white: '#FFFFFF',
  dark: '#343A40',
};

const destinations = [
  {
    id: 1,
    name: 'Labuan Bajo',
    country: 'Indonesia',
    rating: 5.0,
    price: '$4.000/pax',
    image: require('../../../assets/bglb.jpg'),
  },
  {
    id: 2,
    name: 'Italia',
    country: 'Italia',
    rating: 4.7,
    price: '$3.500/pax',
    image: require('../../../assets/bgitalia.jpg'),
  },
];

const Home = () => {
  const navigation : any = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleDestinationPress = (destination: any) => {
    navigation.navigate('DestinationDetail' as never, { destination } as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Haikal</Text>
        <View style={styles.notificationContainer}>
          <FontAwesome name="heart" size={20} color={colors.white} />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>8</Text>
          </View>
        </View>
      </View>

      {/* Promotional Banner */}
      <TouchableOpacity style={styles.banner}>
        <Text style={styles.bannerText}>Plan Your Summer!</Text>
        <View style={styles.bannerIcon}>
          <FontAwesome name="arrow-right" size={16} color={colors.secondary} />
        </View>
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={16} color={colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search destination..."
            placeholderTextColor={colors.textSecondary}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="th" size={16} color={colors.dark} />
        </TouchableOpacity>
      </View>

      {/* Popular Destinations */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.destinationsContainer}>
          {destinations.map((destination) => (
            <TouchableOpacity
              key={destination.id}
              style={styles.destinationCard}
              onPress={() => handleDestinationPress(destination)}
            >
              <ImageBackground
                source={destination.image}
                style={styles.destinationImage}
                imageStyle={styles.destinationImageStyle}
              >
                <View style={styles.destinationHeader}>
                  <TouchableOpacity style={styles.favoriteButton}>
                    <FontAwesome name="heart" size={16} color={colors.white} />
                  </TouchableOpacity>
                </View>
                
                <View style={styles.destinationFooter}>
                  <View style={styles.destinationInfo}>
                    <FontAwesome name="map-marker" size={12} color={colors.white} />
                    <Text style={styles.destinationCountry}>{destination.country}</Text>
                  </View>
                  <Text style={styles.destinationName}>{destination.name}</Text>
                  
                  <View style={styles.destinationRating}>
                    <FontAwesome name="star" size={12} color={colors.white} />
                    <Text style={styles.ratingText}>{destination.rating}</Text>
                    <Text style={styles.priceText}>{destination.price}</Text>
                  </View>
                </View>
              </ImageBackground>
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
    paddingTop: 10,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
  },
  notificationContainer: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  banner: {
    backgroundColor: colors.secondary,
    marginHorizontal: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  bannerIcon: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: colors.text,
  },
  filterButton: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scrollView: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  viewAllText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  destinationsContainer: {
    paddingHorizontal: 20,
  },
  destinationCard: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  destinationImage: {
    height: 200,
    justifyContent: 'space-between',
  },
  destinationImageStyle: {
    borderRadius: 16,
  },
  destinationHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  favoriteButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  destinationFooter: {
    padding: 16,
  },
  destinationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  destinationCountry: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '500',
  },
  destinationName: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  destinationRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '600',
  },
  priceText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 8,
    fontWeight: '600',
  },
});

export default Home;