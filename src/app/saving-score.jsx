import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import { scoreRecommendations, userProfile } from "../data";

export default function SavingScoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Finance Score" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Score Ring Card from Figma */}
        <View style={styles.scoreHero}>
          <View style={styles.ringOuter}>
            <Text style={styles.scoreNumber}>{userProfile.financeScore}</Text>
            <Text style={styles.scoreOutOf}>/ 100</Text>
          </View>
          <Text style={styles.scoreTitle}>It can be better!</Text>
          <Text style={styles.scoreSub}>
            Follow the tailored recommendations below to unlock +25 score growth.
          </Text>
        </View>

        {/* Recommendations Section */}
        <Text style={styles.sectionTitle}>Recommendation</Text>
        <Text style={styles.sectionSub}>Below are some recommendations</Text>

        {scoreRecommendations.map((rec) => (
          <View key={rec.id} style={styles.recCard}>
            <View style={styles.recHeader}>
              <View style={[styles.recTag, { backgroundColor: `${rec.color}15` }]}>
                <Text style={[styles.recTagText, { color: rec.color }]}>{rec.type}</Text>
              </View>
              <View style={styles.impactBadge}>
                <Text style={styles.impactText}>{rec.impact} pts</Text>
              </View>
            </View>

            <Text style={styles.recTitle}>{rec.title}</Text>
            <Text style={styles.recDesc}>{rec.description}</Text>

            <TouchableOpacity style={styles.moreBtn}>
              <Text style={styles.moreText}>More details →</Text>
            </TouchableOpacity>
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
  scoreHero: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
    marginTop: spacing.xs,
  },
  ringOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  scoreNumber: {
    ...typography.h1,
    fontSize: 40,
    color: colors.dark,
    fontWeight: "900",
  },
  scoreOutOf: {
    fontSize: 10,
    color: colors.gray,
    fontWeight: "700",
  },
  scoreTitle: {
    ...typography.h2,
    color: colors.dark,
  },
  scoreSub: {
    ...typography.bodyMedium,
    color: colors.gray,
    textAlign: "center",
    marginTop: 4,
    lineHeight: 20,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.dark,
    marginTop: spacing.xl,
  },
  sectionSub: {
    ...typography.caption,
    color: colors.gray,
    marginBottom: spacing.md,
  },
  recCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  recHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  recTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.xs,
  },
  recTagText: {
    ...typography.caption,
    fontWeight: "700",
  },
  impactBadge: {
    backgroundColor: colors.successSoft,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.xs,
  },
  impactText: {
    ...typography.caption,
    fontWeight: "800",
    color: colors.success,
  },
  recTitle: {
    ...typography.h4,
    color: colors.dark,
  },
  recDesc: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    marginTop: 4,
    lineHeight: 20,
  },
  moreBtn: {
    marginTop: spacing.sm,
    alignSelf: "flex-start",
  },
  moreText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.primary,
  },
});
