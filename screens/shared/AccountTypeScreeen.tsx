import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../utils/theme';

const { width, height } = Dimensions.get('window');

export default function AccountTypeScreen() {
  const navigation = useNavigation();

  const handlePassengerPress = () => {
    navigation.navigate('Passenger', { screen: 'PassengerSignUp' } as never);
  };

  const handleDriverPress = () => {
    navigation.navigate('Driver', { screen: 'DriverSignUp' } as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Background Pattern */}
      <View style={styles.background}>
        <View style={styles.gradientBlob1} />
        <View style={styles.gradientBlob2} />
      </View>

      <SafeAreaView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <MaterialIcons name="local-taxi" size={32} color={theme.colors.primaryGreen} />
          </View>
          <Text style={styles.title}>
            Choose{'\n'}
            <Text style={styles.titleGradient}>Account Type</Text>
          </Text>
          <Text style={styles.subtitle}>
            Select your role to get started with the ultimate ride experience.
          </Text>
        </View>

        {/* Account Type Cards */}
        <View style={styles.cardsContainer}>
          {/* Passenger Card */}
          <TouchableOpacity 
            style={styles.cardWrapper}
            onPress={handlePassengerPress}
            activeOpacity={0.9}
          >
            <LinearGradient
              colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.cardGradient}
            >
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={[styles.iconContainer, styles.passengerIcon]}>
                    <MaterialIcons name="person" size={24} color="white" />
                  </View>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Popular</Text>
                  </View>
                </View>

                <Text style={styles.cardTitle}>Passenger</Text>
                <Text style={styles.cardDescription}>
                  Request rides, track drivers, and travel safely.
                </Text>

                <View style={[styles.actionButton, styles.passengerButton]}>
                  <Text style={styles.actionButtonText}>Sign Up as Passenger</Text>
                  <MaterialIcons name="arrow-forward" size={20} color="white" />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Driver Card */}
          <TouchableOpacity 
            style={styles.cardWrapper}
            onPress={handleDriverPress}
            activeOpacity={0.9}
          >
            <LinearGradient
              colors={['rgba(255,255,255,0.05)', 'rgba(255,255,255,0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.cardGradient}
            >
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={[styles.iconContainer, styles.driverIcon]}>
                    <MaterialIcons name="steering-wheel-heat" size={24} color="black" />
                  </View>
                </View>

                <Text style={styles.cardTitle}>Driver</Text>
                <Text style={styles.cardDescription}>
                  Drive on your schedule and earn extra income.
                </Text>

                <View style={[styles.actionButton, styles.driverButton]}>
                  <Text style={[styles.actionButtonText, styles.driverButtonText]}>
                    Sign Up as Driver
                  </Text>
                  <MaterialIcons name="arrow-forward" size={20} color={theme.colors.primaryGreen} />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text style={styles.loginText} onPress={() => console.log('Login pressed')}>
              Log In
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.darkCharcoal,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  gradientBlob1: {
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '70%',
    height: '60%',
    borderRadius: 1000,
    backgroundColor: 'rgba(13, 242, 13, 0.05)',
  },
  gradientBlob2: {
    position: 'absolute',
    bottom: '0%',
    left: '-10%',
    width: '80%',
    height: '50%',
    borderRadius: 1000,
    backgroundColor: theme.colors.surface.darker,
  },
  content: {
    flex: 1,
    padding: theme.spacing.xl,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    paddingTop: theme.spacing.xl,
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: theme.colors.surface.darker,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    shadowColor: theme.colors.primaryGreen,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 10,
  },
  title: {
    fontFamily: theme.fonts.plusJakarta + '-ExtraBold',
    fontSize: 36,
    color: 'white',
    lineHeight: 40,
    marginBottom: theme.spacing.md,
  },
  titleGradient: {
    color: 'transparent',
    backgroundImage: 'linear-gradient(to right, white, #94a3b8)',
  },
  subtitle: {
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 18,
    color: '#94a3b8',
    lineHeight: 24,
  },
  cardsContainer: {
    marginTop: theme.spacing.xl,
    gap: 20,
  },
  cardWrapper: {
    borderRadius: 32,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  cardGradient: {
    padding: 2,
    borderRadius: 32,
  },
  card: {
    backgroundColor: theme.colors.surface.darker,
    borderRadius: 30,
    padding: theme.spacing.xl,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  passengerIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  driverIcon: {
    backgroundColor: 'rgba(13, 242, 13, 0.1)',
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontFamily: theme.fonts.plusJakarta + '-SemiBold',
    fontSize: 12,
    color: '#94a3b8',
  },
  cardTitle: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
  },
  cardDescription: {
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: theme.spacing.xl,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.xl,
  },
  passengerButton: {
    backgroundColor: theme.colors.accentRed,
    shadowColor: theme.colors.accentRed,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  driverButton: {
    backgroundColor: 'rgba(13, 242, 13, 0.05)',
    borderWidth: 2,
    borderColor: 'rgba(13, 242, 13, 0.3)',
  },
  actionButtonText: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 14,
    color: 'white',
    letterSpacing: 0.5,
    paddingLeft: 8,
  },
  driverButtonText: {
    color: theme.colors.primaryGreen,
  },
  footer: {
    marginTop: 'auto',
    paddingVertical: theme.spacing.lg,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 14,
    color: '#64748b',
  },
  loginText: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    color: 'white',
  },
});