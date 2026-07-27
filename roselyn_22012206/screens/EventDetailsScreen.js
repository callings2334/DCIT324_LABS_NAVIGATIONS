import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../constants/theme";

export default function EventDetailsScreen({ route, navigation }) {
  const { title, date, description } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back to Feed</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  backButton: { marginBottom: 16 },
  backButtonText: { color: colors.primaryLight, fontSize: 15, fontWeight: "600" },
  title: { fontSize: 24, fontWeight: "700", color: colors.text, marginBottom: 6 },
  date: { fontSize: 14, color: colors.muted, marginBottom: 16 },
  description: { fontSize: 16, color: colors.text, lineHeight: 24 },
});
