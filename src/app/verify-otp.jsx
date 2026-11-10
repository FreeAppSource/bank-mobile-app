import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function VerifyOtpScreen() {
  const router = useRouter();
  const { phone } = useLocalSearchParams();
  // Exact 4-digit code from Figma: 7 5 1 8
  const [digits, setDigits] = useState(["7", "5", "1", "8"]);

  const handleProceed = () => {
    router.push("/account-created");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Verify Account!" />

      <View style={styles.content}>
        <View style={styles.topInfo}>
          <Text style={styles.title}>Enter 4-digit Code</Text>
          <Text style={styles.description}>
            Enter 4-digit code we have sent to at{" "}
            <Text style={{ fontWeight: "700", color: colors.dark }}>
              {phone ? `+1 ${phone}` : "+0 000 000 0000"}
            </Text>
          </Text>

          {/* OTP Box Display */}
          <View style={styles.otpRow}>
            {digits.map((d, i) => (
              <View key={i} style={styles.otpBox}>
                <Text style={styles.otpDigit}>{d}</Text>
              </View>
            ))}
          </View>

          <View style={styles.resendRow}>
            <Text style={styles.resendPrompt}>Didn’t receive the code? </Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.terms}>
            By clicking start, you agree to our Privacy Policy and Terms and Conditions
          </Text>
          <CustomButton
            title="Proceed"
            variant="primary"
            onPress={handleProceed}
            style={{ width: "100%", marginTop: spacing.md }}
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
  topInfo: {
    alignItems: "center",
    marginTop: spacing.xl,
  },
  title: {
    ...typography.h1,
    color: colors.dark,
  },
  description: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    marginTop: 6,
    lineHeight: 20,
    paddingHorizontal: spacing.md,
  },
  otpRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  otpBox: {
    width: 60,
    height: 60,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  otpDigit: {
    ...typography.h1,
    color: colors.dark,
  },
  resendRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.lg,
  },
  resendPrompt: {
    ...typography.bodyMedium,
    color: colors.gray,
  },
  resendLink: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
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
