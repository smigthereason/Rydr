import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
  Platform,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../utils/theme';

const { width } = Dimensions.get('window');

interface Slide {
  id: string;
  title: string;
  highlighted: string;
  description: string;
  icon: string;
  imageUrl: string;
}

// Updated with Kenyan images
const slides: Slide[] = [
  {
    id: '1',
    title: 'Set Your',
    highlighted: 'Pickup',
    description: 'Choose your location instantly with our precision GPS mapping across Kenya.',
    icon: 'location-on',
    imageUrl: 'https://images.unsplash.com/photo-1593693399748-2b8d4cac76d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', // Nairobi skyline
  },
  {
    id: '2',
    title: 'Track Your',
    highlighted: 'Ride',
    description: 'Watch your driver arrive in real-time on the map across Kenyan cities.',
    icon: 'local-taxi',
    imageUrl: 'https://images.unsplash.com/photo-1592859600970-2c2338abf1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', // Nairobi traffic
  },
  {
    id: '3',
    title: 'Cashless',
    highlighted: 'Payment',
    description: 'Secure, automatic payments with M-Pesa so you can just hop out.',
    icon: 'credit-card',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', // Kenyan market
  },
];

export default function AppTourScreen() {
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleMomentumScrollEnd = (event: any) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slide);
  };

  const handleSkip = () => {
    navigation.navigate('MapRideRequest' as never);
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (currentSlide + 1) * width,
        animated: true,
      });
    } else {
      navigation.navigate('MapRideRequest' as never);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background.darkGreen} translucent />
      
      <SafeAreaView style={styles.safeArea}>
        {/* Ambient Background Effect */}
        <View style={styles.ambientBackground} />

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <MaterialIcons name="local-taxi" size={24} color={theme.colors.primaryGreen} />
            <Text style={styles.logoText}>
              Ryd<Text style={styles.logoHighlight}>R</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton} activeOpacity={0.7}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            onMomentumScrollEnd={handleMomentumScrollEnd}
            scrollEventThrottle={16}
          >
            {slides.map((slide, index) => (
              <View key={slide.id} style={styles.slide}>
                {/* Image Container */}
                <View style={styles.imageContainer}>
                  <View style={styles.imageBackground} />
                  <View style={styles.imageWrapper}>
                    <Image
                      source={{ uri: slide.imageUrl }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                    <View style={styles.imageOverlay}>
                      <View style={styles.iconGlowBackground} />
                      <MaterialIcons
                        name={slide.icon as any}
                        size={72}
                        color={theme.colors.primaryGreen}
                        style={styles.icon}
                      />
                    </View>
                  </View>
                </View>

                {/* Text Content */}
                <View style={styles.textContainer}>
                  <Text style={styles.title}>
                    {slide.title}{' '}
                    <Text style={styles.highlighted}>{slide.highlighted}</Text>
                  </Text>
                  <Text style={styles.description}>{slide.description}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Bottom Controls */}
        <View style={styles.bottomContainer}>
          {/* Indicators */}
          <View style={styles.indicators}>
            {slides.map((_, index) => {
              const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
              const widthAnim = scrollX.interpolate({
                inputRange,
                outputRange: [6, 32, 6],
                extrapolate: 'clamp',
              });
              const opacityAnim = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View
                  key={index}
                  style={[
                    styles.indicator,
                    {
                      width: widthAnim,
                      opacity: opacityAnim,
                      backgroundColor: index === currentSlide ? theme.colors.primaryGreen : theme.colors.surface.darkGreen,
                    },
                  ]}
                />
              );
            })}
          </View>

          {/* Action Button */}
          <TouchableOpacity
            style={[styles.actionButton, currentSlide === slides.length - 1 && styles.getStartedButton]}
            onPress={handleNext}
            activeOpacity={0.9}
          >
            <Text style={styles.actionButtonText}>
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            </Text>
            <MaterialIcons
              name="arrow-forward"
              size={20}
              color="#fff"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          
          {/* Bottom spacer for Android navigation bar */}
          <View style={styles.bottomSpacer} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.darkGreen,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  ambientBackground: {
    position: 'absolute',
    top: '-20%',
    left: '-10%',
    width: '120%',
    height: '50%',
    borderRadius: 1000,
    backgroundColor: 'rgba(13, 242, 89, 0.05)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    fontSize: 20,
    color: theme.colors.text.primary,
    letterSpacing: 1,
  },
  logoHighlight: {
    color: theme.colors.primaryGreen,
  },
  skipButton: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: 20,
  },
  skipText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    fontFamily: theme.fonts.plusJakarta + '-Medium',
  },
  carouselContainer: {
    flex: 1,
  },
  slide: {
    width,
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 4/5,
    maxHeight: 400,
    marginBottom: theme.spacing.xl,
  },
  imageBackground: {
    position: 'absolute',
    top: theme.spacing.lg,
    bottom: theme.spacing.lg,
    left: theme.spacing.lg,
    right: theme.spacing.lg,
    backgroundColor: 'transparent',
    borderRadius: theme.borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    ...theme.shadows.lg,
  },
  imageWrapper: {
    flex: 1,
    margin: theme.spacing.xl,
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    ...theme.shadows.lg,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGlowBackground: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(13, 242, 89, 0.2)',
  },
  icon: {
    shadowColor: theme.colors.primaryGreen,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: 280,
    gap: theme.spacing.md,
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: 32,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    textAlign: 'center',
    lineHeight: 40,
  },
  highlighted: {
    color: theme.colors.primaryGreen,
  },
  description: {
    color: theme.colors.text.secondary,
    fontSize: 16,
    fontFamily: theme.fonts.plusJakarta + '-Regular',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? theme.spacing.xl : theme.spacing.xl + 20,
    paddingTop: theme.spacing.lg,
    gap: theme.spacing.xl,
    alignItems: 'center',
  },
  indicators: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    alignItems: 'center',
  },
  indicator: {
    height: 6,
    borderRadius: 3,
  },
  actionButton: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    ...theme.shadows.md,
  },
  getStartedButton: {
    backgroundColor: theme.colors.primary,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: theme.fonts.plusJakarta + '-Bold',
    letterSpacing: 0.5,
  },
  arrowIcon: {
    marginLeft: 4,
  },
  bottomSpacer: {
    height: Platform.OS === 'android' ? 20 : 0,
  },
});