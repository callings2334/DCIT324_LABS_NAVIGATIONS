import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useProfile } from "../context/ProfileContext";
import { colors } from "../constants/theme";

export default function EditProfileScreen({ route, navigation }) {
  const { updateProfile } = useProfile();
  const { name, bio, programme } = route.params;

  const [nameInput, setNameInput] = useState(name);
  const [bioInput, setBioInput] = useState(bio);
  const [programmeInput, setProgrammeInput] = useState(programme);

  const handleSave = () => {
    updateProfile({
      name: nameInput,
      bio: bioInput,
      programme: programmeInput,
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.header}>Edit Profile</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={nameInput}
        onChangeText={setNameInput}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        value={bioInput}
        onChangeText={setBioInput}
        placeholder="Tell us about yourself"
        multiline
        numberOfLines={4}
      />

      <Text style={styles.label}>Programme</Text>
      <TextInput
        style={styles.input}
        value={programmeInput}
        onChangeText={setProgrammeInput}
        placeholder="Enter your programme"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { fontSize: 22, fontWeight: "700", color: colors.text, marginBottom: 20 },
  label: { fontSize: 13, color: colors.muted, marginBottom: 6, marginTop: 14, fontWeight: "600" },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.text,
  },
  multiline: { height: 100, textAlignVertical: "top" },
  saveButton: {
    marginTop: 28,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  cancelButton: { marginTop: 12, paddingVertical: 12, alignItems: "center" },
  cancelButtonText: { color: colors.muted, fontSize: 14, fontWeight: "600" },
});
