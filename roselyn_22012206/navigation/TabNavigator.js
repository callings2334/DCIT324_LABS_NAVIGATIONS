import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import HomeStack from "./HomeStack";
import CoursesScreen from "../screens/CoursesScreen";
import TimetableScreen from "../screens/TimetableScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../constants/theme";

const Tab = createBottomTabNavigator();

const ICONS = {
  Home: "🏠",
  Courses: "📚",
  Timetable: "🗓️",
  Profile: "👤",
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: () => <Text style={{ fontSize: 18 }}>{ICONS[route.name]}</Text>,
        // Home renders its own nested stack header, so hide the tab header for it
        headerShown: route.name !== "Home",
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Courses" component={CoursesScreen} options={{ title: "Courses" }} />
      <Tab.Screen name="Timetable" component={TimetableScreen} options={{ title: "Timetable" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
    </Tab.Navigator>
  );
}
