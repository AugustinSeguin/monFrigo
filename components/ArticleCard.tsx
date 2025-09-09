import CustomText from "@/components/CustomText";
import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../constants/Styles";

type ArticleCardProps = {
  imageUrl: string;
  title: string;
  quantity: number | string;
  inStock?: boolean;
  isEmpty?: boolean;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  title,
  quantity,
  inStock = true,
  isEmpty = false,
}) => {
  return (
    <SafeAreaView style={[styles.card, { backgroundColor: COLORS.card }]}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <CustomText
          styles={[
            styles.title,
            { color: COLORS.white },
            !inStock && { opacity: 0.6 },
          ]}
          text={title}
        ></CustomText>
        <CustomText
          text={`Quantité : ${quantity}`}
          styles={[
            styles.quantity,
            { color: inStock ? COLORS.white : COLORS.danger },
            !inStock && { opacity: 0.6 },
          ]}
        />
      </View>

      {isEmpty && !inStock && (
        <View>
          <CustomText text="Vide"></CustomText>
        </View>
      )}

      {isEmpty && inStock && (
        <View>
          <CustomText text="Faible"></CustomText>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderRadius: SIZES.borderRadius,
    padding: SIZES.paddingSmall,
    marginVertical: 4,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: SIZES.borderRadius,
    backgroundColor: COLORS.secondary,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: SIZES.fontMedium,
    fontWeight: "500",
    lineHeight: 22,
  },
  quantity: {
    fontSize: SIZES.fontSmall,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 2,
  },
});

export default ArticleCard;
