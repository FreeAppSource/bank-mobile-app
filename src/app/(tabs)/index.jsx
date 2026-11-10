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
import TransactionItem from "../../components/TransactionItem";
import { userProfile, recentTransactions } from "../../data";

export default function MainDashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Bank EC"
        subtitle="Available balance"
        showBack={false}
        avatarUrl={userProfile.avatar}
        rightIcon="bell"
        onRightPress={() => router.push("/saving-score")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Balance Display */}
        <View style={styles.balanceHero}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>
            ${userProfile.availableBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </Text>

          {/* Spent vs Earned Row */}
          <View style={styles.cashflowRow}>
            <View style={styles.cashflowItem}>
              <View style={[styles.arrowCircle, { backgroundColor: colors.dangerSoft }]}>
                <Feather name="arrow-up-right" size={14} color={colors.danger} />
              </View>
              <View>
                <Text style={styles.cashflowTitle}>Spent</Text>
                <Text style={styles.cashflowValue}>
                  ${userProfile.spentThisMonth.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </Text>
              </View>
            </View>

            <View style={styles.cashflowDivider} />

            <View style={styles.cashflowItem}>
              <View style={[styles.arrowCircle, { backgroundColor: colors.successSoft }]}>
                <Feather name="arrow-down-left" size={14} color={colors.success} />
              </View>
              <View>
                <Text style={styles.cashflowTitle}>Earned</Text>
                <Text style={styles.cashflowValue}>
                  ${userProfile.earnedThisMonth.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push("/(tabs)/transfer")}
          >
            <View style={[styles.actionIcon, { backgroundColor: colors.primarySoft }]}>
              <Feather name="send" size={20} color={colors.primary} />
            </View>
            <Text style={styles.actionText}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push("/card-details")}
          >
            <View style={[styles.actionIcon, { backgroundColor: colors.secondarySoft }]}>
              <Feather name="credit-card" size={20} color={colors.secondary} />
            </View>
            <Text style={styles.actionText}>Top Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push("/qr-scan")}
          >
            <View style={[styles.actionIcon, { backgroundColor: colors.cyanSoft }]}>
              <Feather name="maximize" size={20} color={colors.cyan} />
            </View>
            <Text style={styles.actionText}>My QR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => router.push("/saving-score")}
          >
            <View style={[styles.actionIcon, { backgroundColor: colors.successSoft }]}>
              <Feather name="award" size={20} color={colors.success} />
            </View>
            <Text style={styles.actionText}>Score {userProfile.financeScore}</Text>
          </TouchableOpacity>
        </View>

        {/* Complete Verification Progress Banner (Chart Card Horizontal from Figma) */}
        <TouchableOpacity
          style={styles.verificationBanner}
          onPress={() => router.push("/saving-score")}
          activeOpacity={0.85}
        >
          <View style={styles.verifHeader}>
            <View>
              <Text style={styles.verifTitle}>Complete Verification</Text>
              <Text style={styles.verifSub}>{userProfile.verificationTasks}</Text>
            </View>
            <Text style={styles.verifPercent}>{userProfile.verificationProgress}%</Text>
          </View>

          <View style={styles.verifTrack}>
            <View
              style={[
                styles.verifFill,
                { width: `${userProfile.verificationProgress}%` },
              ]}
            />
          </View>

          <Text style={styles.verifHint}>
            When you register for an account, we collect personal information. Confirm your email to finish.
          </Text>
        </TouchableOpacity>

        {/* Spending Alert Card (from Figma) */}
        <TouchableOpacity
          style={styles.alertCard}
          onPress={() => router.push("/(tabs)/budget")}
          activeOpacity={0.85}
        >
          <View style={styles.alertIconCircle}>
            <Feather name="info" size={18} color={colors.secondary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.alertText}>{userProfile.diningAlert}</Text>
            <Text style={styles.alertLink}>Tell me more →</Text>
          </View>
        </TouchableOpacity>

        {/* Recent Activity / Transactions */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity onPress={() => router.push("/expenses")}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {recentTransactions.map((item) => (
          <TransactionItem
            key={item.id}
            transaction={item}
            onPress={() => router.push("/expenses")}
          />
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
  balanceHero: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
    marginTop: spacing.xs,
  },
  balanceLabel: {
    ...typography.caption,
    color: colors.gray,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  balanceAmount: {
    ...typography.h1,
    fontSize: 36,
    color: colors.dark,
    marginVertical: 4,
  },
  cashflowRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    width: "100%",
    justifyContent: "space-around",
  },
  cashflowItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  arrowCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  cashflowTitle: {
    ...typography.caption,
    color: colors.gray,
  },
  cashflowValue: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
  },
  cashflowDivider: {
    width: 1,
    height: 30,
    backgroundColor: colors.border,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: spacing.md,
  },
  actionBtn: {
    alignItems: "center",
    flex: 1,
  },
  actionIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  actionText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.dark,
  },
  verificationBanner: {
    backgroundColor: colors.primarySoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.primaryPastel,
  },
  verifHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  verifTitle: {
    ...typography.h4,
    color: colors.primaryDark,
  },
  verifSub: {
    ...typography.caption,
    color: colors.grayDark,
    marginTop: 2,
  },
  verifPercent: {
    ...typography.h3,
    color: colors.primaryDark,
    fontWeight: "800",
  },
  verifTrack: {
    height: 6,
    backgroundColor: colors.primaryPastel,
    borderRadius: 3,
    overflow: "hidden",
    marginVertical: spacing.sm,
  },
  verifFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  verifHint: {
    ...typography.caption,
    color: colors.darkMuted,
    lineHeight: 16,
  },
  alertCard: {
    flexDirection: "row",
    backgroundColor: colors.secondarySoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: "#FFDCC7",
    gap: 12,
  },
  alertIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  alertText: {
    ...typography.bodySmall,
    fontWeight: "600",
    color: colors.dark,
    lineHeight: 18,
  },
  alertLink: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.secondary,
    marginTop: 4,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.dark,
  },
  seeAll: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
});
