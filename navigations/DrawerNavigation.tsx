import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerStackParamList } from "../utils/DifferentProps";
import { HomeStackScreen } from "./HomeStackScreen";
import { ProfileStackScreen } from "./ProfileStackScreen";
import { RestaurantsStackScreen } from "./RestaurantsStackScreen";
import { SettingsStackScreen } from "./SettingsStackScreen";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const drawerRoutes = [
  {
    name: "HomeDrawer",
    component: HomeStackScreen,
    options: { drawerLabel: "Home" },
  },
  {
    name: "RestaurantsDrawer",
    component: RestaurantsStackScreen,
    options: { drawerLabel: "Restaurants" },
  },
  {
    name: "ProfileDrawer",
    component: ProfileStackScreen,
    options: { drawerLabel: "Profile" },
  },
  {
    name: "SettingsDrawer",
    component: SettingsStackScreen,
    options: { drawerLabel: "Settings" },
  },
] as const;

const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "black", alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{ marginHorizontal: 8, marginTop: 8 }}
          onPress={() => navigation.closeDrawer()}
        >
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          paddingVertical: 24,
        }}
      >
        <Image
          source={require("../assets/profile-image.png")}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigation = () => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { fontFamily: "poppins-bold", fontSize: 16 },
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#000",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {drawerRoutes.map(({ name, component, options }) => (
        <DrawerStack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </DrawerStack.Navigator>
  );
};
