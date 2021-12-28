import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HomeStackScreen } from "./HomeStackScreen";
import { RestaurantsStackScreen } from "./RestaurantsStackScreen";
import { ProfileStackScreen } from "./ProfileStackScreen";
import { SettingsStackScreen } from "./SettingsStackScreen";
import { TabStackParamList } from "../utils/DifferentProps";

const routes = [
  { name: "Home", component: HomeStackScreen, icon: "home" },
  {
    name: "Restaurants",
    component: RestaurantsStackScreen,
    icon: "restaurant",
  },
  { name: "Profile", component: ProfileStackScreen, icon: "people" },
  { name: "Settings", component: SettingsStackScreen, icon: "settings" },
] as const;

const TabStack = createBottomTabNavigator<TabStackParamList>();

export const TabNavigation = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={routes.find((rt) => rt.name === route.name)!.icon}
              color={focused ? "black" : "#ccc"}
              size={focused ? 24 : 20}
            />
          ),
          headerShown: false,
          tabBarShowLabel: false,
        };
      }}
    >
      {routes.map(({ name, component }) => (
        <TabStack.Screen key={name} name={name} component={component} />
      ))}
    </TabStack.Navigator>
  );
};
