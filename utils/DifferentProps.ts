import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

export type HomeStackParamList = {
  Tabs?: undefined;
  Home: undefined;
};

export type RestaurantsStackParamList = {
  Tabs?: undefined;
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
  DrawerView: undefined;
  HomeView: undefined;
  RestaurantsView: undefined;
  ProfileView: undefined;
  SettingsView: undefined;
};

export type DrawerStackParamList = {
  TabDrawer?: undefined;
  HomeDrawer: undefined;
  RestaurantsDrawer: { screen?: string; params?: { name: string } };
  ProfileDrawer: undefined;
  SettingsDrawer: undefined;
};

export type MainStackParamList = {
  DrawerMainStack?: undefined;
  TabMainStack: undefined;
  HomeMainStack: undefined;
  RestaurantsMainStack: undefined;
  ProfileMainStack: undefined;
  SettingsMainStack: undefined;
};

export type MixedStackParamList = {
  DrawerMixedStack: undefined;
  MainMixedStack: undefined;
  Tabs?: undefined;
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

export type DrawerStackProps = DrawerScreenProps<DrawerStackParamList>;

export type MainStackProps = StackScreenProps<MainStackParamList>;

export type MixedStackProps = HomeStackProps &
  RestaurantsStackProps &
  RestaurantProps &
  ProfileStackProps &
  SettingsStackProps &
  DrawerStackProps;
