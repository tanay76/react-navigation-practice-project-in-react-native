import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { MixedStackProps } from "../utils/DifferentProps";

export const Italian = ({ navigation }: MixedStackProps) => {
  return (
    <RestaurantDetail
      name1="Italian Cuisine"
      name2="Pizza, Burger"
      navigation={navigation}
    />
  );
};
