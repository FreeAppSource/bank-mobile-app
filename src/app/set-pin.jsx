import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import Keypad from "../components/Keypad";

export default function SetPinScreen() {
  const router = useRouter();
  const [pin, setPin] = useState("1234");

  const handleKeyPress = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleSavePin = () => {
    router.push("/touch-id");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Set your PIN" />

      <View style={styles.content}>
        <View style={styles.topInfo}>
          <Text style={styles.title}>Save PIN</Text>
          <Text style={styles.description}>
            You will use this to login next time and authorise transactions.
          </Text>

          {/* PIN Dots */}
          <View style={styles.pinRow}>
            {[0, 1, 2, 3].map((i) => (
              <View
                key={i}
                style={[
                  styles.pinDot,
                  i < pin.length && styles.pinDotFilled,
                ]}
              />
            ))}
          </View>
        </View>

        <Keypad onKeyPress={handleKeyPress} onDelete={handleDelete} />

        <CustomButton
          title="Save PIN"
          variant="primary"
          onPress={handleSavePin}
          style={{ width: "100%", marginTop: spacing.md }}
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
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-between",
    paddingBottom: spacing.lg,
  },
  topInfo: {
    alignItems: "center",
    marginTop: spacing.md,
  },
  title: {
    ...typography.h2,
    color: colors.dark,
  },
  description: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    marginTop: 6,
    paddingHorizontal: spacing.md,
  },
  pinRow: {
    flexDirection: "row",
    gap: spacing.lg,
    marginTop: spacing.xl,
  },
  pinDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: "transparent",
  },
  pinDotFilled: {
    backgroundColor: colors.primary,
  },
});
