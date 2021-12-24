import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { MyButton } from "../components/MyButton";
import { RestaurantProps } from "../navigations/ScreenNavigation";


export const Restaurant = ({ navigation, route }: RestaurantProps) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.mainScreen}>
        <Card style={{ width: '100%' }}>
          <View style={styles.insideCard}>
          <Text style={styles.text}>{route.params.name} Restaurant</Text>
          <MyButton title='Go to Menu' onPress={() => navigation.navigate<any>(route.params.name)} />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  insideCard: {
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    fontFamily: 'poppins-bold',
    fontSize: 14
  }
});