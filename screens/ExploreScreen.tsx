import React from "react";
import { View, Text, StyleSheet, ScrollView, ViewStyle } from "react-native";
import useDimensions from "../hooks/useDimensions";
import { Menu } from "../components/Menu";
import { RestaurantCard } from "../components/RestaurantCard";
import {
  // DrawerStackProps,
  // HomeStackProps,
  MixedStackProps,
  // ProfileStackProps,
  // RestaurantProps,
  // RestaurantsStackProps
} from "../utils/DifferentProps";
import { Screen } from "../navigations/Screen";

// type ExploreScreenProps = {
//   props1 : DrawerStackProps;
//   props2: RestaurantsStackProps;
//   props3: RestaurantProps;
//   props4: ProfileStackProps;
//   props5: HomeStackProps;
// };

export const ExploreScreen = ({ navigation }: MixedStackProps) => {
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
    <Screen
      navigation={navigation}
      focusedScreen={navigation.isFocused() ? "HomeDrawer" : ""}
    >
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.view}>
          <Text style={styles.mainText}>Restaurants</Text>
          <View style={secondView}>
            <RestaurantCard
              name="Biriyani Restaurant"
              onPress={() =>
                navigation.navigate("RestaurantsDrawer", {
                  screen: "Restaurant",
                  params: { name: "Biriyani" },
                })
              }
            />
            <RestaurantCard
              name="Mughlai Restaurant"
              onPress={() =>
                navigation.navigate("RestaurantsDrawer", {
                  screen: "Restaurant",
                  params: { name: "Mughlai" },
                })
              }
            />
            <RestaurantCard
              name="Continental"
              onPress={() =>
                navigation.navigate("RestaurantsDrawer", {
                  screen: "Continental",
                })
              }
            />
          </View>
          <Text style={styles.mainText}>Restaurants Near You</Text>
          <View style={thirdView}>
            <RestaurantCard
              name="Biriyani Restaurant"
              onPress={() =>
                navigation.navigate("RestaurantsDrawer", {
                  screen: "Restaurant",
                  params: { name: "Biriyani" },
                })
              }
            />
            <RestaurantCard
              name="Mughlai Restaurant"
              onPress={() =>
                navigation.navigate("RestaurantsDrawer", {
                  screen: "Restaurant",
                  params: { name: "Mughlai" },
                })
              }
            />
            <Menu
              onExplorePress={() => navigation.push("Home")}
              onRestaurantsPress={() =>
                navigation.navigate("RestaurantsDrawer", {
                  screen: "Restaurants",
                })
              }
              onProfilePress={() => navigation.navigate("ProfileDrawer")}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
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
