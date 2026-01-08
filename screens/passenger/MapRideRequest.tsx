import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';

const { width } = Dimensions.get('window');

interface RideOption {
  id: string;
  name: string;
  time: string;
  price: string;
  imageUrl: string;
  isBestValue?: boolean;
  isSelected?: boolean;
}

const rideOptions: RideOption[] = [
  {
    id: '1',
    name: 'Sleek',
    time: '3 mins',
    price: 'KSh 650',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb6EDyIq0uDevHE31SXDNOJ4BpNtYa8-FUz6uJKPdCn9oOJ1NeSf6MU1FENkm6jTsRtpI8eV3I9XN8BQqDwZbkEDiDJim6rwCqw9SQH0ojPfgCQnCF61kNoJAl9fFK5d9x6yWpY0SXYoF5udmuEa9olh_dUlNPa0MBwoPtjd5Oq9M2kpNdCr48NpVMgGv4W_gwBZ4VgPmacfOK7ZvTUU55qvEMYkdrIJam5nG2YojcWxN4roha1Di_oVZAOtxoepLih8DXgBUFmxAl',
    isBestValue: true,
    isSelected: true,
  },
  {
    id: '2',
    name: 'Standard',
    time: '6 mins',
    price: 'KSh 450',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6017qtd0-Cuht6bC-6Q8IV1in6y_Jsbq5Wx55nXiDfOiVN43j-Su9EOv1F-p8LuFl_HCcf31aeCcV2YHI77_tz7ZCrP0yqEyqVLXz3uH2F3RWa_cMAqoionDwXUC4hLI_HutKPfEIrelBavvo1xf2FwlEaHNjRLrRDlIcJ0SFHU0PAfOx8r1CbS2fXAgcL1OpcHluCEtERQHw04_nYY4kpoaf9oWl31tm9qxIaFF6V7VunQhDoxFqtfOscazpg9eXoAvJQ1f-uG7p',
  },
  {
    id: '3',
    name: 'Lux',
    time: '12 mins',
    price: 'KSh 950',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHVlLebzaI9PxiEkNjtyLkrt_STrBRokLH-fsBdu4_mbBw3GyvBX6yv7UQwOx9MuTBVkvoTB2IcGHzP6c0tzWYbhafyYn7E05KwaEM9g8h0l0_X-r0Py1heeHmfTbzWL05OJZGPQqGOK6b84AzvCw4gypLZu6wpUmt7qMM-DB-fGg49sEnOk9Vp3ojjiULrId1KD4ZPs1OQEKjL5V6Mv80nTXxMKdu5XeXoMyUuWD-DrAeTdv32NXWuao1Npyy9YTl0MmrntOuAc1C',
  },
];

interface MapRideRequestScreenProps {
  navigation: any;
}

