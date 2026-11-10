import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../../theme";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { recentContacts } from "../../data";

export default function TransferScreen() {
  const router = useRouter();
  const [selectedContact, setSelectedContact] = useState(recentContacts[0]);
  const [amount, setAmount] = useState("46.09");
  const [note, setNote] = useState("Dinner split & fuel");

  const handleSend = () => {
    router.push({
      pathname: "/receipt",
      params: {
        recipient: selectedContact.name,
        amount: amount,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Transfer" showBack={false} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Recent Contacts Carousel from Figma */}
        <Text style={styles.sectionTitle}>Recent</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recentRow}
          contentContainerStyle={{ gap: 12 }}
        >
          {recentContacts.map((c) => {
            const isSelected = selectedContact.id === c.id;
            return (
              <TouchableOpacity
                key={c.id}
                style={[styles.contactBubble, isSelected && styles.contactBubbleActive]}
                onPress={() => setSelectedContact(c)}
              >
                <Image source={{ uri: c.avatar }} style={styles.avatar} />
                <Text style={styles.contactName} numberOfLines={1}>
                  {c.name.split(" ")[0]}
                </Text>
                <Text style={styles.phoneText}>{c.phone}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Selected Contact Card */}
        <View style={styles.recipientCard}>
          <Image source={{ uri: selectedContact.avatar }} style={styles.recipientAvatar} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.recipientName}>{selectedContact.name}</Text>
            <Text style={styles.recipientMeta}>{selectedContact.bank} • {selectedContact.account}</Text>
          </View>
          <Feather name="check-circle" size={20} color={colors.primary} />
        </View>

        {/* Amount Input */}
        <View style={styles.amountBox}>
          <Text style={styles.amountLabel}>Amount to Send</Text>
          <View style={styles.amountInputRow}>
            <Text style={styles.currencySymbol}>$</Text>
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
            />
          </View>
          <Text style={styles.feeHint}>Transfer fee: $0.00 (Instant bank rail)</Text>
        </View>

        {/* Transfer Note */}
        <View style={styles.noteBox}>
          <Text style={styles.noteLabel}>Note (Optional)</Text>
          <TextInput
            style={styles.noteInput}
            value={note}
            onChangeText={setNote}
            placeholder="What's this for?"
          />
        </View>

        {/* All Contacts Directory */}
        <Text style={[styles.sectionTitle, { marginTop: spacing.lg }]}>All Contacts</Text>
        {recentContacts.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={styles.contactRow}
            onPress={() => setSelectedContact(c)}
          >
            <Image source={{ uri: c.avatar }} style={styles.rowAvatar} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.rowName}>{c.name}</Text>
              <Text style={styles.rowPhone}>{c.phone}</Text>
            </View>
            <Feather name="send" size={16} color={colors.primary} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          title={`Send $${amount || "0.00"}`}
          variant="primary"
          onPress={handleSend}
        />
      </View>
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
    paddingBottom: 100,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  recentRow: {
    marginBottom: spacing.lg,
  },
  contactBubble: {
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    width: 80,
  },
  contactBubbleActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginBottom: 4,
  },
  contactName: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.dark,
  },
  phoneText: {
    fontSize: 9,
    color: colors.gray,
  },
  recipientCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  recipientAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  recipientName: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  recipientMeta: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  amountBox: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  amountLabel: {
    ...typography.caption,
    color: colors.gray,
    textTransform: "uppercase",
  },
  amountInputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.sm,
  },
  currencySymbol: {
    ...typography.h1,
    fontSize: 36,
    color: colors.primary,
    marginRight: 4,
  },
  amountInput: {
    ...typography.h1,
    fontSize: 36,
    color: colors.dark,
    minWidth: 100,
    textAlign: "center",
  },
  feeHint: {
    ...typography.caption,
    color: colors.success,
  },
  noteBox: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  noteLabel: {
    ...typography.caption,
    color: colors.gray,
    marginBottom: 4,
  },
  noteInput: {
    ...typography.bodyLarge,
    color: colors.dark,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  rowAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rowName: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  rowPhone: {
    ...typography.caption,
    color: colors.gray,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
