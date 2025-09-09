import React from "react";
import { COLORS, SIZES } from "../constants/Styles";

type ButtonProps = {
  action: () => void;
  titre: string;
};

const buttonStyle: React.CSSProperties = {
  padding: `${SIZES.paddingMedium}px ${SIZES.paddingLarge}px`,
  backgroundColor: COLORS.primary,
  color: COLORS.white,
  border: "none",
  borderRadius: SIZES.borderRadius,
  fontSize: SIZES.fontMedium,
  fontWeight: "bold",
};

const Button: React.FC<ButtonProps> = ({ action, titre }) => {
  return (
    <button onClick={action} style={buttonStyle}>
      {titre}
    </button>
  );
};

export default Button;
