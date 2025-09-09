import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import SelectList from "@/components/SelectList";
import CustomTextInput from "@/components/TextInput";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZES } from "../constants/Styles";

const categories = [
  "Produits laitiers",
  "Fruits et légumes",
  "Boulangerie",
  "Garde-manger",
];

export default function AddProductScreen() {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<string | null>(null); // Mocked image

  // Mock image picker
  const handlePickImage = () => {
    // Ici tu peux intégrer expo-image-picker plus tard
    setImage("https://placehold.co/80x80/png");
  };

  const handleAddProduct = () => {
    // TODO: Ajouter la logique d'ajout
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.headerBtn}
        >
          <MaterialIcons name="close" size={32} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Créer un article</Text>
        <View style={styles.headerBtn} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <Text style={styles.label}>Image du produit</Text>
          <TouchableOpacity
            style={styles.imageDrop}
            onPress={handlePickImage}
            activeOpacity={0.8}
          >
            {image ? (
              <Image source={{ uri: image }} style={styles.imagePreview} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <MaterialIcons name="cloud-upload" size={40} color="#A5B6A0" />
                <Text style={styles.uploadText}>
                  <Text style={{ fontWeight: "bold" }}>
                    Cliquez pour télécharger
                  </Text>{" "}
                  ou glissez-déposez
                </Text>
                <Text style={styles.uploadSubText}>
                  SVG, PNG, JPG ou GIF (MAX. 800x400px)
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <View style={{ height: 24 }} />
          <Text style={styles.label}>Nom du produit</Text>
          <CustomTextInput
            value={productName}
            onChangeText={setProductName}
            placeholder="ex. Lait biologique"
          />

          <View style={{ height: 16 }} />
          <Text style={styles.label}>Marque</Text>
          <CustomTextInput
            value={brand}
            onChangeText={setBrand}
            placeholder="ex. Horizon"
          />

          <View style={{ height: 16 }} />
          <Text style={styles.label}>Catégorie</Text>
          <SelectList
            list={categories}
            selectedValue={category}
            onValueChange={setCategory}
            placeholder="Sélectionnez une catégorie"
          />

          <View style={{ height: 32 }} />
          <View style={styles.buttonContainer}>
            <Button action={handleAddProduct} titre={"Ajouter l'article"} />
          </View>
        </View>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.paddingLarge,
    paddingTop: SIZES.paddingLarge,
    paddingBottom: 8,
    backgroundColor: COLORS.background,
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    color: COLORS.white,
    fontSize: SIZES.fontXL,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 40, // pour centrer visuellement
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: SIZES.paddingLarge,
    paddingBottom: 120,
  },
  form: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
  },
  label: {
    color: "#A5B6A0",
    fontSize: SIZES.fontMedium,
    fontWeight: "500",
    marginBottom: 4,
  },
  imageDrop: {
    borderWidth: 2,
    borderColor: "#2d372a",
    borderStyle: "dashed",
    borderRadius: 16,
    backgroundColor: "#1a2019",
    height: 128,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  imagePlaceholder: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  uploadText: {
    color: "#A5B6A0",
    fontSize: SIZES.fontMedium,
    marginTop: 8,
    marginBottom: 2,
    textAlign: "center",
  },
  uploadSubText: {
    color: "#6B7280",
    fontSize: 12,
    textAlign: "center",
  },
  imagePreview: {
    width: 80,
    height: 80,
    borderRadius: 12,
    resizeMode: "cover",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
