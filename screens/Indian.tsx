import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { MixedStackProps } from "../utils/DifferentProps";

export const Indian = ({ navigation }: MixedStackProps) => {
  return (
    <RestaurantDetail
      name1="Indian Cuisine"
      name2="Bhat, Roti, Dal, Bhaji"
      navigation={navigation}
    />
  );
};
