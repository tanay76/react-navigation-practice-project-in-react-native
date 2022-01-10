import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "../components/Card";
import { Screen } from "../navigations/Screen";
import { MixedStackProps } from "../utils/DifferentProps";

export const SettingsScreen = ({ navigation }: MixedStackProps) => {
  return (
    <Screen
      navigation={navigation}
      focusedScreen={navigation.isFocused() ? "SettingsDrawer" : ""}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "100%" }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontFamily: "poppins-italic", fontSize: 22 }}>
              Settings Screen
            </Text>
          </View>
        </Card>
      </ScrollView>
    </Screen>
  );
};
