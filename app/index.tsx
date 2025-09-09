import Button from "@/components/Button";
import InputText from "@/components/TextInput";
import SelectList from "@/components/SelectList";
import SpaceBottom from "@/components/SpaceBottom";
import Text from "@/components/Text";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button action={() => {}} titre="Press me" />

      <SpaceBottom size={20} />

      <InputText text="Texte" editable={true} onchange={() => console.log("changed")} />

      <SpaceBottom size={20} />

      <Text text="This is a text" />

      <SpaceBottom size={20} />

      <SelectList
        list={["Tomate", "Salade", "Oeuf"]}
        selectedValue={""}
        placeholder="Choisissez votre ingrédient"
      />

      <SpaceBottom size={20} />

      
    </View>
  );
}
