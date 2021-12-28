import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileStackParamList } from "../utils/DifferentProps";
import { Profile } from "../screens/Profile";

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </ProfileStack.Navigator>
  );
};
