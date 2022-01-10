import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { MixedStackProps } from "../utils/DifferentProps";

export const Chinese = ({ navigation }: MixedStackProps) => {
  return (
    <RestaurantDetail
      name1="Chinese Cuisine"
      name2="Noodles (Gravy, Hakka), Chilli-Chicken"
      navigation={navigation}
    />
  );
};
