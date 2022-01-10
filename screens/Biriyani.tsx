import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { MixedStackProps } from "../utils/DifferentProps";

export const Biriyani = ({ navigation }: MixedStackProps) => {
  return (
    <RestaurantDetail
      name1="Biriyani Restaurant"
      name2="Delicious Chicken and Mutton Biriyani"
      navigation={navigation}
    />
  );
};
