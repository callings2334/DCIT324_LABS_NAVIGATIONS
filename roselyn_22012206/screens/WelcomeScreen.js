import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../constants/theme";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>CC</Text>
      </View>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>Stay in sync with everything on campus</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("Main")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  logoText: { color: "#fff", fontSize: 32, fontWeight: "800" },
  title: { fontSize: 30, fontWeight: "800", color: "#fff" },
  subtitle: { fontSize: 15, color: "rgba(255,255,255,0.8)", marginTop: 8, textAlign: "center" },
  button: {
    marginTop: 48,
    backgroundColor: colors.accent,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
  },
  buttonText: { color: "#1E293B", fontSize: 16, fontWeight: "700" },
});
