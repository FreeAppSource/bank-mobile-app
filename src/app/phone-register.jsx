import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import Keypad from "../components/Keypad";

export default function PhoneRegisterScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("090078601");

  const handleKeyPress = (digit) => {
    if (phoneNumber.length < 12) {
      setPhoneNumber(phoneNumber + digit);
    }
  };

  const handleDelete = () => {
    if (phoneNumber.length > 0) {
      setPhoneNumber(phoneNumber.slice(0, -1));
    }
  };

  const handleSendCode = () => {
    router.push({
      pathname: "/verify-otp",
      params: { phone: phoneNumber },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mobile Number" />

      <View style={styles.content}>
        <View style={styles.topInfo}>
          <Text style={styles.title}>Mobile Number Register</Text>
          <Text style={styles.description}>
            Please enter your valid phone number. We will send you a 4-digit code to verify your account.
          </Text>

          {/* Number Display */}
          <View style={styles.displayCard}>
            <Text style={styles.countryCode}>+1</Text>
            <Text style={styles.phoneDisplay}>
              {phoneNumber ? phoneNumber : "Enter phone"}
            </Text>
          </View>
        </View>

        {/* Custom Numeric Keypad from Figma */}
        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} />

        <CustomButton
          title="Send Code"
          variant="primary"
          onPress={handleSendCode}
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
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-between",
    paddingBottom: spacing.lg,
  },
  topInfo: {
    alignItems: "center",
    marginTop: spacing.md,
  },
  title: {
    ...typography.h2,
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
  displayCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    height: 56,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.lg,
    width: "100%",
    justifyContent: "center",
    gap: 8,
  },
  countryCode: {
    ...typography.h3,
    color: colors.primary,
  },
  phoneDisplay: {
    ...typography.h2,
    color: colors.dark,
    letterSpacing: 2,
  },
});
