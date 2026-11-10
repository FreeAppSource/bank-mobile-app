import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../../theme";
import Header from "../../components/Header";
import CreditCard from "../../components/CreditCard";
import { bankCards } from "../../data";

export default function CardsScreen() {
  const router = useRouter();
  const [cards, setCards] = useState(bankCards);
  const [onlinePay, setOnlinePay] = useState(true);
  const [atmAccess, setAtmAccess] = useState(true);

  const primaryCard = cards[0];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="My Account"
        subtitle="Manage Cards & Accounts"
        showBack={false}
        rightIcon="plus"
        onRightPress={() => router.push("/card-details")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Platinum MasterCard Preview */}
        <CreditCard
          card={primaryCard}
          onPress={() => router.push("/card-details")}
        />

        {/* Quick Card Controls */}
        <View style={styles.controlsRow}>
          <TouchableOpacity
            style={styles.controlBtn}
            onPress={() => router.push("/card-details")}
          >
            <View style={styles.controlIconCircle}>
              <Feather name="arrow-up-circle" size={18} color={colors.primary} />
            </View>
            <Text style={styles.controlLabel}>Top Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlBtn}
            onPress={() => router.push("/set-pin")}
          >
            <View style={styles.controlIconCircle}>
              <Feather name="key" size={18} color={colors.secondary} />
            </View>
            <Text style={styles.controlLabel}>Change PIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlBtn}
            onPress={() => router.push("/card-details")}
          >
            <View style={styles.controlIconCircle}>
              <Feather name="lock" size={18} color={colors.cyan} />
            </View>
            <Text style={styles.controlLabel}>Lock Card</Text>
          </TouchableOpacity>
        </View>

        {/* Linked Accounts (Links ON/OFF Card from Figma) */}
        <Text style={styles.sectionHeader}>Linked Accounts</Text>

        {cards.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={styles.accountCard}
            onPress={() => router.push("/card-details")}
            activeOpacity={0.8}
          >
            <View style={[styles.accIconCircle, { backgroundColor: `${c.color}15` }]}>
              <Feather
                name={c.type === "Digital Wallet" ? "globe" : "credit-card"}
                size={20}
                color={c.color}
              />
            </View>

            <View style={styles.accInfo}>
              <Text style={styles.accTitle}>{c.name}</Text>
              <Text style={styles.accSub}>{c.number}</Text>
            </View>

            <View style={styles.accRight}>
              <Text style={styles.accBalance}>
                ${c.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </Text>
              <Text style={styles.accLabel}>Available</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Security / Toggles from Figma Links ON/OFF Card */}
        <Text style={[styles.sectionHeader, { marginTop: spacing.lg }]}>Card Settings</Text>

        <View style={styles.toggleCard}>
          <View style={styles.toggleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleTitle}>Online Payment</Text>
              <Text style={styles.toggleSub}>Enable purchases on e-commerce websites</Text>
            </View>
            <Switch
              value={onlinePay}
              onValueChange={setOnlinePay}
              trackColor={{ false: colors.border, true: colors.primary }}
            />
          </View>

          <View style={styles.toggleDivider} />

          <View style={styles.toggleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.toggleTitle}>ATM Cash Withdrawal</Text>
              <Text style={styles.toggleSub}>Allow physical cash ATM disbursements</Text>
            </View>
            <Switch
              value={atmAccess}
              onValueChange={setAtmAccess}
              trackColor={{ false: colors.border, true: colors.primary }}
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
  controlsRow: {
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
  controlBtn: {
    alignItems: "center",
  },
  controlIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  controlLabel: {
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
  accountCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  accIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  accInfo: {
    flex: 1,
  },
  accTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  accSub: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  accRight: {
    alignItems: "flex-end",
  },
  accBalance: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  accLabel: {
    ...typography.caption,
    color: colors.gray,
  },
  toggleCard: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
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
  toggleDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
});
