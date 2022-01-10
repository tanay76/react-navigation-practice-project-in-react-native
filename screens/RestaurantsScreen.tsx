import React from "react";
import { View, Text, StyleSheet, ScrollView, ViewStyle } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import useDimensions from "../hooks/useDimensions";
import { Screen } from "../navigations/Screen";
import { MixedStackProps } from "../utils/DifferentProps";

export const RestaurantsScreen = ({ navigation }: MixedStackProps) => {
  const { height: mobHeight, width: mobWidth } = useDimensions();

  const innerContainer = {
    width: mobWidth,
    height: mobWidth < mobHeight ? mobHeight / 2 : mobHeight * 0.8,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  } as ViewStyle;

  return (
    <Screen
      navigation={navigation}
      focusedScreen={navigation.isFocused() ? "RestaurantsDrawer" : ""}
    >
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.textStyle}>All Restuarants</Text>
        <View style={innerContainer}>
          <RestaurantCard
            name="Continental"
            onPress={() =>
              navigation.navigate("RestaurantsDrawer", {
                screen: "Continental",
              })
            }
          />
          <RestaurantCard
            name="Biriyani"
            onPress={() =>
              navigation.navigate("RestaurantsDrawer", {
                screen: "Restaurant",
                params: { name: "Biriyani" },
              })
            }
          />
          <RestaurantCard
            name="Mughlai"
            onPress={() =>
              navigation.navigate("RestaurantsDrawer", {
                screen: "Restaurant",
                params: { name: "Mughlai" },
              })
            }
          />
        </View>
      </ScrollView>
    </Screen>
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