export default function MapRideRequestScreen({ navigation }: MapRideRequestScreenProps) {
  const insets = useSafeAreaInsets();
  const [selectedRide, setSelectedRide] = useState<string>('1');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleConfirmRide = () => {
    // Handle ride confirmation
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background.dark} />
      
      

      {/* Map Background - Kenyan themed */}
      <View style={styles.mapContainer}>
        {/* Map Grid Lines */}
        <View style={styles.mapGrid} />
        
        {/* Nairobi City Routes */}
        <View style={styles.route1} />
        <View style={styles.route2} />
        <View style={styles.route3} />
        <View style={styles.route4} />

        {/* Current Location Marker - Nairobi CBD */}
        <View style={styles.currentLocationContainer}>
          <View style={styles.locationBadge}>
            <Text style={styles.locationBadgeText}>Your Location</Text>
            <Text style={styles.locationBadgeSubtext}>3 min away</Text>
          </View>
          <View style={styles.locationMarker}>
            <View style={styles.locationPulse} />
            <View style={styles.locationDot} />
          </View>
        </View>

        {/* Drop-off Marker - JKIA Airport */}
        <View style={styles.dropoffContainer}>
          <View style={styles.dropoffBadge}>
            <Text style={styles.dropoffBadgeText}>Drop-off</Text>
          </View>
          <MaterialIcons name="location-on" size={36} color={theme.colors.primary} />
        </View>

        {/* Map Controls */}
        <TouchableOpacity style={[styles.mapControl, styles.menuButton]} onPress={handleBack}>
          <MaterialIcons name="arrow-back-ios-new" size={24} color={theme.colors.text.primary} />
        </TouchableOpacity>

        <View style={styles.rightControls}>
          <TouchableOpacity style={styles.mapControl}>
            <MaterialIcons name="search" size={24} color={theme.colors.text.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mapControl}>
            <MaterialIcons name="my-location" size={24} color={theme.colors.text.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View style={[styles.bottomSheet, { paddingBottom: Math.max(insets.bottom, 20) }]}>
        <View style={styles.bottomSheetHandle} />
        
        {/* Pickup and Drop-off - Kenyan Locations */}
        <View style={styles.locationContainer}>
          <View style={styles.locationDots}>
            <View style={styles.pickupDot} />
            <View style={styles.line} />
            <View style={styles.dropoffDot} />
          </View>
          
          <View style={styles.locationDetails}>
            <View style={styles.locationSection}>
              <Text style={styles.locationLabel}>PICK-UP</Text>
              <View style={styles.locationRow}>
                <Text style={styles.locationText}>Nairobi CBD</Text>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.locationSection}>
              <Text style={styles.locationLabel}>DROP-OFF</Text>
              <View style={styles.locationRow}>
                <Text style={styles.dropoffText}>JKIA Airport</Text>
                <Text style={styles.distanceText}>18.5 km</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Ride Options */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.rideOptionsScroll}
          contentContainerStyle={styles.rideOptionsContent}
        >
          {rideOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.rideOption,
                selectedRide === option.id && styles.selectedRideOption,
                option.isBestValue && styles.bestValueRideOption,
              ]}
              onPress={() => setSelectedRide(option.id)}
              activeOpacity={0.7}
            >
              {option.isBestValue && (
                <View style={styles.bestValueBadge}>
                  <Text style={styles.bestValueText}>Best Value</Text>
                </View>
              )}
              
              <Image
                source={{ uri: option.imageUrl }}
                style={styles.carImage}
                resizeMode="contain"
              />
              
              <View style={styles.rideOptionDetails}>
                <View>
                  <Text style={styles.rideOptionName}>{option.name}</Text>
                  <Text style={styles.rideOptionTime}>{option.time}</Text>
                </View>
                <Text style={styles.rideOptionPrice}>{option.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Payment and Promo */}
        <View style={styles.paymentSection}>
          <TouchableOpacity style={styles.paymentMethod}>
            <MaterialIcons name="credit-card" size={20} color={theme.colors.primary} />
            <Text style={styles.paymentText}>**** 4291</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} color={theme.colors.text.secondary} />
          </TouchableOpacity>
          
          <View style={styles.promoBadge}>
            <MaterialIcons name="local-offer" size={16} color={theme.colors.primaryGreen} />
            <Text style={styles.promoText}>Promo applied</Text>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleConfirmRide}
          activeOpacity={0.9}
        >
          <LinearGradient
            colors={[theme.colors.primary, '#ff3366']}
            style={styles.gradientButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.confirmButtonText}>Confirm Ride</Text>
            <MaterialIcons name="arrow-forward" size={20} color={theme.colors.text.primary} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.dark,
  },
 
  mapContainer: {
    flex: 1,
    backgroundColor: theme.colors.background.dark,
    position: 'relative',
  },
  mapGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0a0a0a',
   
  },
  route1: {
    position: 'absolute',
    top: '33%',
    left: '-3%',
    width: '110%',
    height: 8,
    backgroundColor: theme.colors.text.secondary,
    opacity: 0.6,
  },
  route2: {
    position: 'absolute',
    top: '66%',
    left: '12%',
    width: '85%',
    height: 8,
    backgroundColor: theme.colors.text.secondary,
    opacity: 0.6,
  },
  route3: {
    position: 'absolute',
    top: 0,
    left: '75%',
    width: 6,
    height: '100%',
    backgroundColor: theme.colors.text.secondary,
    opacity: 0.6,
  },
  route4: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: 6,
    backgroundColor: theme.colors.text.secondary,
    opacity: 0.6,
  },
  currentLocationContainer: {
    position: 'absolute',
    top: '33%',
    left: '50%',
    transform: [{ translateX: -32 }, { translateY: -32 }],
    alignItems: 'center',
  },
  locationBadge: {
    backgroundColor: theme.colors.surface.dark,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 6,
    borderRadius: theme.borderRadius.full,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    ...theme.shadows.sm,
  },
  locationBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  locationBadgeSubtext: {
    fontSize: 12,
    color: theme.colors.text.secondary,
  },
  locationMarker: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationPulse: {
    position: 'absolute',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(13, 242, 13, 0.2)',
  },
  locationDot: {
    width: 16,
    height: 16,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primaryGreen,
    borderWidth: 2,
    borderColor: theme.colors.background.dark,
    ...theme.shadows.md,
  },
  dropoffContainer: {
    position: 'absolute',
    top: '22%',
    left: '75%',
    alignItems: 'center',
  },
  dropoffBadge: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.full,
    marginBottom: 4,
    ...theme.shadows.md,
  },
  dropoffBadgeText: {
    color: theme.colors.text.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  mapControl: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.surface.dark,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    ...theme.shadows.sm,
  },
  menuButton: {
    position: 'absolute',
    top: 56,
    left: 16,
  },
  rightControls: {
    position: 'absolute',
    top: 56,
    right: 16,
    gap: 12,
  },
  bottomSheet: {
    backgroundColor: theme.colors.surface.dark,
    borderTopLeftRadius: theme.borderRadius.xxl,
    borderTopRightRadius: theme.borderRadius.xxl,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    ...theme.shadows.lg,
  },
  bottomSheetHandle: {
    width: 48,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: theme.spacing.lg,
  },
  locationContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  locationDots: {
    alignItems: 'center',
    marginTop: 4,
  },
  pickupDot: {
    width: 12,
    height: 12,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primaryGreen,
    borderWidth: 4,
    borderColor: 'rgba(13, 242, 13, 0.2)',
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginVertical: 4,
  },
  dropoffDot: {
    width: 12,
    height: 12,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primary,
    borderWidth: 4,
    borderColor: 'rgba(242, 13, 51, 0.2)',
  },
  locationDetails: {
    flex: 1,
    gap: 20,
  },
  locationSection: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingBottom: theme.spacing.sm,
  },
  locationLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.text.secondary,
    letterSpacing: 1,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text.primary,
    flex: 1,
    marginRight: 8,
  },
  editButton: {
    backgroundColor: 'rgba(13, 242, 13, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.sm,
  },
  editButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.primaryGreen,
  },
  dropoffText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    flex: 1,
    marginRight: 8,
  },
  distanceText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text.secondary,
  },
  rideOptionsScroll: {
    marginBottom: theme.spacing.lg,
  },
  rideOptionsContent: {
    gap: theme.spacing.sm,
    paddingHorizontal: 4,
  },
  rideOption: {
    width: 140,
    backgroundColor: theme.colors.surface.darker,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  selectedRideOption: {
    backgroundColor: theme.colors.surface.dark,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },
  bestValueRideOption: {
    position: 'relative',
  },
  bestValueBadge: {
    position: 'absolute',
    top: -12,
    right: 8,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.xs,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.full,
    zIndex: 10,
    ...theme.shadows.sm,
  },
  bestValueText: {
    color: theme.colors.text.primary,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  carImage: {
    width: '100%',
    height: 64,
    marginBottom: theme.spacing.sm,
  },
  rideOptionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  rideOptionName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  rideOptionTime: {
    fontSize: 10,
    color: theme.colors.text.secondary,
    marginTop: 2,
  },
  rideOptionPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    padding: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  paymentText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text.primary,
  },
  promoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  promoText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.text.secondary,
  },
  confirmButton: {
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    ...theme.shadows.md,
  },
  gradientButton: {
    paddingVertical: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
  confirmButtonText: {
    color: theme.colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});