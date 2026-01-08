import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

interface WelcomeScreenProps {
  navigation: any;
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const handleGetStarted = () => {
    navigation.navigate("AccountType");
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
  };

  const handleAppleSignIn = () => {
    // Handle Apple sign in
  };

  const handleSignIn = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Background Image */}
      <Image
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVWTsPNZZkPrCCAGp54fult8JZ4MoDVWZ9ptUkG1z3qbdYciqKPFw7mRsurJs8dtSAKEB7bskemwytNYdEGyLY3WJH6a6nS6Tb6xLeRQDT8SP4libkOCVaknpp9f4JJf-D_SRd4VsP52FuVZHj6AMDRjHqLc2uN8AvKU6QmNj5ouKNaPcy2vgNM1c8n5iDf40DIiYH40LsgMPCtcs5a9X026lSKdD-9oJSJ58ch32LDQ839xwbzMAeERKoUG6Z9HB3mv5qG3SYy36E",
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <LinearGradient
        colors={["rgba(9, 9, 11, 1)", "rgba(9, 9, 11, 0.6)", "transparent"]}
        style={styles.backgroundOverlay}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <MaterialIcons name="local-taxi" size={32} color="#DC2626" />
              <Text style={styles.logoText}>
                Ryd<Text style={styles.logoHighlight}>R</Text>
              </Text>
            </View>
          </View>

          {/* Content */}
          <View style={styles.content}>
            {/* Bottom Sheet */}
            <LinearGradient
              colors={["rgba(24, 24, 27, 0.95)", "rgba(24, 24, 27, 0.98)"]}
              style={styles.bottomSheet}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              {/* Handle */}
              <View style={styles.handle} />

              {/* Main Content */}
              <View style={styles.bottomContent}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>
                    Ride in <Text style={styles.titleHighlight}>Style</Text>.{"\n"}
                    Arrive on Time.
                  </Text>
                  <Text style={styles.subtitle}>
                    Premium rides at your fingertips. Experience the ultimate urban
                    transport solution.
                  </Text>
                </View>

                {/* Buttons */}
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    style={styles.primaryButton}
                    activeOpacity={0.9}
                    onPress={handleGetStarted}
                  >
                    <Text style={styles.primaryButtonText}>Get Started</Text>
                    <MaterialIcons
                      name="arrow-forward"
                      size={20}
                      color="#fff"
                      style={styles.buttonIcon}
                    />
                  </TouchableOpacity>

                  <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity
                      style={styles.socialButton}
                      activeOpacity={0.8}
                      onPress={handleGoogleSignIn}
                    >
                      <View style={styles.googleIconContainer}>
                        <FontAwesome name="google" size={20} color="#fafafaff" />
                      </View>
                      <Text style={styles.socialButtonText}>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.socialButton}
                      activeOpacity={0.8}
                      onPress={handleAppleSignIn}
                    >
                      <View style={styles.appleIconContainer}>
                        <MaterialIcons name="apple" size={20} color="#fff" />
                      </View>
                      <Text style={styles.socialButtonText}>Apple</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Login Prompt & Availability */}
                <View style={styles.footer}>
                  <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>
                      Already have an account?{" "}
                      <Text style={styles.loginLink} onPress={handleSignIn}>
                        Sign In
                      </Text>
                    </Text>
                  </View>

                  <View style={styles.availabilityContainer}>
                    <View style={styles.pulseContainer}>
                      <View style={styles.pulseOuter} />
                      <View style={styles.pulseInner} />
                    </View>
                    <Text style={styles.availabilityText}>
                      Drivers available nearby
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
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
    backgroundColor: "#09090b",
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    zIndex: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoText: {
    fontFamily: "ChakraPetch-Bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  logoHighlight: {
    color: "#DC2626",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: Platform.OS === 'android' ? 20 : 0,
  },
  bottomSheet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderTopWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 20,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 60,
    marginTop: 'auto',
  },
  handle: {
    width: 48,
    height: 6,
    backgroundColor: "#374151",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 32,
  },
  bottomContent: {
    paddingHorizontal: 32,
  },
  textContainer: {
    marginBottom: 32,
  },
  title: {
    fontFamily: "ChakraPetch-Bold",
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 44,
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  titleHighlight: {
    color: "#DC2626",
  },
  subtitle: {
    fontSize: 18,
    color: "#9ca3af",
    lineHeight: 28,
  },
  buttonsContainer: {
    gap: 16,
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: "#DC2626",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    shadowColor: "#991b1b",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonIcon: {
    marginLeft: 4,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    gap: 16,
  },
  socialButton: {
    flex: 1,
    backgroundColor: "#27272a",
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  googleIconContainer: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  appleIconContainer: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    gap: 24,
    marginTop: 'auto',
  },
  loginContainer: {
    alignItems: "center",
  },
  loginText: {
    fontSize: 14,
    color: "#9ca3af",
  },
  loginLink: {
    color: "#DC2626",
    fontWeight: "bold",
    fontSize: 14,
  },
  availabilityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "rgba(16, 185, 129, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(16, 185, 129, 0.2)",
  },
  pulseContainer: {
    position: "relative",
    width: 10,
    height: 10,
  },
  pulseOuter: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#10B981",
    opacity: 0.75,
  },
  pulseInner: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#10B981",
  },
  availabilityText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#10B981",
  },
  bottomSpacer: {
    height: Platform.OS === 'android' ? 30 : 20,
  },
});