import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import Keypad from "../components/Keypad";

export default function MonthlyBudgetScreen() {
  const router = useRouter();
  // Exact $1000 from Figma Monthly Budget Screen
  const [budgetAmount, setBudgetAmount] = useState("1000");

  const handleKeyPress = (digit) => {
    if (budgetAmount.length < 6) {
      setBudgetAmount(budgetAmount + digit);
    }
  };

  const handleDelete = () => {
    if (budgetAmount.length > 0) {
      setBudgetAmount(budgetAmount.slice(0, -1));
    }
  };

  const handleSave = () => {
    Alert.alert("Budget Updated", `Your monthly budget has been configured to $${budgetAmount}!`, [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Monthly Budget Setting" />

      <View style={styles.content}>
        <View style={styles.topDisplay}>
          <Text style={styles.label}>Configured Spending Cap</Text>
          <View style={styles.amountRow}>
            <Text style={styles.currency}>$</Text>
            <Text style={styles.amountText}>{budgetAmount || "0"}</Text>
          </View>
          <Text style={styles.hint}>
            We will alert you whenever your daily burn exceeds safe thresholds.
          </Text>
        </View>

        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} />

        <CustomButton
          title="Continue"
          variant="primary"
          onPress={handleSave}
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
  topDisplay: {
    alignItems: "center",
    marginTop: spacing.md,
  },
  label: {
    ...typography.caption,
    color: colors.gray,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.sm,
  },
  currency: {
    ...typography.h1,
    fontSize: 44,
    color: colors.primary,
    marginRight: 4,
  },
  amountText: {
    ...typography.h1,
    fontSize: 48,
    color: colors.dark,
    fontWeight: "900",
  },
  hint: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    paddingHorizontal: spacing.md,
    lineHeight: 20,
  },
});
