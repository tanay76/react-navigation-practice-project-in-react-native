import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { HomeStackProps } from "../utils/DifferentProps";

export const Italian = ({ navigation }: HomeStackProps) => {
  return (
    <RestaurantDetail
      name1="Italian Cuisine"
      name2="Pizza, Burger"
      onGoBackHome={() => navigation.navigate('Home')}
    />
  );
};
