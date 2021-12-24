import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { Props } from "../navigations/ScreenNavigation";

export const Indian = ({ navigation }: Props) => {
  return (
    <RestaurantDetail
      name1="Indian Cuisine"
      name2="Bhat, Roti, Dal, Bhaji"
      onGoBackHome={() => navigation.popToTop()}
    />
  );
};
