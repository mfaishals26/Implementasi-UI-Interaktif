import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

const colors = {
  primary: '#00b8b0', // Teal color
  secondary: '#FF6B35', // Orange color
  text: '#fff',
  dark: '#343A40',
};

const App = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ImageBackground source={require('../../assets/bg.jpg')} style={styles.image}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Your Next Adventure Starts Here</Text>
            <Text style={styles.subtitle}>
              Life's too short to stay in one place. Find your next favorite city,
              beach, or mountain and let's get moving!
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main' as never)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Start Exploring</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  content: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    marginBottom: 32,
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default App;