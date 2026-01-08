import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../utils/theme';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      {/* Background Image */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80' }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(9,9,11,0.9)', 'rgba(9,9,11,0.6)', 'transparent']}
          style={styles.gradient}
        />
      </ImageBackground>

      <SafeAreaView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <MaterialIcons name="local-taxi" size={30} color={theme.colors.primary} />
            <Text style={styles.logoText}>RYDR</Text>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.bottomSheet}>
          <View style={styles.handle} />
          
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Ride in <Text style={styles.titleAccent}>Style</Text>.{'\n'}
              Arrive on Time.
            </Text>
            <Text style={styles.subtitle}>
              Premium rides at your fingertips. Experience the ultimate urban transport solution.
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate('AccountType' as never)}
            >
              <Text style={styles.primaryButtonText}>Get Started</Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>

            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-google" size={20} color="white" />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-apple" size={20} color="white" />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text style={styles.signInText} onPress={() => console.log('Sign In pressed')}>
                Sign In
              </Text>
            </Text>
            
            <View style={styles.availabilityContainer}>
              <View style={styles.dot}>
                <View style={styles.pingDot} />
                <View style={styles.innerDot} />
              </View>
              <Text style={styles.availabilityText}>Drivers available nearby</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.dark,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  content: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  logoText: {
    fontFamily: theme.fonts.chakraPetch + '-Bold',
    fontSize: 24,
    color: 'white',
    letterSpacing: 1,
  },
  bottomSheet: {
    backgroundColor: 'rgba(24, 24, 27, 0.95)',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    padding: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    marginTop: 'auto',
    ...theme.shadows.lg,
  },
  handle: {
    width: 48,
    height: 6,
    backgroundColor: theme.colors.text.muted,
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: theme.spacing.xl,
  },
  textContainer: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontFamily: theme.fonts.chakraPetch + '-Bold',
    fontSize: 36,
    color: theme.colors.text.primary,
    lineHeight: 40,
    marginBottom: theme.spacing.md,
  },
  titleAccent: {
    color: theme.colors.primary,
  },
  subtitle: {
    fontFamily: theme.fonts.inter + '-Regular',
    fontSize: 18,
    color: theme.colors.text.secondary,
    lineHeight: 24,
  },
  buttonContainer: {
    gap: theme.spacing.md,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.xl,
    gap: theme.spacing.md,
    ...theme.shadows.md,
  },
  primaryButtonText: {
    fontFamily: theme.fonts.inter + '-Bold',
    fontSize: 18,
    color: theme.colors.text.primary,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  socialButton: {
    flex: 1,
    backgroundColor: theme.colors.surface.dark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    gap: theme.spacing.sm,
  },
  socialButtonText: {
    fontFamily: theme.fonts.inter + '-SemiBold',
    fontSize: 14,
    color: theme.colors.text.primary,
  },
  footer: {
    marginTop: theme.spacing.xl,
    alignItems: 'center',
    gap: theme.spacing.xl,
  },
  footerText: {
    fontFamily: theme.fonts.inter + '-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
  },
  signInText: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.inter + '-Bold',
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: 20,
    gap: theme.spacing.sm,
  },
  dot: {
    position: 'relative',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pingDot: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: theme.colors.status.success,
    borderRadius: 10,
    opacity: 0.75,
  },
  innerDot: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.status.success,
    borderRadius: 5,
  },
  availabilityText: {
    fontFamily: theme.fonts.inter + '-Medium',
    fontSize: 12,
    color: theme.colors.status.success,
  },
});