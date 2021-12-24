import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface MyButtonProps {
  title: string;
  onPress: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
    borderRadius: 10
  },
  btnText: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
    color: 'white',
    textTransform: 'uppercase'
  }
});