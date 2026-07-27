import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { courses } from "../data/dummyData";
import { colors } from "../constants/theme";

export default function CoursesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.code}>{item.code}</Text>
        <Text style={styles.credits}>{item.credits} Cr.</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  header: { fontSize: 22, fontWeight: "700", color: colors.text, marginBottom: 12 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  rowBetween: { flexDirection: "row", justifyContent: "space-between" },
  code: { fontSize: 15, fontWeight: "700", color: colors.primary },
  credits: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.accent,
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  title: { fontSize: 15, color: colors.text, marginTop: 6 },
});
