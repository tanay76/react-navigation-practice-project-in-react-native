import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "./Card";

interface MenuProps {
  onExplorePress: () => void;
  onRestaurantsPress: () => void;
  onProfilePress: () => void;
}

export const Menu: React.FC<MenuProps> = ({
  onExplorePress,
  onRestaurantsPress,
  onProfilePress,
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.view}>
        <Text style={{ fontFamily: "poppins-bold" }}>Go to links:</Text>
        <TouchableOpacity onPress={onExplorePress}>
          <Text style={styles.text}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRestaurantsPress}>
          <Text style={styles.text}>Restaurants</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onProfilePress}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
  },
  view: {
    width: "50%",
  },
  text: {
    color: "#167bf0",
  },
});
