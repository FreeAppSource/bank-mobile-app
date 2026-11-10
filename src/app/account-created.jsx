import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import CustomButton from "../components/CustomButton";

export default function AccountCreatedScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Feather name="check" size={48} color={colors.white} />
        </View>

        <Text style={styles.title}>Account Created!</Text>
        <Text style={styles.description}>
          Dear user your account has been created successfully. Continue to start using Bank EC.
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.terms}>
          By clicking start, you agree to our Privacy Policy and Terms and Conditions
        </Text>
        <CustomButton
          title="Continue"
          variant="primary"
          onPress={() => router.push("/set-pin")}
          style={{ width: "100%", marginTop: spacing.md }}
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
    paddingBottom: spacing.xl,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.success,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.dark,
    marginBottom: 8,
  },
  description: {
    ...typography.bodyLarge,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: spacing.md,
  },
  bottomSection: {
    alignItems: "center",
  },
  terms: {
    ...typography.caption,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 18,
  },
});
