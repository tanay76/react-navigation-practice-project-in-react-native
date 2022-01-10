import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileStackParamList } from "../utils/DifferentProps";
import { Profile } from "../screens/Profile";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { DrawerActions } from "@react-navigation/native";

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
          textTransform: "uppercase",
        },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: "Profile",
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
    </ProfileStack.Navigator>
  );
};
