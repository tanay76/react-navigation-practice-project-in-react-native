import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { MixedStackProps } from "../utils/DifferentProps";

export const Mughlai = ({ navigation }: MixedStackProps) => {
  return (
    <RestaurantDetail
      name1="Mughlai Cuisine"
      name2="Chicken & Mutton Kababs"
      navigation={navigation}
    />
  );
};
