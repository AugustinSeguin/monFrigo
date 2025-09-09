import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, SIZES } from "../constants/Styles";

type TextProps = {
  text: string;
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontSize: SIZES.fontMedium,
    fontWeight: "normal",
  },
});

const CustomText: React.FC<TextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default CustomText;
