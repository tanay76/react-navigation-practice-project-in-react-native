import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { HomeStackProps } from "../utils/DifferentProps";

export const Mughlai = ({ navigation }: HomeStackProps) => {
  return (
    <RestaurantDetail
      name1="Mughlai Cuisine"
      name2="Chicken & Mutton Kababs"
      onGoBackHome={() => navigation.navigate('Home')}
    />
  );
};
