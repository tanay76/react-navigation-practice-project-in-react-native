import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  RestaurantProps,
  RestaurantsStackParamList,
} from "../utils/DifferentProps";
import { RestaurantsScreen } from "../screens/RestaurantsScreen";
import { Continental } from "../screens/Continental";
import { Indian } from "../screens/Indian";
import { Italian } from "../screens/Italian";
import { Chinese } from "../screens/Chinese";
import { Mughlai } from "../screens/Mughlai";
import { Biriyani } from "../screens/Biriyani";
import { Restaurant } from "../screens/Restaurant";
import { Text } from "react-native";

const RestaurantsStack = createStackNavigator<RestaurantsStackParamList>();

const screens = [
  { name: "Restaurants", component: RestaurantsScreen },
  { name: "Continental", component: Continental },
  { name: "Indian", component: Indian },
  { name: "Italian", component: Italian },
  { name: "Chinese", component: Chinese },
  { name: "Mughlai", component: Mughlai },
  { name: "Biriyani", component: Biriyani },
  { name: "Restaurant", component: Restaurant },
] as const;

export const RestaurantsStackScreen = () => {
  const showScreen = (name: any, component: any, options: {}) => (
    <RestaurantsStack.Screen
      key={name}
      name={name}
      component={component}
      options={options}
    />
  );

  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
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
      {screens.map((screen) =>
        screen.name !== "Restaurant"
          ? showScreen(screen.name, screen.component, { title: screen.name })
          : showScreen(
              screen.name,
              screen.component,
              ({ route }: RestaurantProps) => ({
                headerTitle: () => (
                  <Text style={{ fontFamily: "poppins-bold", fontSize: 18 }}>
                    {route.params.name} Restaurant
                  </Text>
                ),
              })
            )
      )}
    </RestaurantsStack.Navigator>
  );
};
