import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { HomeStackProps } from "../utils/DifferentProps";

export const Biriyani = ({ navigation }: HomeStackProps) => {
  return (
    <RestaurantDetail
      name1="Biriyani Restaurant"
      name2="Delicious Chicken and Mutton Biriyani"
      onGoBackHome={() => navigation.navigate('Home')}
    />
  );
};
