import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "../utils/DifferentProps";
import { HomeStackScreen } from "./HomeStackScreen";
import { RestaurantsStackScreen } from "./RestaurantsStackScreen";
import { ProfileStackScreen } from "./ProfileStackScreen";
import { SettingsStackScreen } from "./SettingsStackScreen";
import { DrawerNavigation } from "./DrawerNavigation";

const navs = [
  { name: "DrawerMainStack", component: DrawerNavigation }, // keep this at first, otherwise it will show error
  { name: "HomeMainStack", component: HomeStackScreen },
  { name: "RestaurantsMainStack", component: RestaurantsStackScreen },
  { name: "ProfileMainStack", component: ProfileStackScreen },
  { name: "SettingsMainStack", component: SettingsStackScreen },
] as const;

const MainStack = createStackNavigator<MainStackParamList>();

export const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {navs.map(({ name, component }) => (
        <MainStack.Screen key={name} name={name} component={component} />
      ))}
    </MainStack.Navigator>
  );
};
