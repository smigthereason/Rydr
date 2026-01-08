import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

type PaymentMethod = 'card' | 'apple_pay' | 'paypal' | 'scan';

interface AddPaymentMethodScreenProps {
  navigation: any;
}

export default function AddPaymentMethodScreen({ navigation }: AddPaymentMethodScreenProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [zipCode, setZipCode] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Payment</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Choose how you want to pay for your rides. Your connection is encrypted and secure.
        </Text>

        {/* Scan Card Option */}
        <TouchableOpacity style={styles.scanCardButton}>
          <View style={styles.scanIconContainer}>
            <MaterialIcons name="photo-camera" size={24} color="#000" />
          </View>
          <View style={styles.scanTextContainer}>
            <Text style={styles.scanTitle}>Scan Card</Text>
            <Text style={styles.scanSubtitle}>Use camera to auto-fill details</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888" />
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

        {/* Credit/Debit Card */}
        <TouchableOpacity 
          style={[
            styles.paymentOption,
            selectedMethod === 'card' && styles.selectedOption
          ]}
          onPress={() => setSelectedMethod('card')}
        >
          <View style={styles.cardLogo}>
            <MaterialIcons name="credit-card" size={20} color="#000" />
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
                <MaterialIcons name="credit-card" size={20} color="#666" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  keyboardType="numeric"
                  maxLength={19}
                />
                {cardNumber.length >= 16 && (
                  <Ionicons name="checkmark-circle" size={20} color="#2ecc71" />
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
                    value={cvv}
                    onChangeText={setCvv}
                    secureTextEntry
                    maxLength={4}
                  />
                  <Ionicons name="help-circle-outline" size={20} color="#666" style={styles.cvvIcon} />
                </View>
              </View>
            </View>

            {/* Zip Code */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Zip Code</Text>
              <TextInput
                style={styles.input}
                placeholder="10001"
                value={zipCode}
                onChangeText={setZipCode}
                keyboardType="numeric"
              />
            </View>
          </View>
        )}

        {/* Trust Indicator */}
        <View style={styles.trustContainer}>
          <Ionicons name="lock-closed" size={18} color="#2ecc71" />
          <Text style={styles.trustText}>128-bit SSL Secure Payment</Text>
        </View>

        <View style={styles.spacer} />
      </ScrollView>

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Payment Method</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5f6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    lineHeight: 20,
  },
  scanCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  scanIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  scanTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  scanSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    opacity: 0.8,
    marginBottom: 12,
    letterSpacing: 1,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  selectedOption: {
    borderColor: '#f20d33',
    borderWidth: 2,
  },
  applePayLogo: {
    width: 48,
    height: 32,
    backgroundColor: '#000',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applePayText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  paypalLogo: {
    width: 48,
    height: 32,
    backgroundColor: '#003087',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paypalText: {
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardLogo: {
    width: 48,
    height: 32,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentOptionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginLeft: 16,
  },
  radioContainer: {
    marginLeft: 8,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: {
    borderColor: '#f20d33',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f20d33',
  },
  cardForm: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    marginBottom: 6,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  cvvIcon: {
    position: 'absolute',
    right: 12,
  },
  row: {
    flexDirection: 'row',
  },
  trustContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  trustText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2ecc71',
    marginLeft: 8,
  },
  spacer: {
    height: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f5f6',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  saveButton: {
    backgroundColor: '#f20d33',
    borderRadius: 28,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f20d33',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});