import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import { expenseCategories } from "../data";

export default function ExpensesScreen() {
  const total = 1200; // Exact amount from Figma Expenses Screen ($1200)

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Expenses" subtitle={`$${total} Total`} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.totalHero}>
          <Text style={styles.totalLabel}>Total Expenses</Text>
          <Text style={styles.totalValue}>${total}</Text>
        </View>

        <Text style={styles.sectionHeader}>Categories</Text>

        {expenseCategories.map((c) => (
          <View key={c.id} style={styles.categoryRow}>
            <View style={[styles.catIcon, { backgroundColor: `${c.color}15` }]}>
              <Feather name={c.icon} size={20} color={c.color} />
            </View>

            <View style={styles.catInfo}>
              <Text style={styles.catTitle}>{c.title}</Text>
              <Text style={styles.catCount}>{c.transactionsCount} transactions</Text>
            </View>

            <Text style={styles.catSpent}>${c.spent}</Text>
          </View>
        ))}
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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xxl,
  },
  totalHero: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: spacing.md,
  },
  totalLabel: {
    ...typography.caption,
    color: colors.gray,
    textTransform: "uppercase",
  },
  totalValue: {
    ...typography.h1,
    fontSize: 40,
    color: colors.dark,
    marginVertical: 4,
  },
  sectionHeader: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.md,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  catIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  catInfo: {
    flex: 1,
  },
  catTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  catCount: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  catSpent: {
    ...typography.h3,
    color: colors.dark,
  },
});
