import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { HomeStackProps } from "../utils/DifferentProps";

export const Chinese = ({ navigation }: HomeStackProps) => {
  return (
    <RestaurantDetail
      name1="Chinese Cuisine"
      name2="Noodles (Gravy, Hakka), Chilli-Chicken"
      onGoBackHome={() => navigation.popToTop()}
    />
  );
};
