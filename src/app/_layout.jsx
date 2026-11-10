import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="phone-register" />
        <Stack.Screen name="verify-otp" />
        <Stack.Screen name="account-created" />
        <Stack.Screen name="set-pin" />
        <Stack.Screen name="touch-id" />
        <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
        <Stack.Screen name="card-details" />
        <Stack.Screen name="transfer" />
        <Stack.Screen name="receipt" />
        <Stack.Screen name="qr-scan" />
        <Stack.Screen name="saving-score" />
        <Stack.Screen name="expenses" />
        <Stack.Screen name="budget-details" />
        <Stack.Screen name="monthly-budget" />
        <Stack.Screen name="money-summary" />
      </Stack>
    </SafeAreaProvider>
  );
}
