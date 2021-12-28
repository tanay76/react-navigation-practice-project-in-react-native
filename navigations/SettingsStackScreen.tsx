import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsStackParamList } from "../utils/DifferentProps";
import { SettingsScreen } from "../screens/SettingsScreen";
import { TouchableOpacity } from "react-native";

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
          textTransform: "uppercase",
        },
      }}
    >
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          title: "Settings",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </SettingsStack.Navigator>
  );
};
