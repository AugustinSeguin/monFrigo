import React from "react";
import { COLORS, SIZES } from "../constants/Styles";

type TextProps = {
  text: string;
};

const textStyle: React.CSSProperties = {
  color: COLORS.black,
  fontSize: SIZES.fontMedium,
  fontWeight: "normal",
};

const Text: React.FC<TextProps> = ({ text }) => {
  return <span style={textStyle}>{text}</span>;
};

export default Text;
