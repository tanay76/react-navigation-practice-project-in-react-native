import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { Props } from "../navigations/ScreenNavigation";

export const Biriyani = ({ navigation }: Props) => {
  return (
    <RestaurantDetail
      name1="Biriyani Restaurant"
      name2="Delicious Chicken and Mutton Biriyani"
      onGoBackHome={() => navigation.popToTop()}
    />
  );
};
