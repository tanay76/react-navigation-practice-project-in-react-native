import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Screen } from "../navigations/Screen";
import { MixedStackProps } from "../utils/DifferentProps";

const ManImage = require("../assets/profile-image.png");

export const Profile = ({ navigation }: MixedStackProps) => {
  return (
    <Screen
      navigation={navigation}
      focusedScreen={navigation.isFocused() ? "ProfileDrawer" : ""}
    >
      <ScrollView contentContainerStyle={styles.mainScreen}>
        <Text style={styles.mainText}>Your Profile</Text>
        <View style={styles.viewStyle}>
          <Image
            source={ManImage}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flexGrow: 1,
    paddingVertical: 30,
  },
  mainText: {
    fontFamily: "poppins-bold",
    fontSize: 22,
    textAlign: "center",
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
