import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import CustomButton from "../components/CustomButton";

const { width } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();

  const slides = [
    {
      title: "Bank EC",
      tagline: "Bank, Finance Kit",
      description: "Transfer money, manage Platinum Cards, and track monthly budgets with complete clarity.",
      icon: "shield",
      color: colors.primary,
    },
    {
      title: "Real-time Budgets",
      tagline: "Smart Spending Controls",
      description: "Keep dining, fuel, and medical expenses strictly on track with instant alerts.",
      icon: "pie-chart",
      color: colors.secondary,
    },
    {
      title: "Tap & QR Payments",
      tagline: "Instant Peer Transfers",
      description: "Simply show your personal QR code and your friends can scan and tap to send funds.",
      icon: "zap",
      color: colors.cyan,
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const slide = slides[activeIdx];

  const handleNext = () => {
    if (activeIdx < slides.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      router.push("/login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Brand Logo */}
      <View style={styles.topSection}>
        <View style={styles.logoBadge}>
          <Text style={styles.logoBadgeText}>B</Text>
        </View>
        <Text style={styles.appName}>Bank EC</Text>
        <Text style={styles.appSub}>Bank, Finance Kit</Text>
      </View>

      {/* Center Illustration Hero */}
      <View style={styles.centerSection}>
        <View style={[styles.heroCircle, { backgroundColor: `${slide.color}15` }]}>
          <Feather name={slide.icon} size={64} color={slide.color} />
        </View>

        {/* Dots */}
        <View style={styles.dotsRow}>
          {slides.map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.dot, i === activeIdx && styles.activeDot]}
              onPress={() => setActiveIdx(i)}
            />
          ))}
        </View>

        <Text style={styles.slideTitle}>{slide.title}</Text>
        <Text style={styles.slideTagline}>{slide.tagline}</Text>
        <Text style={styles.slideDesc}>{slide.description}</Text>
      </View>

      {/* Bottom Action Stack */}
      <View style={styles.bottomSection}>
        <CustomButton
          title="Sign in My Account"
          variant="primary"
          onPress={() => router.push("/login")}
          style={{ marginBottom: spacing.sm }}
        />
        <CustomButton
          title="Create New Account"
          variant="outline"
          onPress={() => router.push("/signup")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
  },
  topSection: {
    alignItems: "center",
    paddingTop: spacing.lg,
  },
  logoBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xs,
    ...shadows.md,
  },
  logoBadgeText: {
    ...typography.h2,
    color: colors.white,
    fontWeight: "900",
  },
  appName: {
    ...typography.h2,
    color: colors.dark,
    letterSpacing: 1,
  },
  appSub: {
    ...typography.caption,
    color: colors.gray,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginTop: 2,
  },
  centerSection: {
    alignItems: "center",
    paddingHorizontal: spacing.md,
  },
  heroCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  dotsRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: spacing.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  activeDot: {
    width: 24,
    backgroundColor: colors.primary,
  },
  slideTitle: {
    ...typography.h1,
    color: colors.dark,
    textAlign: "center",
  },
  slideTagline: {
    ...typography.bodyMedium,
    color: colors.primary,
    fontWeight: "700",
    marginTop: 4,
  },
  slideDesc: {
    ...typography.bodyMedium,
    color: colors.gray,
    textAlign: "center",
    marginTop: spacing.sm,
    lineHeight: 22,
  },
  bottomSection: {
    paddingBottom: spacing.xl,
  },
});
