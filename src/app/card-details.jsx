import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CreditCard from "../components/CreditCard";
import CustomButton from "../components/CustomButton";
import { bankCards } from "../data";

export default function CardDetailsScreen() {
  const router = useRouter();
  const [card, setCard] = useState(bankCards[0]);
  const [locked, setLocked] = useState(false);
  const [contactless, setContactless] = useState(true);

  const handleTopUp = () => {
    Alert.alert("Top Up", "Select funding source to add funds to Platinum MasterCard.", [
      { text: "BankWest Checking", onPress: () => Alert.alert("Success", "Added $250.00 to card!") },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Your Platinum Card" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CreditCard card={card} />

        {/* Quick Actions (Points Cards from Figma) */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn} onPress={handleTopUp}>
            <View style={[styles.iconCircle, { backgroundColor: colors.primarySoft }]}>
              <Feather name="plus-circle" size={20} color={colors.primary} />
            </View>
            <Text style={styles.actionLabel}>Top Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/set-pin")}>
            <View style={[styles.iconCircle, { backgroundColor: colors.secondarySoft }]}>
              <Feather name="key" size={20} color={colors.secondary} />
            </View>
            <Text style={styles.actionLabel}>Change PIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn} onPress={() => setLocked(!locked)}>
            <View style={[styles.iconCircle, { backgroundColor: locked ? colors.dangerSoft : colors.cyanSoft }]}>
              <Feather name={locked ? "lock" : "unlock"} size={20} color={locked ? colors.danger : colors.cyan} />
            </View>
            <Text style={styles.actionLabel}>{locked ? "Locked" : "Lock Card"}</Text>
          </TouchableOpacity>
        </View>

        {/* Card Settings List (Setting Category from Figma) */}
        <Text style={styles.sectionHeader}>Settings</Text>

        <TouchableOpacity
          style={styles.settingCard}
          onPress={() => router.push("/monthly-budget")}
        >
          <View style={styles.settingLeft}>
            <View style={[styles.setCircle, { backgroundColor: colors.primarySoft }]}>
              <Feather name="sliders" size={18} color={colors.primary} />
            </View>
            <View>
              <Text style={styles.settingTitle}>Set card limit</Text>
              <Text style={styles.settingSub}>You set budget for 3 categories</Text>
            </View>
          </View>
          <Feather name="chevron-right" size={18} color={colors.gray} />
        </TouchableOpacity>

        <View style={styles.toggleCard}>
          <View style={styles.toggleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleTitle}>Contactless Payments</Text>
              <Text style={styles.toggleSub}>Tap to pay on POS terminals</Text>
            </View>
            <Switch
              value={contactless}
              onValueChange={setContactless}
              trackColor={{ false: colors.border, true: colors.primary }}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.toggleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleTitle}>Card Lock Status</Text>
              <Text style={styles.toggleSub}>Freeze all debit and credit transactions</Text>
            </View>
            <Switch
              value={locked}
              onValueChange={setLocked}
              trackColor={{ false: colors.border, true: colors.danger }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingTop: spacing.xs,
    paddingBottom: spacing.xxl,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionBtn: {
    alignItems: "center",
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  actionLabel: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.dark,
  },
  sectionHeader: {
    ...typography.h3,
    color: colors.dark,
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  settingCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  setCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  settingTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  settingSub: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  toggleCard: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.sm,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  toggleSub: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
});
