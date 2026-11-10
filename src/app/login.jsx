import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("adam.wise@bankec.io");
  const [password, setPassword] = useState("•••••••••••••••");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoBadge}>
              <Text style={styles.logoBadgeText}>B</Text>
            </View>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <Feather name="mail" size={18} color={colors.gray} style={styles.icon} />
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <Feather name="lock" size={18} color={colors.gray} style={styles.icon} />
                <TextInput
                  style={styles.textInput}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={18}
                    color={colors.gray}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton
              title="Sign in My Account"
              variant="primary"
              onPress={handleLogin}
              style={{ marginTop: spacing.lg }}
            />
          </View>

          {/* Footer Link */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don’t have an account? - </Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-between",
    paddingBottom: spacing.xl,
  },
  header: {
    alignItems: "center",
    marginTop: spacing.xl,
  },
  logoBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  logoBadgeText: {
    ...typography.h2,
    color: colors.white,
    fontWeight: "900",
  },
  title: {
    ...typography.h1,
    color: colors.dark,
  },
  subtitle: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 4,
  },
  form: {
    marginTop: spacing.xl,
  },
  inputGroup: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    height: 50,
  },
  icon: {
    marginRight: spacing.sm,
  },
  textInput: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.dark,
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginTop: 4,
  },
  forgotText: {
    ...typography.bodySmall,
    fontWeight: "700",
    color: colors.primary,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xl,
  },
  footerText: {
    ...typography.bodyMedium,
    color: colors.gray,
  },
  signUpLink: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
});
