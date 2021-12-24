import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { Props } from "../navigations/ScreenNavigation";

export const Mughlai = ({ navigation }: Props) => {
  return (
    <RestaurantDetail
      name1="Mughlai Cuisine"
      name2="Chicken & Mutton Kababs"
      onGoBackHome={() => navigation.popToTop()}
    />
  );
};
