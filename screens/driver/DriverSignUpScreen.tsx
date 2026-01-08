import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface DriverSignUpScreenProps {
  navigation: any;
}

export default function DriverSignUpScreen({ navigation }: DriverSignUpScreenProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCreateAccount = () => {
    // Handle account creation
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up
  };

  const handleAppleSignUp = () => {
    // Handle Apple sign up
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        {/* Background Image */}
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfFIsvvwQAA8CP5aLhtAtMzBy9u4xlNutFpg6oxBeWis_jjweYgFFvD_OsUtUQolp5SXQmRfrLXMNo8fNf2sY7BI61U1DVF0igJq1Pr9j5vCHbjpOsi-6N_mICXR5LwAbqMaIBkM27JqKzCrgoCxJf1wxUgkABDsFVsrdj7VTapyqiVlFFSlPvmkHOt9whi8b1OAzfiBpLl1tuNY-ODANuYEebgJbrb1SeJuWSYLqPTAQmsKKkdhzmNdhJmvqhVSsm-DmRt3SSfH8v' }}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        
        {/* Gradient Overlays */}
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.7)', 'rgba(34, 16, 19, 0.5)', 'rgba(34, 16, 19, 1)']}
          style={styles.gradientOverlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <View style={styles.greenTint} />

        {/* Top App Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButtonTop} onPress={handleBack}>
            <MaterialIcons name="arrow-back-ios-new" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.portalText}>Driver Portal</Text>
          <View style={styles.topBarPlaceholder} />
        </View>

        {/* Hero Content */}
        <View style={styles.heroContent}>
          <View style={styles.ecoBadge}>
            <MaterialIcons name="eco" size={18} color="#4ade80" />
            <Text style={styles.ecoText}>Eco-Friendly Fleet Bonus</Text>
          </View>
          <Text style={styles.heroTitle}>
            Start Your{'\n'}
            <Text style={styles.heroTitleGradient}>Engine</Text>
          </Text>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.description}>
          Join the elite fleet. Sign up today and start earning on your own schedule with premium rates.
        </Text>

        {/* Form */}
        <View style={styles.form}>
          {/* Full Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>FULL NAME</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="person" size={22} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#666"
                value={fullName}
                onChangeText={setFullName}
              />
              {fullName.length > 0 && (
                <MaterialIcons name="check-circle" size={20} color="#10B981" style={styles.checkIcon} />
              )}
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="mail" size={22} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="name@example.com"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Phone */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>MOBILE NUMBER</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="phone-iphone" size={22} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="(555) 000-0000"
                placeholderTextColor="#666"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>PASSWORD</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock" size={22} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Create a secure password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcons 
                  name={showPassword ? "visibility-off" : "visibility"} 
                  size={22} 
                  color="#666" 
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Vehicle Type */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>VEHICLE TYPE</Text>
            <View style={styles.selectContainer}>
              <MaterialIcons name="directions-car" size={22} color="#666" style={styles.inputIcon} />
              <View style={styles.selectInner}>
                <Text style={[styles.selectText, vehicleType ? styles.selectTextFilled : null]}>
                  {vehicleType || 'Select vehicle type'}
                </Text>
                <MaterialIcons name="expand-more" size={24} color="#666" style={styles.selectArrow} />
              </View>
            </View>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity 
            style={styles.createButton}
            onPress={handleCreateAccount}
            activeOpacity={0.9}
          >
            <View style={styles.buttonOverlay} />
            <Text style={styles.createButtonText}>Create Driver Account</Text>
            <MaterialIcons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>

          {/* Terms */}
          <Text style={styles.termsText}>
            By signing up, you agree to our{' '}
            <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>.
          </Text>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={handleGoogleSignUp}
          >
            <SvgGoogle />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.socialButton}
            onPress={handleAppleSignUp}
          >
            <SvgApple />
            <Text style={styles.socialButtonText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Login Prompt */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={handleLogin}>
              Log In
            </Text>
          </Text>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

// SVG Components
const SvgGoogle = () => (
  <View style={styles.svgContainer}>
    <Image
      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL116WQwEMEsWFJHF7adup6UxjwgAaWhwYfdqIzAMpc2JgTYSyjmJ7TtPHPVTk4PrshdL5wViIuhDdbdFq9cAmu5Z9x7mEv1gGyhEqjrwnqWs6B3HScwPm4v6P1o9vz8oohLL4vUmBPvE4cQssCdHD9iLe7rQjJ9CLSLoLYROKeEsuAvgd9Bm3EkCsQSrbReDWcV--n95CfAE2itlIxiYp0pobBJeVefw11SuWzzYXmi_j8VK2T6MxVt3CVDHRlPPnqWqngcpxwhMi' }}
      style={styles.googleIcon}
    />
  </View>
);

const SvgApple = () => (
  <View style={styles.svgContainer}>
    <MaterialIcons name="apple" size={20} color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221013',
  },
  heroSection: {
    height: 280,
    position: 'relative',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  greenTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    mixBlendMode: 'overlay' as any,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    position: 'relative',
    zIndex: 10,
  },
  backButtonTop: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  portalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.9)',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  topBarPlaceholder: {
    width: 40,
  },
  heroContent: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    zIndex: 10,
  },
  ecoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 197, 94, 0.3)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(74, 222, 128, 0.2)',
    backdropFilter: 'blur(4px)',
  },
  ecoText: {
    color: '#4ade80',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginLeft: 4,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    lineHeight: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroTitleGradient: {
    color: 'transparent',
    backgroundImage: 'linear-gradient(to right, #f20d33, #ef4444)',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    marginTop: -16,
    paddingBottom: 40,
  },
  description: {
    fontSize: 16,
    color: '#9ca3af',
    lineHeight: 24,
    marginBottom: 32,
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2f1519',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    height: 56,
  },
  inputIcon: {
    marginLeft: 16,
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    paddingRight: 16,
  },
  checkIcon: {
    marginRight: 16,
  },
  eyeIcon: {
    marginRight: 16,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2f1519',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    height: 56,
  },
  selectInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  selectText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  selectTextFilled: {
    color: '#fff',
  },
  selectArrow: {
    marginLeft: 8,
  },
  createButton: {
    backgroundColor: '#f20d33',
    borderRadius: 12,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
    shadowColor: '#f20d33',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
    overflow: 'hidden',
  },
  buttonOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: [{ translateY: 56 }],
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  termsLink: {
    color: '#9ca3af',
    textDecorationLine: 'underline',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dividerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#9ca3af',
    marginHorizontal: 16,
    backgroundColor: '#221013',
    paddingHorizontal: 8,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 40,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
  },
  svgContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  loginContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  loginText: {
    fontSize: 14,
    color: '#9ca3af',
  },
  loginLink: {
    color: '#f20d33',
    fontWeight: 'bold',
  },
  bottomSpacer: {
    height: 20,
  },
});