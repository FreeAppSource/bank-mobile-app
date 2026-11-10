import React from "react";
import { View, Text, StyleSheet, Share, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function ReceiptScreen() {
  const router = useRouter();
  const { recipient, amount } = useLocalSearchParams();

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Bank EC Transfer of $${amount || "46.09"} to ${recipient || "Hailey Sanders"} completed. Reference #D79004321786`,
      });
    } catch (e) {
      Alert.alert("Share", "Sharing receipt details.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Receipt" rightIcon="share-2" onRightPress={handleShare} />

      <View style={styles.content}>
        {/* Receipt Card from Figma */}
        <View style={styles.receiptCard}>
          <View style={styles.checkCircle}>
            <Feather name="check" size={36} color={colors.white} />
          </View>

          <Text style={styles.doneTitle}>Transfer done</Text>
          <Text style={styles.amountDisplay}>${amount || "46.09"}</Text>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Recipient</Text>
            <Text style={styles.detailValue}>{recipient || "Hailey Sanders"}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Reference number</Text>
            <Text style={styles.detailValue}>#D79004321786</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount sent</Text>
            <Text style={styles.detailValue}>${amount || "46.09"}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Transfer fee</Text>
            <Text style={[styles.detailValue, { color: colors.success }]}>$0.00</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.processingNote}>
            It will take less than 24 hours to process it completely across institutional rails.
          </Text>
        </View>

        <View style={styles.actions}>
          <CustomButton
            title="Share Receipt"
            variant="outline"
            icon="share-2"
            onPress={handleShare}
            style={{ marginBottom: spacing.sm }}
          />
          <CustomButton
            title="Back to Dashboard"
            variant="primary"
            onPress={() => router.replace("/(tabs)")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-between",
    paddingBottom: spacing.xl,
  },
  receiptCard: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
    ...shadows.md,
  },
  checkCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.success,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  doneTitle: {
    ...typography.h3,
    color: colors.dark,
  },
  amountDisplay: {
    ...typography.h1,
    fontSize: 36,
    color: colors.primary,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    width: "100%",
    marginVertical: spacing.md,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  detailLabel: {
    ...typography.bodyMedium,
    color: colors.gray,
  },
  detailValue: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  processingNote: {
    ...typography.caption,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 18,
  },
  actions: {
    width: "100%",
  },
});
