import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { MyButton } from "../components/MyButton";
import { Screen } from "../navigations/Screen";

export const Restaurant = ({ navigation, route }: any) => {

  return (
    <Screen
      navigation={navigation}
      focusedScreen={navigation.isFocused() ? "RestaurantsDrawer" : ""}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainScreen}>
          <Card style={{ width: "100%" }}>
            <View style={styles.insideCard}>
              <Text style={styles.text}>{route.params.name} Restaurant</Text>
              <MyButton
                title="Go to Menu"
                onPress={() => navigation.navigate(route.params.name)}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  insideCard: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    fontFamily: "poppins-bold",
    fontSize: 14,
  },
});
