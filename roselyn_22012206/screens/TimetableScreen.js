import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { timetable } from "../data/dummyData";
import { colors } from "../constants/theme";

export default function TimetableScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.dayBadge}>
        <Text style={styles.dayText}>{item.day}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.course}>{item.course}</Text>
        <Text style={styles.meta}>{item.time}</Text>
        <Text style={styles.meta}>{item.venue}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Timetable</Text>
      <FlatList
        data={timetable}
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
    flexDirection: "row",
    alignItems: "center",
  },
  dayBadge: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 12,
  },
  dayText: { color: "#fff", fontSize: 12, fontWeight: "700" },
  course: { fontSize: 16, fontWeight: "700", color: colors.text },
  meta: { fontSize: 13, color: colors.muted, marginTop: 2 },
});
