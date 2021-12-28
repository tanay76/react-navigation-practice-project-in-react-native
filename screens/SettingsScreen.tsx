import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "../components/Card";


export const SettingsScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Card style={{ width: "100%" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontFamily: "poppins-italic", fontSize: 22 }}>
            Settings Screen
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
};
