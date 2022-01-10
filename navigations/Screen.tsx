import React, { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ScreenStackProps {
  children: ReactNode;
  navigation: any;
  focusedScreen: string;
}

export const Screen: React.FC<ScreenStackProps> = ({
  children,
  navigation,
  focusedScreen
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View style={{ flex: 1 }}>{children}</View>
      <View
        style={{
          backgroundColor: "#ccc",
          width: "100%",
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeDrawer")}>
          <Ionicons
            name="home"
            size={focusedScreen === "HomeDrawer" ? 24 : 20}
            color={focusedScreen === "HomeDrawer" ? "black" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RestaurantsDrawer", { screen: "Restaurants" })
          }
        >
          <Ionicons
            name="restaurant"
            size={focusedScreen === "RestaurantsDrawer" ? 24 : 20}
            color={focusedScreen === "RestaurantsDrawer" ? "black" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileDrawer")}>
          <Ionicons
            name="people"
            size={focusedScreen === "ProfileDrawer" ? 24 : 20}
            color={focusedScreen === "ProfileDrawer" ? "black" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SettingsDrawer")}>
          <Ionicons
            name="settings"
            size={focusedScreen === "SettingsDrawer" ? 24 : 20}
            color={focusedScreen === "SettingsDrawer" ? "black" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
