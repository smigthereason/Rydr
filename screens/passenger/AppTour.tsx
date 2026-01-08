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
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface Slide {
  id: string;
  title: string;
  highlighted: string;
  description: string;
  icon: string;
  imageUrl: string;
}

const slides: Slide[] = [
  {
    id: '1',
    title: 'Set Your',
    highlighted: 'Pickup',
    description: 'Choose your location instantly with our precision GPS mapping.',
    icon: 'location-on',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBBGIBmS1QE9Pmc73kJM2-79FjShfCAB18ep4xRXfkaypMHthJIGj2Nff9AZJ_N0GabeUICGRhZXeC9ngD1SXTxk-cLKRMIP4ywUmYDf0yakN_EQwsPHmnBB-ewDag3CKAKsbGpWhcfWeP0KdED09jEM6eSgvJxKW73bv9-jl1huFxy8sgayGPFX9hVDNCk05psQ0cq4dfzvo4UaWPslZEOfQvBrbQ50gvG2YFtGY7S0SHgEtmZIF70zi3Nlx_jeCh0HzvFQ5xDKAA',
  },
  {
    id: '2',
    title: 'Track Your',
    highlighted: 'Ride',
    description: 'Watch your driver arrive in real-time on the map.',
    icon: 'local-taxi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM82R-xXPoNEJm_yNVITKlSqzro_DuZ3DHM7SM7yn1EWeQbYv1pipNNV2B_H4k1EG6U3u6ania82usQMk8qapDSYjhLOVhWsByhDl6z0cwS-C3-mt4Ivn6wznWusZhVtaEASOgySPSnsSNKA9FFocUTzuX4ZIAk7oWLYaxHaXyicSORCH1LOUZnuilSdlB2VTHcgGIDMLHbdCRWC0DXsIy763uKtyVtOAOzEQ8BgoznA3dzLm5sC2sDjahHSBUHzrYtz_Z031ATEZJ',
  },
  {
    id: '3',
    title: 'Cashless',
    highlighted: 'Payment',
    description: 'Secure, automatic payments so you can just hop out.',
    icon: 'credit-card',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwJ8jNGTDt5SUWfJ3Csp5OAsD5JIZYDWHeh39A0n3EhxmUPNolK1dNH8JfuciqdmM9GGInuxe2N_Pe0Cvx0MdN1oPLCQ5TUGhizTn0blAvxV0fZeLTh7RrPk2d4dK7g-RYgzEJf5QpEREmZmVi0NAMAWIMjamkr0vKmE7zsLX2UqZTqMOCm-_wtldOS0nz9cdFT-Yb7r8t67GxIaPWhYottZtt1zOZ6pS6H1WL5d4gtyQOmqtfVVT4Q5yZHvt5hWCG5-hMezpWBsOw',
  },
];

interface AppTourScreenProps {
  navigation: any;
}

export default function AppTourScreen({ navigation }: AppTourScreenProps) {
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
    navigation.navigate('Home');
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (currentSlide + 1) * width,
        animated: true,
      });
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Ambient Background Effect */}
      <View style={styles.ambientBackground} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoDot} />
          <Text style={styles.logoText}>TAXI.GO</Text>
        </View>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
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
                      color="#0df259"
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
                    backgroundColor: index === currentSlide ? '#0df259' : '#1A2C20',
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102216',
  },
  ambientBackground: {
    position: 'absolute',
    top: '-20%',
    left: '-10%',
    width: '120%',
    height: '50%',
    borderRadius: 1000,
    backgroundColor: 'rgba(13, 242, 89, 0.05)',
    blurRadius: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0df259',
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  skipButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  skipText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    fontWeight: '500',
  },
  carouselContainer: {
    flex: 1,
  },
  slide: {
    width,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 4/5,
    maxHeight: 400,
    marginBottom: 32,
  },
  imageBackground: {
    position: 'absolute',
    top: 16,
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: 'transparent',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
  },
  imageWrapper: {
    flex: 1,
    margin: 32,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
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
    filter: 'blur(20px)',
  },
  icon: {
    shadowColor: '#0df259',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: 280,
    gap: 12,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 40,
  },
  highlighted: {
    color: '#0df259',
  },
  description: {
    color: '#9CA3AF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 16,
    gap: 32,
    alignItems: 'center',
  },
  indicators: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  indicator: {
    height: 6,
    borderRadius: 3,
  },
  actionButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 5,
  },
  getStartedButton: {
    backgroundColor: '#FF3B30',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  arrowIcon: {
    marginLeft: 8,
  },
});