import React from "react";
import { RestaurantDetail } from "../components/RestaurantDetail";
import { Props } from "../navigations/ScreenNavigation";

export const Chinese = ({ navigation }: Props) => {
  return (
    <RestaurantDetail
      name1="Chinese Cuisine"
      name2="Noodles (Gravy, Hakka), Chilli-Chicken"
      onGoBackHome={() => navigation.popToTop()}
    />
  );
};
