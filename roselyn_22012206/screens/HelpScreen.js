import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { faqs } from "../data/dummyData";
import { colors } from "../constants/theme";

export default function HelpScreen() {
  const [expandedId, setExpandedId] = useState(null);

  const renderItem = ({ item }) => {
    const isOpen = expandedId === item.id;
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => setExpandedId(isOpen ? null : item.id)}
      >
        <View style={styles.questionRow}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.toggle}>{isOpen ? "−" : "+"}</Text>
        </View>
        {isOpen && <Text style={styles.answer}>{item.answer}</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help & Support</Text>
      <Text style={styles.subheader}>Frequently Asked Questions</Text>
      <FlatList
        data={faqs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  header: { fontSize: 22, fontWeight: "700", color: colors.text },
  subheader: { fontSize: 14, color: colors.muted, marginBottom: 12, marginTop: 2 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  questionRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  question: { fontSize: 15, fontWeight: "600", color: colors.text, flex: 1, paddingRight: 8 },
  toggle: { fontSize: 20, color: colors.primary, fontWeight: "700" },
  answer: { fontSize: 14, color: colors.muted, marginTop: 10, lineHeight: 20 },
});
