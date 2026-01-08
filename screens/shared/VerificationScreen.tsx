import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../utils/theme';

const { width } = Dimensions.get('window');

export default function VerificationScreen() {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[value.length - 1];
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newCode.every(digit => digit !== '') && index === 3) {
      // Handle verification logic here
      console.log('Verification code:', newCode.join(''));
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    // Implement resend logic here
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back-ios" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>Verify your number</Text>
            <Text style={styles.subtitle}>
              We sent a 4-digit code to{' '}
              <Text style={styles.phoneNumber}>+1 (555) 000-0000</Text>.
              {'\n'}Not you?{' '}
              <Text style={styles.editLink}>Edit number</Text>
            </Text>
          </View>

          {/* OTP Inputs */}
          <View style={styles.otpContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={ref => inputs.current[index] = ref}
                style={[
                  styles.otpInput,
                  code[index] && styles.otpInputFilled
                ]}
                value={code[index]}
                onChangeText={(value) => handleCodeChange(index, value)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
                autoFocus={index === 0}
                selectionColor={theme.colors.primary}
              />
            ))}
          </View>

          {/* Resend Section */}
          <View style={styles.resendContainer}>
            <Text style={styles.timerText}>
              Resend code in 00:{timer.toString().padStart(2, '0')}
            </Text>
            <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
              <MaterialIcons name="refresh" size={20} color={theme.colors.accentGreen} />
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          </View>

          {/* Verify Button */}
          <TouchableOpacity 
            style={styles.verifyButton}
            onPress={() => {
              // Navigate based on user type (you would get this from navigation params)
              const userType = 'passenger'; // This should come from navigation params
              if (userType === 'passenger') {
                navigation.navigate('Passenger', { screen: 'Payment' } as never);
              } else {
                navigation.navigate('Driver', { screen: 'DocumentUpload' } as never);
              }
            }}
          >
            <Text style={styles.verifyButtonText}>Verify Account</Text>
            <MaterialIcons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.darkRed,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: theme.spacing.xl,
  },
  header: {
    flexDirection: 'row',
    marginBottom: theme.spacing.xl,
  },
  titleSection: {
    marginBottom: theme.spacing.xxl,
  },
  title: {
    fontSize: 32,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    color: theme.colors.text.secondary,
    lineHeight: 24,
  },
  phoneNumber: {
    color: theme.colors.text.primary,
    fontFamily: theme.fonts.plusJakarta + '-SemiBold',
  },
  editLink: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xxl,
  },
  otpInput: {
    width: (width - theme.spacing.xl * 2) / 4 - theme.spacing.md,
    height: 64,
    borderRadius: theme.borderRadius.xl,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    fontSize: 24,
    color: theme.colors.text.primary,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
  },
  otpInputFilled: {
    borderColor: theme.colors.primary,
    backgroundColor: 'rgba(242, 13, 51, 0.1)',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxl,
  },
  timerText: {
    fontSize: 14,
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    color: theme.colors.text.muted,
    marginBottom: theme.spacing.md,
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  resendText: {
    fontSize: 14,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    color: theme.colors.accentGreen,
  },
  verifyButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: theme.borderRadius.lg,
    gap: theme.spacing.md,
    ...theme.shadows.md,
  },
  verifyButtonText: {
    fontSize: 16,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    color: theme.colors.text.primary,
  },
});