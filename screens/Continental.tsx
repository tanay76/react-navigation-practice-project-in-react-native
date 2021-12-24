import React from "react";
import { View, Text, StyleSheet, ScrollView, ViewStyle } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import useDimensions from "../hooks/useDimensions";
import { RestaurantProps } from "../navigations/ScreenNavigation";

export const Continental = ({ navigation }: RestaurantProps) => {
  const { height: mobHeight, width: mobWidth } = useDimensions();

  const innerContainer = {
    width: mobWidth,
    height: mobWidth < mobHeight ? mobHeight / 2 : mobHeight * 0.8,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  } as ViewStyle;

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Text style={styles.textStyle}>Continentals</Text>
      <View style={innerContainer}>
        <RestaurantCard
          name="Indian"
          onPress={() => navigation.navigate("Restaurant", { name: "Indian" })}
        />
        <RestaurantCard
          name="Chinese"
          onPress={() => navigation.navigate("Restaurant", { name: "Chinese" })}
        />
        <RestaurantCard
          name="Italian"
          onPress={() => navigation.navigate("Restaurant", { name: "Italian" })}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    paddingVertical: 30,
  },
  textStyle: {
    fontFamily: "poppins-bold",
    fontSize: 22,
    textAlign: "center",
  },
});
