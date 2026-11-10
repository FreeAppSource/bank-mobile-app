import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function TouchIdScreen() {
  const router = useRouter();

  const handleActivate = () => {
    router.replace("/(tabs)");
  };

  const handleSkip = () => {
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Touch ID" showBack={false} />

      <View style={styles.content}>
        <View style={styles.centerBox}>
          <View style={styles.fingerprintCircle}>
            <Feather name="disc" size={64} color={colors.primary} />
          </View>
          <Text style={styles.title}>Use Touch ID to authorise payments</Text>
          <Text style={styles.description}>
            Activate touch ID so you don’t need to confirm your PIN every time you want to send money.
          </Text>
        </View>

        <View style={styles.buttonStack}>
          <CustomButton
            title="Activate Now"
            variant="primary"
            onPress={handleActivate}
            style={{ marginBottom: spacing.sm }}
          />
          <CustomButton
            title="Skip This"
            variant="text"
            onPress={handleSkip}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-between",
    paddingBottom: spacing.xl,
  },
  centerBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.md,
  },
  fingerprintCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.h2,
    color: colors.dark,
    textAlign: "center",
  },
  description: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    marginTop: spacing.sm,
    lineHeight: 22,
  },
  buttonStack: {
    width: "100%",
  },
});
