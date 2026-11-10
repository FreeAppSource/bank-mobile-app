import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { userProfile } from "../data";

export default function QrScanScreen() {
  const [tab, setTab] = useState("my-qr"); // my-qr | scan

  return (
    <SafeAreaView style={styles.container}>
      <Header title="QR Code" />

      {/* Tabs */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tabBtn, tab === "my-qr" && styles.tabBtnActive]}
          onPress={() => setTab("my-qr")}
        >
          <Text style={[styles.tabText, tab === "my-qr" && styles.tabTextActive]}>
            My QR Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabBtn, tab === "scan" && styles.tabBtnActive]}
          onPress={() => setTab("scan")}
        >
          <Text style={[styles.tabText, tab === "scan" && styles.tabTextActive]}>
            Scan QR
          </Text>
        </TouchableOpacity>
      </View>

      {tab === "my-qr" ? (
        <View style={styles.content}>
          <View style={styles.qrCard}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarInitial}>B</Text>
            </View>

            <Text style={styles.profileLabel}>Profile name</Text>
            <Text style={styles.profileName}>{userProfile.qrName}</Text>

            {/* QR Pattern Representation */}
            <View style={styles.qrBox}>
              <Feather name="grid" size={160} color={colors.dark} />
            </View>

            <Text style={styles.qrHint}>
              Simply show the QR code and your friends can scan and tap!
            </Text>
          </View>

          <CustomButton
            title="More details"
            variant="outline"
            onPress={() => {}}
            style={{ marginTop: spacing.lg }}
          />
        </View>
      ) : (
        <View style={styles.scanContent}>
          <View style={styles.viewfinder}>
            <View style={styles.targetCornerTL} />
            <View style={styles.targetCornerTR} />
            <View style={styles.targetCornerBL} />
            <View style={styles.targetCornerBR} />
            <Feather name="maximize" size={120} color="rgba(255,255,255,0.4)" />
          </View>

          <Text style={styles.scanHint}>
            Align the peer or merchant QR code inside the frame to pay instantly.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabRow: {
    flexDirection: "row",
    marginHorizontal: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: radius.sm,
  },
  tabBtnActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.gray,
  },
  tabTextActive: {
    color: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    alignItems: "center",
  },
  qrCard: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md,
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  avatarInitial: {
    ...typography.h2,
    color: colors.white,
    fontWeight: "900",
  },
  profileLabel: {
    ...typography.caption,
    color: colors.gray,
  },
  profileName: {
    ...typography.h2,
    color: colors.dark,
    marginTop: 2,
  },
  qrBox: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    marginVertical: spacing.lg,
  },
  qrHint: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: spacing.sm,
  },
  scanContent: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
    marginTop: spacing.md,
  },
  viewfinder: {
    width: 240,
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  targetCornerTL: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: colors.primary,
  },
  targetCornerTR: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 30,
    height: 30,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: colors.primary,
  },
  targetCornerBL: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: colors.primary,
  },
  targetCornerBR: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: colors.primary,
  },
  scanHint: {
    ...typography.bodyMedium,
    color: colors.white,
    textAlign: "center",
    marginTop: spacing.xl,
    lineHeight: 22,
  },
});
