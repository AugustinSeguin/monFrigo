import React from "react";
import { TextInput } from "react-native-gesture-handler";

type InputProps = {
  text: string;
  editable?: boolean;
  onchange?: () => void;
};

const InputText: React.FC<InputProps> = ({ text, editable = false, onchange }) => {
  return <TextInput value={text} editable={editable} onChange={onchange} />;
};

export default InputText;
