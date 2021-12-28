import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsStackParamList } from "../utils/DifferentProps";
import { SettingsScreen } from "../screens/SettingsScreen";

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#ccc",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
};
