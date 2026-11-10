import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";

export default function CreditCard({ card, onPress, onTopUp, onChangePin, onLock }) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: card.color || colors.primary }]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Top Card Bar */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.cardType}>{card.type}</Text>
          <Text style={styles.cardName}>{card.name}</Text>
        </View>
        <Feather name="wifi" size={20} color={colors.white} />
      </View>

      {/* Chip & Masked Number */}
      <View style={styles.chipRow}>
        <View style={styles.chip} />
        <Text style={styles.cardNumber}>{card.number}</Text>
      </View>

      {/* Bottom Balance & Holder */}
      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceValue}>
            ${card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </Text>
        </View>

        <View style={styles.holderBlock}>
          <Text style={styles.holderLabel}>Card Holder</Text>
          <Text style={styles.holderName}>{card.holder}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: radius.lg,
    padding: spacing.lg,
    justifyContent: "space-between",
    marginHorizontal: spacing.lg,
    ...shadows.lg,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardType: {
    ...typography.caption,
    color: "rgba(255,255,255,0.75)",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  cardName: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.white,
  },
  chipRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  chip: {
    width: 36,
    height: 26,
    borderRadius: radius.xs,
    backgroundColor: "#FAD202",
    opacity: 0.9,
  },
  cardNumber: {
    ...typography.h4,
    color: colors.white,
    letterSpacing: 2,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  balanceLabel: {
    ...typography.caption,
    color: "rgba(255,255,255,0.75)",
  },
  balanceValue: {
    ...typography.h2,
    color: colors.white,
    marginTop: 2,
  },
  holderBlock: {
    alignItems: "flex-end",
  },
  holderLabel: {
    ...typography.caption,
    color: "rgba(255,255,255,0.75)",
  },
  holderName: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.white,
    marginTop: 2,
  },
});
