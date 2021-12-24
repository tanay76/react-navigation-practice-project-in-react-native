// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
// import { ExploreScreen } from "./screens/ExploreScreen";
// import { RestaurantsScreen } from "./screens/RestaurantsScreen";
// import { Indian } from "./screens/Indian";
// import { Profile } from "./screens/Profile";
import { ScreenNavigation } from "./navigations/ScreenNavigation";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "poppins-italic": require("./assets/fonts/Poppins-Italic.ttf"),
      "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <ScreenNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
