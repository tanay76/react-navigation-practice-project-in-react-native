import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ExploreScreen } from "../screens/ExploreScreen";
import { HomeStackParamList } from "../utils/DifferentProps";

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="Home"
        component={ExploreScreen}
        options={{ title: "EXPLORE" }}
      />
    </HomeStack.Navigator>
  );
};
