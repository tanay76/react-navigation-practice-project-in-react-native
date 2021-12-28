import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackScreenProps } from "@react-navigation/stack";

export type HomeStackParamList = {
  Home: undefined;
};

export type RestaurantsStackParamList = {
  Restaurants: undefined;
  Continental: undefined;
  Indian: undefined;
  Italian: undefined;
  Chinese: undefined;
  Mughlai: undefined;
  Biriyani: undefined;
  Restaurant: { name: string };
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
};

export type TabStackParamList = {
  Home: undefined;
  Restaurants: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type HomeStackProps = StackScreenProps<HomeStackParamList>;

export type RestaurantsStackProps = StackScreenProps<RestaurantsStackParamList>;

export type RestaurantProps = StackScreenProps<
  RestaurantsStackParamList,
  "Restaurant"
>;

export type ProfileStackProps = StackScreenProps<ProfileStackParamList>;

export type SettingsStackProps = StackScreenProps<SettingsStackParamList>;

export type BottomStackProps = BottomTabScreenProps<TabStackParamList>;