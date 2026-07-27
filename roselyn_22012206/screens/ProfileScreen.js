import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useProfile } from "../context/ProfileContext";
import { colors } from "../constants/theme";

export default function ProfileScreen({ navigation }) {
  const { profile } = useProfile();

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {profile.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </Text>
      </View>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.bio}>{profile.bio}</Text>

      <View style={styles.infoCard}>
        <InfoRow label="Index Number" value={profile.indexNumber} />
        <InfoRow label="Programme" value={profile.programme} />
        <InfoRow label="Level" value={profile.level} />
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() =>
          navigation.navigate("EditProfile", {
            name: profile.name,
            bio: profile.bio,
            programme: profile.programme,
          })
        }
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20, alignItems: "center" },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  avatarText: { color: "#fff", fontSize: 28, fontWeight: "700" },
  name: { fontSize: 22, fontWeight: "700", color: colors.text, marginTop: 12 },
  bio: { fontSize: 14, color: colors.muted, textAlign: "center", marginTop: 6, paddingHorizontal: 20 },
  infoCard: {
    width: "100%",
    backgroundColor: colors.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 24,
    padding: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  infoLabel: { color: colors.muted, fontSize: 14 },
  infoValue: { color: colors.text, fontSize: 14, fontWeight: "600" },
  editButton: {
    marginTop: 24,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  editButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
