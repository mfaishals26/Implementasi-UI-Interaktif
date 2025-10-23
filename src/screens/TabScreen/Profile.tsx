import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
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

const menuItems = [
  { id: 1, title: 'My Bookings', icon: 'calendar', color: colors.primary },
  { id: 2, title: 'Favorites', icon: 'heart', color: colors.secondary },
  { id: 3, title: 'Payment Methods', icon: 'credit-card', color: '#4CAF50' },
  { id: 4, title: 'Notifications', icon: 'bell', color: '#FF9800' },
  { id: 5, title: 'Settings', icon: 'cog', color: colors.textSecondary },
  { id: 6, title: 'Help & Support', icon: 'question-circle', color: '#9C27B0' },
];

const Profile = () => {
  const handleMenuPress = (item: any) => {
    console.log('Pressed:', item.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <FontAwesome name="cog" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editButton}>
              <FontAwesome name="camera" size={12} color={colors.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Faishal</Text>
          <Text style={styles.userEmail}>Faishal@example.com</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>Trips</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item)}
            >
              <View style={[styles.menuIcon, { backgroundColor: item.color }]}>
                <FontAwesome name={item.icon as any} size={16} color={colors.white} />
              </View>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <FontAwesome name="chevron-right" size={14} color={colors.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <FontAwesome name="sign-out" size={16} color="#FF5722" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  settingsButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 16,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: colors.primary,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.white,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  editProfileText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 20,
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 8,
  },
  menuContainer: {
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  logoutButton: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginHorizontal: 16,
    marginBottom: 32,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF5722',
  },
  logoutText: {
    color: '#FF5722',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default Profile;