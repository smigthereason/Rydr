import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../utils/theme';

const { width, height } = Dimensions.get('window');

export default function AccountTypeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80' }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(34,16,19,0.9)', 'rgba(34,16,19,0.95)', 'rgba(34,16,19,1)']}
          style={styles.gradient}
        />
      </ImageBackground>

      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <MaterialIcons name="arrow-back-ios-new" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>Choose Account Type</Text>
            <Text style={styles.subtitle}>Select how you want to use the app</Text>
          </View>

          {/* Cards Container */}
          <View style={styles.cardsContainer}>
            {/* Passenger Card */}
            <TouchableOpacity 
              style={styles.card}
              onPress={() => navigation.navigate('PassengerSignUp' as never)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#2A1A1F', '#1F1216']}
                style={styles.cardGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.cardIconContainer}>
                  <MaterialIcons name="person" size={40} color={theme.colors.accentGreen} />
                </View>
                <Text style={styles.cardTitle}>Passenger</Text>
                <Text style={styles.cardDescription}>
                  Book rides, track your driver, and travel conveniently
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardActionText}>Sign up as Passenger</Text>
                  <MaterialIcons name="arrow-forward" size={20} color={theme.colors.accentGreen} />
                </View>
              </LinearGradient>
            </TouchableOpacity>

            {/* Driver Card */}
            <TouchableOpacity 
              style={styles.card}
              onPress={() => navigation.navigate('DriverSignUp' as never)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#2A1A1F', '#1F1216']}
                style={styles.cardGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.cardIconContainer}>
                  <MaterialIcons name="directions-car" size={40} color={theme.colors.accentGreen} />
                </View>
                <Text style={styles.cardTitle}>Driver</Text>
                <Text style={styles.cardDescription}>
                  Earn money by driving passengers to their destinations
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardActionText}>Sign up as Driver</Text>
                  <MaterialIcons name="arrow-forward" size={20} color={theme.colors.accentGreen} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Spacer to ensure content doesn't get hidden behind bottom controls */}
          <View style={styles.bottomSpacer} />
        </ScrollView>

        {/* Footer - Fixed at bottom with safe area padding */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text 
              style={styles.loginLink} 
              onPress={() => navigation.navigate('Welcome' as never)}
            >
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
    backgroundColor: theme.colors.background.darkRed,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // Extra padding to ensure content is scrollable above footer
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSection: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 32,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 16,
    color: theme.colors.text.secondary,
    lineHeight: 22,
  },
  cardsContainer: {
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  card: {
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
    ...theme.shadows.lg,
    minHeight: 220,
  },
  cardGradient: {
    padding: theme.spacing.xl,
    gap: theme.spacing.md,
    flex: 1,
  },
  cardIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(26, 77, 46, 0.34)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  cardTitle: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 24,
    color: theme.colors.text.primary,
    marginBottom: 4,
  },
  cardDescription: {
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 20,
    flex: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  cardActionText: {
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    fontSize: 16,
    color: theme.colors.accentGreen,
  },
  bottomSpacer: {
    height: 20,
  },
  footer: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? theme.spacing.xl : theme.spacing.xl + 20, // Extra padding for Android navigation bar
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  footerText: {
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 16,
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },
  loginLink: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    color: theme.colors.text.primary,
  },
});