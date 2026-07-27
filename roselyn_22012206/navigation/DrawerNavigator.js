import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import AnnouncementsScreen from "../screens/AnnouncementsScreen";
import AboutScreen from "../screens/AboutScreen";
import HelpScreen from "../screens/HelpScreen";
import { colors } from "../constants/theme";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
        drawerActiveTintColor: colors.primary,
        drawerLabelStyle: { fontWeight: "600" },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{ headerShown: false, title: "Dashboard" }}
      />
      <Drawer.Screen name="Announcements" component={AnnouncementsScreen} />
      <Drawer.Screen name="About" component={AboutScreen} options={{ title: "About" }} />
      <Drawer.Screen name="Help & Support" component={HelpScreen} />
    </Drawer.Navigator>
  );
}
