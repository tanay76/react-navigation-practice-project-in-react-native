import React from "react";
import { View, Text, StyleSheet, ScrollView, ViewStyle } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import useDimensions from "../hooks/useDimensions";
import { Props, RestaurantProps } from "../navigations/ScreenNavigation";

type RSProps = Props & RestaurantProps;

export const RestaurantsScreen = ({ navigation }: RSProps) => {
  const { height: mobHeight, width: mobWidth } = useDimensions();

  const innerContainer = {
    width: mobWidth,
    height: mobWidth < mobHeight ? mobHeight / 2 : mobHeight * 0.8,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  } as ViewStyle;

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Text style={styles.textStyle}>All Restuarants</Text>
      <View style={innerContainer}>
        <RestaurantCard
          name="Continental"
          onPress={() => navigation.navigate("Continental")}
        />
        <RestaurantCard
          name="Biriyani"
          onPress={() =>
            navigation.navigate("Restaurant", { name: "Biriyani" })
          }
        />
        <RestaurantCard
          name="Mughlai"
          onPress={() => navigation.navigate("Restaurant", { name: "Mughlai" })}
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
