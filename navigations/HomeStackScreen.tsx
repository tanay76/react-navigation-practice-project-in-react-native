import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ExploreScreen } from "../screens/ExploreScreen";
import { HomeStackParamList } from "../utils/DifferentProps";
import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";

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
          textTransform: "uppercase",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={ExploreScreen}
        options={({ navigation }) => ({
          title: "EXPLORE",
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingHorizontal: 30 }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <SimpleLineIcons name="menu" size={20} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};
