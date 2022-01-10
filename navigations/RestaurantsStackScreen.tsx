import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
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
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { DrawerActions } from "@react-navigation/native";

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
          textTransform: "uppercase",
        },
      }}
    >
      {screens.map((screen) => {
        if (screen.name === "Restaurants") {
          return showScreen(
            screen.name,
            screen.component,
            ({ navigation }: any) => ({
              title: "Restaurants",
              headerLeft: () => (
                <TouchableOpacity style={{ paddingHorizontal: 30 }} onPress={() => navigation.navigate('HomeDrawer')}>
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
            })
          );
        } else if (screen.name === "Restaurant") {
          return showScreen(
            screen.name,
            screen.component,
            ({ navigation, route }: any) => ({
              headerTitle: () => (
                <Text style={{ fontFamily: "poppins-bold", fontSize: 18 }}>
                  {route.params.name} Restaurant
                </Text>
              ),
              headerLeft: () => (
                <TouchableOpacity style={{ paddingHorizontal: 30 }} onPress={() => navigation.goBack()}>
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
              )
            })
          );
        }
        return showScreen(screen.name, screen.component, ({ navigation }:any) => ({
          title: screen.name,
          headerLeft: () => (
            <TouchableOpacity style={{ paddingHorizontal: 30 }} onPress={() => navigation.navigate("RestaurantsDrawer", { screen: "Restaurants" })}>
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
          )
        }));
      })}
    </RestaurantsStack.Navigator>
  );
};
