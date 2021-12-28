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
  HomeView: undefined;
  RestaurantsView: undefined;
  ProfileView: undefined;
  SettingsView: undefined;
};

export type MainStackParamList = {
  HomeMainStack: undefined;
  RestaurantsMainStack: undefined;
  ProfileMainStack: undefined;
  SettingsMainStack: undefined;
  TabMainStack: undefined;
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

export type MainStackProps = StackScreenProps<MainStackParamList>;