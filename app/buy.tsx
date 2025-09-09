import ArticleCard from "@/components/ArticleCard";
import CustomText from "@/components/CustomText";
import Navbar from "@/components/Navbar";
import SelectList from "@/components/SelectList";
import SpaceBottom from "@/components/SpaceBottom";
import InputText from "@/components/TextInput";
import React from "react";
import { Button, SafeAreaView } from "react-native";

export const options = {
  title: "À Acheter",
};

export default function BuyScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={() => {}} title="Press me" />

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

      <Navbar activeTab="buy" />
    </SafeAreaView>
  );
}
