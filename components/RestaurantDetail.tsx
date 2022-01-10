// import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { Screen } from "../navigations/Screen";
// import { MainStackParamList } from "../navigations/ScreenNavigation";
import { MyButton } from "./MyButton";

interface RestaurantDetailProps {
  name1: string;
  name2: string;
  navigation: any;
}

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({
  name1,
  name2,
  navigation,
}) => {
  return (
    <Screen
      navigation={navigation}
      focusedScreen={navigation.isFocused() ? "RestaurantsDrawer" : ""}
    >
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.mainText}>{name1}</Text>
        <Card>
          <View style={styles.viewStyle}>
            <Text style={styles.secondaryText}>{name2}</Text>
          </View>
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            et quod eos alias sequi doloribus iste deserunt, in commodi ipsum
            saepe neque excepturi aspernatur accusantium adipisci nulla dicta
            sed minima amet perferendis debitis natus similique enim accusamus.
            Aperiam quis et sit a doloremque blanditiis dolore dolor? Explicabo,
            sint? Cupiditate, quidem!
          </Text>
          <View style={styles.viewStyle}>
            <Text style={styles.secondaryText}>Order Now</Text>
          </View>
        </Card>
        <View style={styles.viewStyle1}>
          <MyButton
            title="GO TO HOME"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingVertical: 30,
  },
  mainText: {
    fontFamily: "poppins-bold",
    fontSize: 22,
    textAlign: "center",
  },
  cardText: {
    fontFamily: "poppins-italic",
    lineHeight: 30,
  },
  viewStyle: {
    flexDirection: "row",
    backgroundColor: "black",
    width: "100%",
    justifyContent: "center",
    padding: 20,
  },
  viewStyle1: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    padding: 20,
  },
  secondaryText: {
    fontFamily: "poppins-bold",
    textTransform: "uppercase",
    fontSize: 16,
    color: "white",
  },
});
