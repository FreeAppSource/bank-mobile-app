import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";

export default function TransactionItem({ transaction, onPress }) {
  const isPositive = transaction.amount > 0;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.iconCircle,
          { backgroundColor: transaction.color ? `${transaction.color}15` : colors.primarySoft },
        ]}
      >
        <Feather
          name={transaction.icon || "credit-card"}
          size={18}
          color={transaction.color || colors.primary}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{transaction.title}</Text>
        <Text style={styles.meta}>{transaction.category} • {transaction.date}</Text>
      </View>

      <Text
        style={[
          styles.amount,
          isPositive ? styles.amountPositive : styles.amountNegative,
        ]}
      >
        {isPositive ? `+$${transaction.amount.toFixed(2)}` : `-$${Math.abs(transaction.amount).toFixed(2)}`}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  info: {
    flex: 1,
  },
  title: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  meta: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  amount: {
    ...typography.bodyLarge,
    fontWeight: "700",
  },
  amountPositive: {
    color: colors.success,
  },
  amountNegative: {
    color: colors.dark,
  },
});
