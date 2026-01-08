import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  ImageBackground,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../utils/theme';

const { width, height } = Dimensions.get('window');

export default function PassengerSignUpScreen() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Background */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80' }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(34,16,19,0.9)', 'rgba(34,16,19,0.95)', 'rgba(34,16,19,1)']}
          style={styles.gradient}
        />
        <View style={styles.greenGlow} />
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

          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join the ride. Enter your details below.</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="John Doe"
                  placeholderTextColor={theme.colors.text.muted}
                  value={fullName}
                  onChangeText={setFullName}
                />
                {fullName.length > 0 && (
                  <MaterialIcons 
                    name="check-circle" 
                    size={24} 
                    color={theme.colors.accentGreen} 
                    style={styles.checkIcon}
                  />
                )}
              </View>
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="name@example.com"
                placeholderTextColor={theme.colors.text.muted}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Phone */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.phoneContainer}>
                <View style={styles.countryCode}>
                  <Text style={styles.countryCodeText}>+1</Text>
                  <MaterialIcons name="expand-more" size={16} color={theme.colors.text.secondary} />
                </View>
                <TextInput
                  style={[styles.input, styles.phoneInput]}
                  placeholder="555-0199"
                  placeholderTextColor={theme.colors.text.muted}
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor={theme.colors.text.muted}
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                >
                  <MaterialIcons 
                    name={passwordVisible ? "visibility-off" : "visibility"} 
                    size={24} 
                    color={theme.colors.text.secondary} 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms */}
            <Text style={styles.termsText}>
              By signing up, you agree to our{' '}
              <Text style={styles.link}>Terms of Service</Text>{' '}
              and{' '}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>

            {/* Submit Button */}
            <TouchableOpacity 
              style={styles.submitButton}
              onPress={() => navigation.navigate('Verification' as never)}
              activeOpacity={0.8}
            >
              <Text style={styles.submitButtonText}>Create Account</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
                <View style={styles.socialIcon}>
                  <FontAwesome name="google" size={20} color="#fafafaff" />
                </View>
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
                <View style={styles.socialIcon}>
                  <MaterialIcons name="apple" size={20} color="#fff" />
                </View>
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Already a member?{' '}
                <Text style={styles.loginLink} onPress={() => navigation.goBack()}>
                  Log In
                </Text>
              </Text>
            </View>
          </View>
          
          {/* Bottom spacer for Android navigation bar */}
          <View style={styles.bottomSpacer} />
        </ScrollView>
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
  greenGlow: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 384,
    height: 384,
    borderRadius: 192,
    backgroundColor: '#1a4d2e',
    opacity: 0.2,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Platform.OS === 'android' ? 30 : 20,
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
  form: {
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.lg,
    flex: 1,
  },
  inputGroup: {
    gap: theme.spacing.sm,
  },
  label: {
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    fontSize: 14,
    color: theme.colors.text.secondary,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#271b1d',
    borderWidth: 1,
    borderColor: '#543b3f',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    fontSize: 16,
    color: theme.colors.text.primary,
    fontFamily: theme.fonts.plusJakarta + '-Regular',
  },
  checkIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  phoneContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  countryCode: {
    width: 96,
    backgroundColor: '#271b1d',
    borderWidth: 1,
    borderColor: '#543b3f',
    borderRadius: theme.borderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
  },
  countryCodeText: {
    color: theme.colors.text.primary,
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    padding: 4,
  },
  termsText: {
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 14,
    color: theme.colors.text.secondary,
    lineHeight: 20,
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  },
  link: {
    color: theme.colors.accentGreen,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    marginTop: theme.spacing.md,
    ...theme.shadows.md,
  },
  submitButtonText: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 16,
    color: theme.colors.text.primary,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dividerText: {
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    fontSize: 12,
    color: theme.colors.text.muted,
    marginHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.background.darkRed,
    paddingHorizontal: 8,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  socialButton: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  socialIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    fontSize: 14,
    color: theme.colors.text.primary,
  },
  footer: {
    paddingVertical: theme.spacing.xl,
    alignItems: 'center',
  },
  footerText: {
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    fontSize: 16,
    color: theme.colors.text.secondary,
  },
  loginLink: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    color: theme.colors.text.primary,
  },
  bottomSpacer: {
    height: Platform.OS === 'android' ? 30 : 20,
  },
});