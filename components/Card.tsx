import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface CardProps {
  style?: ViewStyle;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ style, children }) => {
  return <View style={{ ...styles.card, ...style }}>{ children }</View>;
};

const styles = StyleSheet.create({
  card: {
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
