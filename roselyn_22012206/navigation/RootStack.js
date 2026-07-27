import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import DrawerNavigator from "./DrawerNavigator";
import { colors } from "../constants/theme";

const Stack = createNativeStackNavigator();

// "Main" only renders the Drawer Navigator, as required by the spec.
function Main() {
  return <DrawerNavigator />;
}

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            headerShown: true,
            title: "Edit Profile",
            presentation: "modal",
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
