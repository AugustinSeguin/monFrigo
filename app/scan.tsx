import ArticleCard from "@/components/ArticleCard";
import Button from "@/components/Button";
import CustomText from "@/components/CustomText";
import Navbar from "@/components/Navbar";
import SelectList from "@/components/SelectList";
import SpaceBottom from "@/components/SpaceBottom";
import InputText from "@/components/TextInput";
import { SafeAreaView } from "react-native";

export default function ScanScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button action={() => {}} titre="Press me" />

      <SpaceBottom size={20} />

      <InputText
        text="Texte"
        editable={true}
        onchange={() => console.log("changed")}
      />

      <SpaceBottom size={20} />

      <CustomText text="This is a text" />

      <SpaceBottom size={20} />

      <SelectList
        list={["Tomate", "Salade", "Oeuf"]}
        selectedValue={""}
        placeholder="Choisissez votre ingrédient"
      />

      <SpaceBottom size={20} />

      <ArticleCard
        imageUrl="https://www.mydigitalschool.com/sites/default/files/2023-03/logo-web.png"
        title="Article 1"
        quantity={2}
        inStock={false}
      />

      <SpaceBottom size={20} />

      <Navbar activeTab="scan" />
    </SafeAreaView>
  );
}
