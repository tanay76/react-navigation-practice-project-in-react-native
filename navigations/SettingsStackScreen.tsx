import React from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsStackParamList } from "../utils/DifferentProps";
import { SettingsScreen } from "../screens/SettingsScreen";
import { TouchableOpacity } from "react-native";
import { DrawerActions } from "@react-navigation/native";

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
            <TouchableOpacity
              style={{ paddingHorizontal: 30 }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingHorizontal: 30 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <SimpleLineIcons name="menu" size={20} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </SettingsStack.Navigator>
  );
};
