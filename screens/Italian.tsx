import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { Props } from "../navigations/ScreenNavigation";

export const Italian = ({ navigation }: Props) => {
  return (
    <RestaurantDetail
      name1="Italian Cuisine"
      name2="Pizza, Burger"
      onGoBackHome={() => navigation.popToTop()}
    />
  );
};
