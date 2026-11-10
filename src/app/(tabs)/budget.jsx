import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../../theme";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { expenseCategories, userProfile } from "../../data";

export default function BudgetScreen() {
  const router = useRouter();

  const totalSpent = expenseCategories.reduce((sum, c) => sum + c.spent, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Budget"
        subtitle="Spent this month"
        showBack={false}
        rightIcon="sliders"
        onRightPress={() => router.push("/monthly-budget")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Month Comparison Card (Details Screen from Figma) */}
        <View style={styles.overviewCard}>
          <Text style={styles.overviewTitle}>Your Balance is $2,639</Text>
          <Text style={styles.overviewSub}>
            By this time last month, you spent slightly higher ($2,719)
          </Text>

          {/* Simple Month Comparison Bar Chart */}
          <View style={styles.chartContainer}>
            <View style={styles.chartCol}>
              <View style={[styles.bar, { height: 70, backgroundColor: colors.gray }]} />
              <Text style={styles.barLabel}>June</Text>
              <Text style={styles.barValue}>$157</Text>
            </View>

            <View style={styles.chartCol}>
              <View style={[styles.bar, { height: 95, backgroundColor: colors.primary }]} />
              <Text style={styles.barLabel}>July</Text>
              <Text style={styles.barValue}>$181</Text>
            </View>

            <View style={styles.chartCol}>
              <View style={[styles.bar, { height: 85, backgroundColor: colors.cyan }]} />
              <Text style={styles.barLabel}>Aug</Text>
              <Text style={styles.barValue}>$172</Text>
            </View>
          </View>
        </View>

        {/* Set Budget CTA Bar */}
        <View style={styles.setBudgetRow}>
          <View>
            <Text style={styles.setBudgetTitle}>Monthly Budget Limit</Text>
            <Text style={styles.setBudgetSub}>$1,000 / month configured</Text>
          </View>
          <CustomButton
            title="Adjust Budget"
            variant="outline"
            size="small"
            onPress={() => router.push("/monthly-budget")}
          />
        </View>

        {/* Top Categories Breakdown (Budget Card from Figma) */}
        <Text style={styles.sectionHeader}>Category Allocations</Text>

        {expenseCategories.map((cat) => {
          const percent = Math.round((cat.spent / cat.budget) * 100);

          return (
            <TouchableOpacity
              key={cat.id}
              style={styles.categoryCard}
              onPress={() => router.push("/expenses")}
              activeOpacity={0.8}
            >
              <View style={styles.catHeader}>
                <View style={styles.catLeft}>
                  <View style={[styles.catIcon, { backgroundColor: `${cat.color}15` }]}>
                    <Feather name={cat.icon} size={18} color={cat.color} />
                  </View>
                  <View>
                    <Text style={styles.catTitle}>{cat.title}</Text>
                    <Text style={styles.catRate}>{cat.dailyRate}</Text>
                  </View>
                </View>

                <View style={styles.catRight}>
                  <Text style={styles.catAmount}>${cat.spent}</Text>
                  <Text style={styles.catBudget}>of ${cat.budget}</Text>
                </View>
              </View>

              <View style={styles.track}>
                <View style={[styles.fill, { width: `${percent}%`, backgroundColor: cat.color }]} />
              </View>

              <Text style={styles.catStatus}>Your food spending is still on track</Text>
            </TouchableOpacity>
          );
        })}

        {/* Money Summary Card Button */}
        <TouchableOpacity
          style={styles.summaryCTA}
          onPress={() => router.push("/money-summary")}
        >
          <View style={styles.summaryLeft}>
            <Feather name="check-circle" size={24} color={colors.primary} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.summaryCTATitle}>Money Summary</Text>
              <Text style={styles.summaryCTASub}>
                Well done you have maintained your spending under control
              </Text>
            </View>
          </View>
          <Feather name="chevron-right" size={20} color={colors.gray} />
        </TouchableOpacity>
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
  overviewCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  overviewTitle: {
    ...typography.h3,
    color: colors.dark,
  },
  overviewSub: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 4,
    lineHeight: 20,
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: 140,
    marginTop: spacing.md,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  chartCol: {
    alignItems: "center",
  },
  bar: {
    width: 32,
    borderRadius: radius.xs,
    marginBottom: 6,
  },
  barLabel: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.dark,
  },
  barValue: {
    ...typography.caption,
    color: colors.gray,
  },
  setBudgetRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primarySoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginTop: spacing.md,
  },
  setBudgetTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.primaryDark,
  },
  setBudgetSub: {
    ...typography.caption,
    color: colors.grayDark,
    marginTop: 2,
  },
  sectionHeader: {
    ...typography.h3,
    color: colors.dark,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  categoryCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  catHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  catLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  catIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  catTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  catRate: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  catRight: {
    alignItems: "flex-end",
  },
  catAmount: {
    ...typography.h4,
    color: colors.dark,
  },
  catBudget: {
    ...typography.caption,
    color: colors.gray,
  },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.background,
    overflow: "hidden",
    marginVertical: spacing.sm,
  },
  fill: {
    height: "100%",
    borderRadius: 3,
  },
  catStatus: {
    ...typography.caption,
    fontWeight: "600",
    color: colors.success,
  },
  summaryCTA: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
  },
  summaryLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  summaryCTATitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  summaryCTASub: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
    lineHeight: 16,
  },
});
