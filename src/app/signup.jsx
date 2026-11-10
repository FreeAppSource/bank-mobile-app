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

export default function SignupScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState("Adam Wise");
  const [email, setEmail] = useState("adam.wise@bankec.io");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    router.push("/phone-register");
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
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.subtitle}>
              Please provide following details for your new account
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputContainer}>
                <Feather name="user" size={18} color={colors.gray} style={styles.icon} />
                <TextInput
                  style={styles.textInput}
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Adam Wise"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
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
                  placeholder="Create your password"
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

            <Text style={styles.termsText}>
              By creating your account you have to agree with our Terms and Conditions.
            </Text>

            <CustomButton
              title="Sign up my Account"
              variant="primary"
              onPress={handleRegister}
              style={{ marginTop: spacing.md }}
            />

            <CustomButton
              title="Sign up with Phone Number"
              variant="outline"
              icon="phone"
              onPress={() => router.push("/phone-register")}
              style={{ marginTop: spacing.sm }}
            />
          </View>

          {/* Footer Link */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? - </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={styles.signInLink}>Sign In</Text>
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
    textAlign: "center",
    marginTop: 4,
    paddingHorizontal: spacing.md,
  },
  form: {
    marginTop: spacing.lg,
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
  termsText: {
    ...typography.caption,
    color: colors.grayDark,
    textAlign: "center",
    marginTop: 4,
    lineHeight: 18,
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
  signInLink: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
});
