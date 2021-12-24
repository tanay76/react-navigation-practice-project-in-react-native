import { NavigationContainer, TabRouter } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { ReactNode } from "react";
import { ExploreScreen } from "../screens/ExploreScreen";
import { Profile } from "../screens/Profile";
import { RestaurantsScreen } from "../screens/RestaurantsScreen";
import { Restaurant } from "../screens/Restaurant";
import { Continental } from "../screens/Continental";
import { Text } from "react-native";
import { Indian } from "../screens/Indian";
import { Italian } from "../screens/Italian";
import { Biriyani } from "../screens/Biriyani";
import { Chinese } from "../screens/Chinese";
import { Mughlai } from "../screens/Mughlai";

export type MainStackParamList = {
  Home: undefined;
  Restaurants: undefined;
  Profile: undefined;
  Continental: undefined;
  Indian: undefined;
  Italian: undefined;
  Chinese: undefined;
  Mughlai: undefined;
  Biriyani: undefined;
  Restaurant: { name: string };
};

export type Props = NativeStackScreenProps<MainStackParamList>;

export type RestaurantProps = NativeStackScreenProps<MainStackParamList, 'Restaurant'>

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
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
        <MainStack.Screen
          name="Home"
          component={ExploreScreen}
          options={{
            title: "Home",
          }}
        />
        <MainStack.Screen
          name="Restaurants"
          component={RestaurantsScreen}
          options={{
            title: "Restaurants",
          }}
        />
        <MainStack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
          }}
        />
        <MainStack.Screen
          name="Continental"
          component={Continental}
          options={{
            title: "Continental",
          }}
        />
        <MainStack.Screen
          name="Indian"
          component={Indian}
          options={{
            title: "Indian",
          }}
        />
        <MainStack.Screen
          name="Italian"
          component={Italian}
          options={{
            title: "Italian",
          }}
        />
        <MainStack.Screen
          name="Biriyani"
          component={Biriyani}
          options={{
            title: "Biriyani",
          }}
        />
        <MainStack.Screen
          name="Chinese"
          component={Chinese}
          options={{
            title: "Chinese",
          }}
        />
        <MainStack.Screen
          name="Mughlai"
          component={Mughlai}
          options={{
            title: "Mughlai",
          }}
        />
        <MainStack.Screen
          name="Restaurant"
          component={Restaurant}
          options={({ navigation, route }) => ({
            headerTitle: () => (
              <Text style={{ fontFamily: "poppins-bold", fontSize: 18 }}>
                {route.params.name} Restaurant
              </Text>
            ),
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
