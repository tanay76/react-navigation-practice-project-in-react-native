import React from "react";
import { View, Text, StyleSheet, ScrollView, ViewStyle } from "react-native";
import useDimensions from "../hooks/useDimensions";
import { Menu } from "../components/Menu";
import { RestaurantCard } from "../components/RestaurantCard";
import {
  BottomStackProps,
  HomeStackProps,
  ProfileStackProps,
  RestaurantProps,
  RestaurantsStackProps,
} from "../utils/DifferentProps";

type ExploreProps = HomeStackProps &
  RestaurantsStackProps &
  RestaurantProps &
  ProfileStackProps &
  BottomStackProps;

export const ExploreScreen = ({ navigation }: ExploreProps) => {
  const { height: mobileHeight, width: mobileWidth } = useDimensions();

  const secondView = {
    height:
      mobileWidth < mobileHeight ? mobileHeight * 0.4 : mobileHeight * 0.75,
    width: mobileWidth * 0.95,
    justifyContent: "space-around",
  } as ViewStyle;

  const thirdView = {
    height:
      mobileWidth < mobileHeight ? mobileHeight * 0.45 : mobileHeight * 0.8,
    width: mobileWidth * 0.95,
    justifyContent: "space-around",
  } as ViewStyle;

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.view}>
        <Text style={styles.mainText}>Restaurants</Text>
        <View style={secondView}>
          <RestaurantCard
            name="Biriyani Reastaurant"
            onPress={() =>
              navigation.navigate("Restaurant", { name: "Biriyani" })
            }
          />
          <RestaurantCard
            name="Mughlai Reastaurant"
            onPress={() =>
              navigation.navigate("Restaurant", { name: "Mughlai" })
            }
          />
          <RestaurantCard
            name="Continental"
            onPress={() => navigation.navigate("Continental")}
          />
        </View>
        <Text style={styles.mainText}>Restaurants Near You</Text>
        <View style={thirdView}>
          <RestaurantCard
            name="Biriyani Reastaurant"
            onPress={() =>
              navigation.navigate("Restaurant", { name: "Biriyani" })
            }
          />
          <RestaurantCard
            name="Mughlai Reastaurant"
            onPress={() =>
              navigation.navigate("Restaurant", { name: "Mughlai" })
            }
          />
          <Menu
            onExplorePress={() => navigation.push("Home")}
            onRestaurantsPress={() => navigation.navigate("Restaurants")}
            onProfilePress={() => navigation.navigate("Profile")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
  },
  view: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  mainText: {
    fontFamily: "poppins-bold",
    fontSize: 18,
    color: "black",
  },
});
