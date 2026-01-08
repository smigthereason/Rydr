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
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

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
    price: '$18.50',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb6EDyIq0uDevHE31SXDNOJ4BpNtYa8-FUz6uJKPdCn9oOJ1NeSf6MU1FENkm6jTsRtpI8eV3I9XN8BQqDwZbkEDiDJim6rwCqw9SQH0ojPfgCQnCF61kNoJAl9fFK5d9x6yWpY0SXYoF5udmuEa9olh_dUlNPa0MBwoPtjd5Oq9M2kpNdCr48NpVMgGv4W_gwBZ4VgPmacfOK7ZvTUU55qvEMYkdrIJam5nG2YojcWxN4roha1Di_oVZAOtxoepLih8DXgBUFmxAl',
    isBestValue: true,
    isSelected: true,
  },
  {
    id: '2',
    name: 'Standard',
    time: '6 mins',
    price: '$14.20',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6017qtd0-Cuht6bC-6Q8IV1in6y_Jsbq5Wx55nXiDfOiVN43j-Su9EOv1F-p8LuFl_HCcf31aeCcV2YHI77_tz7ZCrP0yqEyqVLXz3uH2F3RWa_cMAqoionDwXUC4hLI_HutKPfEIrelBavvo1xf2FwlEaHNjRLrRDlIcJ0SFHU0PAfOx8r1CbS2fXAgcL1OpcHluCEtERQHw04_nYY4kpoaf9oWl31tm9qxIaFF6V7VunQhDoxFqtfOscazpg9eXoAvJQ1f-uG7p',
  },
  {
    id: '3',
    name: 'Lux',
    time: '12 mins',
    price: '$28.00',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHVlLebzaI9PxiEkNjtyLkrt_STrBRokLH-fsBdu4_mbBw3GyvBX6yv7UQwOx9MuTBVkvoTB2IcGHzP6c0tzWYbhafyYn7E05KwaEM9g8h0l0_X-r0Py1heeHmfTbzWL05OJZGPQqGOK6b84AzvCw4gypLZu6wpUmt7qMM-DB-fGg49sEnOk9Vp3ojjiULrId1KD4ZPs1OQEKjL5V6Mv80nTXxMKdu5XeXoMyUuWD-DrAeTdv32NXWuao1Npyy9YTl0MmrntOuAc1C',
  },
];

interface MapAndRideRequestScreenProps {
  navigation: any;
}

