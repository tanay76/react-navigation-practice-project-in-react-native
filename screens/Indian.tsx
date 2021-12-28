import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { HomeStackProps } from "../utils/DifferentProps";

export const Indian = ({ navigation }: HomeStackProps) => {
  return (
    <RestaurantDetail
      name1="Indian Cuisine"
      name2="Bhat, Roti, Dal, Bhaji"
      onGoBackHome={() => navigation.navigate('Home')}
    />
  );
};
