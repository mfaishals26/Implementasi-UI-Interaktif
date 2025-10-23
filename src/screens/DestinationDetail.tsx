import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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

const reviews = [
  {
    id: 1,
    name: 'Rifqi Starboy',
    avatar: 'https://via.placeholder.com/40',
    rating: 5,
    comment: 'Amazing place! The sunset view is breathtaking.',
  },
];

const recommendations = [
  {
    id: 1,
    title: 'Phinisi Luxury Private Trip',
    subtitle: 'Complimentary pick-up',
    image: require('../../assets/bg.jpg'),
  },
];

const DestinationDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { destination } = route.params as any;
  const [quantity, setQuantity] = useState(1);

  const handleBookNow = () => {
    navigation.navigate('FlightBooking' as never);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalAmount = quantity * 10000; // $10,000 per person

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.weatherContainer}>
          <FontAwesome name="sun-o" size={16} color={colors.white} />
          <Text style={styles.weatherText}>24° C</Text>
        </View>
      </View>

      {/* Hero Image */}
      <ImageBackground
        source={destination?.image || require('../../assets/bg.jpg')}
        style={styles.heroImage}
        imageStyle={styles.heroImageStyle}
      >
        <View style={styles.heroContent}>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color={colors.white} />
            <Text style={styles.ratingText}>5.0</Text>
          </View>
          <Text style={styles.destinationTitle}>{destination?.name || 'Labuan Bajo'}</Text>
          <Text style={styles.destinationDescription}>
            From crystal-clear waters to breathtaking sunsets, Labuan Bajo is calling! 
            Explore hidden islands, swim with manta rays, and create memories that last a lifetime.
          </Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Content Card */}
        <View style={styles.contentCard}>
          {/* Location */}
          <View style={styles.locationContainer}>
            <View style={styles.flagContainer}>
              <Text style={styles.flagText}>🇮🇩</Text>
            </View>
            <Text style={styles.countryText}>{destination?.country || 'Indonesia'}</Text>
          </View>

          {/* Title */}
          <Text style={styles.contentTitle}>Discover the Beauty of Labuan Bajo</Text>

          {/* Reviews Section */}
          <View style={styles.reviewsSection}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            {reviews.map((review) => (
              <View key={review.id} style={styles.reviewItem}>
                <View style={styles.reviewAvatar}>
                  <Text style={styles.avatarText}>{review.name.charAt(0)}</Text>
                </View>
                <View style={styles.reviewContent}>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <Text style={styles.reviewComment}>{review.comment}</Text>
                </View>
              </View>
            ))}
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* Recommendations */}
          <View style={styles.recommendationsSection}>
            <Text style={styles.sectionTitle}>Recommendation in Bajo</Text>
            {recommendations.map((rec) => (
              <TouchableOpacity key={rec.id} style={styles.recommendationCard}>
                <ImageBackground
                  source={rec.image}
                  style={styles.recommendationImage}
                  imageStyle={styles.recommendationImageStyle}
                >
                  <View style={styles.recommendationContent}>
                    <Text style={styles.recommendationTitle}>{rec.title}</Text>
                    <Text style={styles.recommendationSubtitle}>{rec.subtitle}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Booking Bar */}
      <View style={styles.bookingBar}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
            <FontAwesome name="minus" size={16} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
            <FontAwesome name="plus" size={16} color={colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={styles.totalAmount}>Total Amount ${totalAmount.toLocaleString()}</Text>
        <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    zIndex: 1,
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  weatherText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  heroImage: {
    height: 300,
    justifyContent: 'flex-end',
  },
  heroImageStyle: {
    opacity: 0.8,
  },
  heroContent: {
    padding: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
  destinationTitle: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  destinationDescription: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  scrollView: {
    flex: 1,
  },
  contentCard: {
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 400,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  flagContainer: {
    marginRight: 8,
  },
  flagText: {
    fontSize: 20,
  },
  countryText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 24,
  },
  reviewsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  reviewComment: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  viewAllText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  recommendationsSection: {
    marginBottom: 24,
  },
  recommendationCard: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  recommendationImage: {
    height: 120,
    justifyContent: 'flex-end',
  },
  recommendationImageStyle: {
    opacity: 0.8,
  },
  recommendationContent: {
    padding: 16,
  },
  recommendationTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  recommendationSubtitle: {
    color: colors.white,
    fontSize: 14,
    opacity: 0.9,
  },
  bookingBar: {
    backgroundColor: colors.dark,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    width: 20,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
  },
  totalAmount: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '600',
  },
  bookButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  bookButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DestinationDetail;