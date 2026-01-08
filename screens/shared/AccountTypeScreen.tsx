import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface AccountTypeScreenProps {
  navigation: any;
}

export default function AccountTypeScreen({ navigation }: AccountTypeScreenProps) {
  const handlePassengerPress = () => {
    navigation.navigate('PassengerStack');
  };

  const handleDriverPress = () => {
    navigation.navigate('DriverStack');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Elements */}
      <View style={styles.backgroundContainer}>
        {/* Top Right Blur */}
        <View style={styles.topRightBlur} />
        
        {/* Bottom Gradient */}
        <LinearGradient
          colors={['rgba(21, 24, 21, 0)', 'rgba(21, 24, 21, 1)']}
          style={styles.bottomGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        
        {/* Bottom Left Blur */}
        <View style={styles.bottomLeftBlur} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <MaterialIcons name="local-taxi" size={32} color="#0df20d" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose</Text>
            <Text style={styles.titleGradient}>
              Account Type
            </Text>
          </View>
          <Text style={styles.subtitle}>
            Select your role to get started with the ultimate ride experience.
          </Text>
        </View>

        {/* Options Container */}
        <View style={styles.optionsContainer}>
          {/* Passenger Option */}
          <TouchableOpacity
            style={styles.optionWrapper}
            activeOpacity={0.9}
            onPress={handlePassengerPress}
          >
            <View style={styles.optionGlow} />
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.optionCard, styles.passengerCard]}
            >
              <View style={styles.optionInner}>
                {/* Background Icon */}
                <MaterialIcons
                  name="hail"
                  size={120}
                  color="rgba(255, 255, 255, 0.05)"
                  style={styles.backgroundIcon}
                />
                
                {/* Top Row */}
                <View style={styles.optionTopRow}>
                  <View style={styles.iconContainer}>
                    <MaterialIcons name="person" size={24} color="#fff" />
                  </View>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Popular</Text>
                  </View>
                </View>

                {/* Content */}
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>Passenger</Text>
                  <Text style={styles.optionDescription}>
                    Request rides, track drivers, and travel safely.
                  </Text>
                </View>

                {/* Action Button */}
                <LinearGradient
                  colors={['#ef4444', '#d32f2f']}
                  style={styles.actionButton}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.actionButtonText}>Sign Up as Passenger</Text>
                  <MaterialIcons name="arrow-forward" size={20} color="#fff" />
                </LinearGradient>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Driver Option */}
          <TouchableOpacity
            style={styles.optionWrapper}
            activeOpacity={0.9}
            onPress={handleDriverPress}
          >
            <View style={[styles.optionGlow, styles.driverGlow]} />
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles.optionCard, styles.driverCard]}
            >
              <View style={styles.optionInner}>
                {/* Background Icon */}
                <MaterialIcons
                  name="directions-car"
                  size={120}
                  color="rgba(255, 255, 255, 0.05)"
                  style={styles.backgroundIcon}
                />
                
                {/* Top Row */}
                <View style={styles.optionTopRow}>
                  <View style={[styles.iconContainer, styles.driverIconContainer]}>
                    <MaterialIcons name="directions-car" size={24} color="#fff" />
                  </View>
                </View>

                {/* Content */}
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>Driver</Text>
                  <Text style={styles.optionDescription}>
                    Drive on your schedule and earn extra income.
                  </Text>
                </View>

                {/* Action Button */}
                <View style={styles.driverActionButton}>
                  <Text style={styles.driverActionButtonText}>Sign Up as Driver</Text>
                  <MaterialIcons name="arrow-forward" size={20} color="#0df20d" />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Login Prompt */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={handleLoginPress}>
              Log In
            </Text>
          </Text>
        </View>
        
        {/* Extra padding for better scrolling */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0c0a',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  topRightBlur: {
    position: 'absolute',
    top: -height * 0.2,
    right: -width * 0.1,
    width: width * 0.7,
    height: height * 0.6,
    borderRadius: width * 0.7,
    backgroundColor: 'rgba(13, 242, 13, 0.05)',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.5,
    zIndex: 1,
  },
  bottomLeftBlur: {
    position: 'absolute',
    bottom: height * 0.2,
    left: -width * 0.2,
    width: width * 0.6,
    height: height * 0.6,
    borderRadius: width * 0.6,
    backgroundColor: 'rgba(13, 242, 13, 0.05)',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 48 : 60,
    paddingBottom: 100,
    zIndex: 2,
  },
  header: {
    marginBottom: 40,
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#151815',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    shadowColor: '#0df20d',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 5,
  },
  titleContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: -0.5,
  },
  titleGradient: {
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -0.5,
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#94a3b8',
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 20,
    marginBottom: 40,
  },
  optionWrapper: {
    position: 'relative',
  },
  optionGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderRadius: 32,
  },
  driverGlow: {
    backgroundColor: 'rgba(13, 242, 13, 0.1)',
  },
  optionCard: {
    borderRadius: 32,
    borderWidth: 1,
    padding: 2,
  },
  passengerCard: {
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  driverCard: {
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  optionInner: {
    borderRadius: 30,
    padding: 24,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#151815',
  },
  backgroundIcon: {
    position: 'absolute',
    right: -24,
    bottom: -24,
    transform: [{ rotate: '12deg' }],
  },
  optionTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    zIndex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  driverIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94a3b8',
  },
  optionContent: {
    marginBottom: 24,
    zIndex: 1,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 14,
    color: '#94a3b8',
    lineHeight: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontSize: 14,
  },
  driverActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(13, 242, 13, 0.3)',
    backgroundColor: 'rgba(13, 242, 13, 0.05)',
  },
  driverActionButtonText: {
    color: '#0df20d',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontSize: 14,
  },
  loginContainer: {
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#64748b',
  },
  loginLink: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomSpacer: {
    height: 40,
  },
});