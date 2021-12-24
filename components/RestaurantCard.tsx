import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface RestaurantCardProps {
  name: string;
  onPress?: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "#ccc",
    padding: 20,
    borderRadius: 10,
  },
});
