import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../../theme";
import Header from "../../components/Header";
import { userProfile } from "../../data";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Account" showBack={false} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileCard}>
          <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.email}>{userProfile.email}</Text>
          <Text style={styles.accountNumber}>{userProfile.accountNumber}</Text>
        </View>

        {/* Finance Score Quick Card */}
        <TouchableOpacity
          style={styles.scoreBanner}
          onPress={() => router.push("/saving-score")}
          activeOpacity={0.85}
        >
          <View style={styles.scoreCircle}>
            <Text style={styles.scoreDigit}>{userProfile.financeScore}</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.scoreTitle}>Finance Score: Good</Text>
            <Text style={styles.scoreSub}>Tap to see 3 actionable recommendations</Text>
          </View>
          <Feather name="chevron-right" size={20} color={colors.primary} />
        </TouchableOpacity>

        {/* Menu Options */}
        <View style={styles.menuGroup}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/card-details")}
          >
            <Feather name="credit-card" size={20} color={colors.primary} />
            <Text style={styles.menuText}>Card Limits & Settings</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/monthly-budget")}
          >
            <Feather name="pie-chart" size={20} color={colors.primary} />
            <Text style={styles.menuText}>Monthly Budget Settings</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/qr-scan")}
          >
            <Feather name="maximize" size={20} color={colors.primary} />
            <Text style={styles.menuText}>My QR Code</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/set-pin")}
          >
            <Feather name="lock" size={20} color={colors.primary} />
            <Text style={styles.menuText}>Change App PIN</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/touch-id")}
          >
            <Feather name="disc" size={20} color={colors.primary} />
            <Text style={styles.menuText}>Biometric Touch ID</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/login")}
        >
          <Feather name="log-out" size={18} color={colors.danger} />
          <Text style={styles.logoutText}>Log Out</Text>
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
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: spacing.sm,
  },
  name: {
    ...typography.h2,
    color: colors.dark,
  },
  email: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 2,
  },
  accountNumber: {
    ...typography.caption,
    color: colors.primaryDark,
    fontWeight: "700",
    marginTop: 4,
  },
  scoreBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primarySoft,
    borderRadius: radius.md,
    padding: spacing.md,
    marginVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.primaryPastel,
  },
  scoreCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreDigit: {
    ...typography.h4,
    color: colors.white,
    fontWeight: "900",
  },
  scoreTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.primaryDark,
  },
  scoreSub: {
    ...typography.caption,
    color: colors.grayDark,
    marginTop: 2,
  },
  menuGroup: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  menuText: {
    flex: 1,
    ...typography.bodyLarge,
    fontWeight: "600",
    color: colors.dark,
    marginLeft: 12,
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dangerSoft,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    marginTop: spacing.lg,
    gap: 8,
  },
  logoutText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.danger,
  },
});