export default function MapAndRideRequestScreen({ navigation }: MapAndRideRequestScreenProps) {
  const [selectedRide, setSelectedRide] = useState<string>('1');

  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar (Mock) */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>9:41</Text>
        <View style={styles.statusIcons}>
          <MaterialIcons name="signal-cellular-alt" size={16} color="#111827" />
          <MaterialIcons name="wifi" size={16} color="#111827" />
          <MaterialIcons name="battery-full" size={16} color="#111827" />
        </View>
      </View>

      {/* Map Background */}
      <View style={styles.mapContainer}>
        {/* Map Grid Lines */}
        <View style={styles.mapGrid} />
        
        {/* Routes */}
        <View style={styles.route1} />
        <View style={styles.route2} />
        <View style={styles.route3} />
        <View style={styles.route4} />

        {/* Current Location Marker */}
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

        {/* Drop-off Marker */}
        <View style={styles.dropoffContainer}>
          <View style={styles.dropoffBadge}>
            <Text style={styles.dropoffBadgeText}>Drop-off</Text>
          </View>
          <MaterialIcons name="location-on" size={36} color="#EF4444" />
        </View>

        {/* Map Controls */}
        <TouchableOpacity style={[styles.mapControl, styles.menuButton]}>
          <MaterialIcons name="menu" size={24} color="#111827" />
        </TouchableOpacity>

        <View style={styles.rightControls}>
          <TouchableOpacity style={styles.mapControl}>
            <MaterialIcons name="search" size={24} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mapControl}>
            <MaterialIcons name="my-location" size={24} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.bottomSheetHandle} />
        
        {/* Pickup and Drop-off */}
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
                <Text style={styles.locationText}>Current Location</Text>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.locationSection}>
              <Text style={styles.locationLabel}>DROP-OFF</Text>
              <View style={styles.locationRow}>
                <Text style={styles.dropoffText}>Shinjuku Station, Tokyo</Text>
                <Text style={styles.distanceText}>4.2 km</Text>
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
                option.isSelected && styles.selectedRideOption,
                option.isBestValue && styles.bestValueRideOption,
              ]}
              onPress={() => setSelectedRide(option.id)}
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
            <MaterialIcons name="credit-card" size={20} color="#EF4444" />
            <Text style={styles.paymentText}>**** 4291</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} color="#9CA3AF" />
          </TouchableOpacity>
          
          <View style={styles.promoBadge}>
            <MaterialIcons name="local-offer" size={16} color="#10B981" />
            <Text style={styles.promoText}>Promo applied</Text>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Ride</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 8,
    zIndex: 50,
  },
  statusTime: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    position: 'relative',
  },
  mapGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1a1a1a',
    backgroundImage: 'linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  },
  route1: {
    position: 'absolute',
    top: '33%',
    left: '-3%',
    width: '110%',
    height: 8,
    backgroundColor: '#9CA3AF',
    opacity: 0.6,
  },
  route2: {
    position: 'absolute',
    top: '66%',
    left: '12%',
    width: '85%',
    height: 8,
    backgroundColor: '#9CA3AF',
    opacity: 0.6,
  },
  route3: {
    position: 'absolute',
    top: 0,
    left: '75%',
    width: 6,
    height: '100%',
    backgroundColor: '#9CA3AF',
    opacity: 0.6,
  },
  route4: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: 6,
    backgroundColor: '#9CA3AF',
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
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  locationBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
  locationBadgeSubtext: {
    fontSize: 12,
    color: '#6B7280',
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
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    animation: 'pulse 2s infinite',
  },
  locationDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  dropoffContainer: {
    position: 'absolute',
    top: '22%',
    left: '75%',
    alignItems: 'center',
  },
  dropoffBadge: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  dropoffBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  mapControl: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 10,
  },
  bottomSheetHandle: {
    width: 48,
    height: 6,
    backgroundColor: '#D1D5DB',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 24,
  },
  locationContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  locationDots: {
    alignItems: 'center',
    marginTop: 4,
  },
  pickupDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981',
    borderWidth: 4,
    borderColor: 'rgba(16, 185, 129, 0.2)',
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: '#D1D5DB',
    marginVertical: 4,
  },
  dropoffDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#EF4444',
    borderWidth: 4,
    borderColor: 'rgba(239, 68, 68, 0.2)',
  },
  locationDetails: {
    flex: 1,
    gap: 20,
  },
  locationSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 12,
  },
  locationLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    letterSpacing: 1,
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  editButton: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  editButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#10B981',
  },
  dropoffText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  distanceText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  rideOptionsScroll: {
    marginBottom: 20,
  },
  rideOptionsContent: {
    gap: 12,
    paddingHorizontal: 4,
  },
  rideOption: {
    width: 140,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedRideOption: {
    backgroundColor: '#fff',
    borderColor: '#EF4444',
    borderWidth: 2,
  },
  bestValueRideOption: {
    position: 'relative',
  },
  bestValueBadge: {
    position: 'absolute',
    top: -12,
    right: 8,
    backgroundColor: '#EF4444',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  bestValueText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  carImage: {
    width: '100%',
    height: 64,
    marginBottom: 8,
  },
  rideOptionDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  rideOptionName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  rideOptionTime: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
  },
  rideOptionPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
  paymentText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  promoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  promoText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  confirmButton: {
    backgroundColor: '#EF4444',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});