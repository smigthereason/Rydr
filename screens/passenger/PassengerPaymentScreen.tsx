import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../utils/theme';

type PaymentMethod = 'card' | 'apple_pay' | 'paypal' | 'mpesa' | 'scan';

export default function PassengerPaymentScreen() {
  const navigation = useNavigation();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSavePayment = () => {
    // Handle saving payment method
    console.log('Saving payment method:', selectedMethod);
    // Navigate to AppTour after saving
    navigation.navigate('AppTour' as never);
  };

  const handleScanCard = () => {
    // Handle scanning card
    console.log('Scan card pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background.darkRed} translucent />
      
      {/* Header */}
      <SafeAreaView style={styles.safeAreaHeader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton} activeOpacity={0.7}>
            <MaterialIcons name="arrow-back-ios-new" size={20} color={theme.colors.text.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Payment</Text>
          <View style={styles.headerPlaceholder} />
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.safeAreaContent}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Choose how you want to pay for your rides. Your connection is encrypted and secure.
          </Text>

          {/* Scan Card Option */}
          <TouchableOpacity 
            style={styles.scanCardButton}
            onPress={handleScanCard}
            activeOpacity={0.8}
          >
            <View style={styles.scanIconContainer}>
              <MaterialIcons name="photo-camera" size={24} color={theme.colors.text.primary} />
            </View>
            <View style={styles.scanTextContainer}>
              <Text style={styles.scanTitle}>Scan Card</Text>
              <Text style={styles.scanSubtitle}>Use camera to auto-fill details</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color={theme.colors.text.muted} />
          </TouchableOpacity>

          {/* Payment Methods */}
          <Text style={styles.sectionTitle}>PAYMENT METHOD</Text>

          {/* Apple Pay */}
          <TouchableOpacity 
            style={[
              styles.paymentOption,
              selectedMethod === 'apple_pay' && styles.selectedOption
            ]}
            onPress={() => setSelectedMethod('apple_pay')}
            activeOpacity={0.7}
          >
            <View style={styles.applePayLogo}>
              <Text style={styles.applePayText}>Pay</Text>
            </View>
            <Text style={styles.paymentOptionText}>Apple Pay</Text>
            <View style={styles.radioContainer}>
              <View style={[
                styles.radioOuter,
                selectedMethod === 'apple_pay' && styles.radioOuterSelected
              ]}>
                {selectedMethod === 'apple_pay' && <View style={styles.radioInner} />}
              </View>
            </View>
          </TouchableOpacity>

          {/* PayPal */}
          <TouchableOpacity 
            style={[
              styles.paymentOption,
              selectedMethod === 'paypal' && styles.selectedOption
            ]}
            onPress={() => setSelectedMethod('paypal')}
            activeOpacity={0.7}
          >
            <View style={styles.paypalLogo}>
              <Text style={styles.paypalText}>P</Text>
            </View>
            <Text style={styles.paymentOptionText}>PayPal</Text>
            <View style={styles.radioContainer}>
              <View style={[
                styles.radioOuter,
                selectedMethod === 'paypal' && styles.radioOuterSelected
              ]}>
                {selectedMethod === 'paypal' && <View style={styles.radioInner} />}
              </View>
            </View>
          </TouchableOpacity>

          {/* M-Pesa */}
          <TouchableOpacity 
            style={[
              styles.paymentOption,
              selectedMethod === 'mpesa' && styles.selectedOption
            ]}
            onPress={() => setSelectedMethod('mpesa')}
            activeOpacity={0.7}
          >
            <View style={styles.mpesaLogo}>
              <Text style={styles.mpesaText}>M</Text>
            </View>
            <View style={styles.mpesaTextContainer}>
              <Text style={styles.paymentOptionText}>M-Pesa</Text>
              <Text style={styles.mpesaSubtitle}>Use registered phone number</Text>
            </View>
            <View style={styles.radioContainer}>
              <View style={[
                styles.radioOuter,
                selectedMethod === 'mpesa' && styles.radioOuterSelected
              ]}>
                {selectedMethod === 'mpesa' && <View style={styles.radioInner} />}
              </View>
            </View>
          </TouchableOpacity>

          {/* Credit/Debit Card */}
          <TouchableOpacity 
            style={[
              styles.paymentOption,
              selectedMethod === 'card' && styles.selectedOption
            ]}
            onPress={() => setSelectedMethod('card')}
            activeOpacity={0.7}
          >
            <View style={styles.cardLogo}>
              <MaterialIcons name="credit-card" size={20} color={theme.colors.text.primary} />
            </View>
            <Text style={styles.paymentOptionText}>Credit or Debit Card</Text>
            <View style={styles.radioContainer}>
              <View style={[
                styles.radioOuter,
                selectedMethod === 'card' && styles.radioOuterSelected
              ]}>
                {selectedMethod === 'card' && <View style={styles.radioInner} />}
              </View>
            </View>
          </TouchableOpacity>

          {/* Card Details Form */}
          {selectedMethod === 'card' && (
            <View style={styles.cardForm}>
              {/* Card Number */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Card Number</Text>
                <View style={styles.inputWrapper}>
                  <MaterialIcons 
                    name="credit-card" 
                    size={20} 
                    color={theme.colors.text.muted} 
                    style={styles.inputIcon} 
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="0000 0000 0000 0000"
                    placeholderTextColor={theme.colors.text.muted}
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    keyboardType="numeric"
                    maxLength={19}
                  />
                  {cardNumber.length >= 16 && (
                    <MaterialIcons name="check-circle" size={20} color={theme.colors.accentGreen} />
                  )}
                </View>
              </View>

              {/* Expiry and CVV */}
              <View style={styles.row}>
                <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
                  <Text style={styles.inputLabel}>Expiry Date</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="MM / YY"
                    placeholderTextColor={theme.colors.text.muted}
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                  />
                </View>
                <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
                  <Text style={styles.inputLabel}>CVV</Text>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={[styles.input, { paddingRight: 40 }]}
                      placeholder="123"
                      placeholderTextColor={theme.colors.text.muted}
                      value={cvv}
                      onChangeText={setCvv}
                      secureTextEntry
                      maxLength={4}
                    />
                    <MaterialIcons 
                      name="help-outline" 
                      size={20} 
                      color={theme.colors.text.muted} 
                      style={styles.cvvIcon} 
                    />
                  </View>
                </View>
              </View>

              {/* Zip Code */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Zip Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="10001"
                  placeholderTextColor={theme.colors.text.muted}
                  value={zipCode}
                  onChangeText={setZipCode}
                  keyboardType="numeric"
                />
              </View>
            </View>
          )}

          {/* M-Pesa Notice */}
          {selectedMethod === 'mpesa' && (
            <View style={styles.mpesaNotice}>
              <MaterialIcons name="info" size={20} color={theme.colors.accentGreen} />
              <Text style={styles.mpesaNoticeText}>
                Payments will be automatically charged to your registered M-Pesa phone number
              </Text>
            </View>
          )}

          {/* Trust Indicator */}
          <View style={styles.trustContainer}>
            <MaterialIcons name="lock" size={18} color={theme.colors.accentGreen} />
            <Text style={styles.trustText}>128-bit SSL Secure Payment</Text>
          </View>

          {/* Bottom spacer for Android navigation bar */}
          <View style={styles.bottomSpacer} />
        </ScrollView>

        {/* Fixed Footer */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSavePayment}
            activeOpacity={0.9}
          >
            <Text style={styles.saveButtonText}>Save Payment Method</Text>
          </TouchableOpacity>
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
  safeAreaHeader: {
    backgroundColor: theme.colors.background.darkRed,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  safeAreaContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    color: theme.colors.text.primary,
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: Platform.OS === 'android' ? 100 : 80,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
    lineHeight: 20,
  },
  scanCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface.darkRed,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    ...theme.shadows.sm,
  },
  scanIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanTextContainer: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  scanTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    color: theme.colors.text.primary,
  },
  scanSubtitle: {
    fontSize: 12,
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    color: theme.colors.text.secondary,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    color: theme.colors.text.primary,
    opacity: 0.8,
    marginBottom: theme.spacing.sm,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface.darkRed,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  selectedOption: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  applePayLogo: {
    width: 48,
    height: 32,
    backgroundColor: '#000',
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applePayText: {
    color: '#fff',
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 12,
  },
  paypalLogo: {
    width: 48,
    height: 32,
    backgroundColor: '#003087',
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paypalText: {
    color: '#fff',
    fontStyle: 'italic',
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 12,
  },
  mpesaLogo: {
    width: 48,
    height: 32,
    backgroundColor: '#1B9C1B', // M-Pesa green
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mpesaText: {
    color: '#fff',
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 12,
  },
  mpesaTextContainer: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  mpesaSubtitle: {
    fontSize: 11,
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    color: theme.colors.text.secondary,
    marginTop: 2,
  },
  cardLogo: {
    width: 48,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentOptionText: {
    flex: 1,
    fontSize: 16,
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    color: theme.colors.text.primary,
    marginLeft: theme.spacing.md,
  },
  radioContainer: {
    marginLeft: theme.spacing.sm,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.text.muted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: theme.colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  cardForm: {
    backgroundColor: theme.colors.surface.darkRed,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    ...theme.shadows.sm,
  },
  inputContainer: {
    marginBottom: theme.spacing.lg,
  },
  inputLabel: {
    fontSize: 12,
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    color: theme.colors.text.secondary,
    marginBottom: 6,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: 48,
    fontSize: 16,
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    color: theme.colors.text.primary,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  inputIcon: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  cvvIcon: {
    position: 'absolute',
    right: 16,
  },
  row: {
    flexDirection: 'row',
  },
  mpesaNotice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(74, 222, 128, 0.1)',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(74, 222, 128, 0.2)',
    gap: theme.spacing.sm,
  },
  mpesaNoticeText: {
    flex: 1,
    fontSize: 12,
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    color: theme.colors.accentGreen,
    lineHeight: 16,
  },
  trustContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing.lg,
  },
  trustText: {
    fontSize: 12,
    fontFamily: theme.fonts.plusJakarta + '-Medium',
    color: theme.colors.accentGreen,
    marginLeft: theme.spacing.sm,
  },
  bottomSpacer: {
    height: Platform.OS === 'android' ? 30 : 20,
  },
  footer: {
    backgroundColor: theme.colors.background.darkRed,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    paddingBottom: Platform.OS === 'ios' ? theme.spacing.md : theme.spacing.md + 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  saveButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 28,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.md,
  },
  saveButtonText: {
    color: theme.colors.text.primary,
    fontSize: 16,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
  },
});