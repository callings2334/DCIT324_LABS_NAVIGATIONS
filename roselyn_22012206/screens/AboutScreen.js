import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/theme";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Campus Connect</Text>
      <Text style={styles.tagline}>Your one-stop app for everything happening on campus.</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Developed by</Text>
        <Text style={styles.value}>Ama Serwaa</Text>

        <Text style={[styles.label, { marginTop: 16 }]}>Student ID</Text>
        <Text style={styles.value}>10912345</Text>

        <Text style={[styles.label, { marginTop: 16 }]}>Course</Text>
        <Text style={styles.value}>DCIT 324 — Navigation Lab</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  appName: { fontSize: 26, fontWeight: "700", color: colors.primary, marginTop: 12 },
  tagline: { fontSize: 15, color: colors.muted, marginTop: 8, lineHeight: 22 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
    marginTop: 28,
  },
  label: { fontSize: 12, color: colors.muted, textTransform: "uppercase", letterSpacing: 0.5 },
  value: { fontSize: 16, color: colors.text, fontWeight: "600", marginTop: 4 },
});
