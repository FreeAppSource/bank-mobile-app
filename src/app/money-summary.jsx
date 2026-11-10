import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import { expenseCategories } from "../data";

export default function MoneySummaryScreen() {
  const spending = 1785; // Exact $1,785 from Figma Money Summary Screen

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Summary" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryHero}>
          <Text style={styles.heroLabel}>This month spending</Text>
          <Text style={styles.heroAmount}>${spending.toLocaleString()}</Text>

          <View style={styles.praiseBadge}>
            <Feather name="check-circle" size={16} color={colors.success} />
            <Text style={styles.praiseText}>Great</Text>
          </View>

          <Text style={styles.heroMessage}>
            Well done you have maintain your spending under control
          </Text>
        </View>

        <Text style={styles.sectionHeader}>Top Category</Text>

        {expenseCategories.slice(0, 3).map((cat) => (
          <View key={cat.id} style={styles.catCard}>
            <View style={[styles.catIcon, { backgroundColor: `${cat.color}15` }]}>
              <Feather name={cat.icon} size={20} color={cat.color} />
            </View>

            <View style={styles.catInfo}>
              <Text style={styles.catTitle}>{cat.title}</Text>
              <Text style={styles.catStatus}>{cat.status}</Text>
            </View>

            <Text style={styles.catAmount}>${cat.spent}</Text>
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
  summaryHero: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
    marginVertical: spacing.md,
  },
  heroLabel: {
    ...typography.caption,
    color: colors.gray,
    textTransform: "uppercase",
  },
  heroAmount: {
    ...typography.h1,
    fontSize: 44,
    color: colors.dark,
    marginVertical: 4,
  },
  praiseBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.successSoft,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: radius.full,
    gap: 6,
    marginVertical: spacing.sm,
  },
  praiseText: {
    ...typography.caption,
    fontWeight: "800",
    color: colors.success,
  },
  heroMessage: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 4,
  },
  sectionHeader: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },
  catCard: {
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
  catStatus: {
    ...typography.caption,
    color: colors.success,
    fontWeight: "600",
    marginTop: 2,
  },
  catAmount: {
    ...typography.h3,
    color: colors.dark,
  },
});
