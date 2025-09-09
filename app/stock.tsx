import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants/Styles";

const articles = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzRZmy11IZ-5UeFH86cRiu220uftvCrF8aeQIIkOu69aqrM5WM-qWWm7zTPlrQJ5k6NvjqdE7LJpm-8pxkbXa9JOB5YLfFF7Y7mtIkaRJY9VLhY6sjxC8NLSwOsakjdB5FWakziwiuIK-hTtuGzdsiQ-8JHNvNHFHc8XiUxDmZUFYvjSJetQOUKbrCtnmtKTP6BeWWWbV9i6NMR1ZaPWDtGzvttQVCnz-Sr35J7aTjhaizV3yPhg2i4_6_VEEvvRfeDx23VJQlu6k",
    title: "Lait Biologique",
    quantity: 2,
    inStock: true,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBiNVdi0XI0BC1nxRJ_q8Rti4ZafPjtQPUHTrZvrDyZiYTIz2sPkuMIMiNASEj7wltMoGTw7P3vxBHrwFiNn8AtZsnmkqUYrmbzWL-zvE6O0HR5qXbivpJbRhGFCTtSheLswx_T8d_p5e3qQDut0O5WN4y6z9vWLKu6eww_3iNR3QGVcRX2KNtVcCC71AdEL2_KJqJA9Grtsiqs1oNnE48Tkv2bp7H3pPj5IGRsJs0n9s3yHfNADddIlXCPgEIQefUsqgjPWbWI6IY",
    title: "Avocat",
    quantity: 1,
    inStock: true,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoy0ZZK1PZ6Bl110W8nLPEnJ76hsFUJ_eaSCpVaa7VyUjv8UBr07Qiv4e-cqbd25-PyNEd2F04po4wLSVPU6q50Q7e_JCer_7wPhCmJjOQfpuQxhdvRZ4kTdqZUaY_M2jTBYeovqnEjfxpc3ldlPs3QK11xeyCc78yPclywB178MAqR-rAldR4CX696hvFnjfSZlQ228bMA1ffdme80DvPzD4kZ55lZJrKIkY-_ttt349ZIAO_zXt_INSn3ghiYbfN4SvXofqL2cU",
    title: "Œufs",
    quantity: 3,
    inStock: true,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnC_jnuNvhJgUpE3k7s-fEvflS-PBfIwhU8V7mEg39-Fg-ceIoAfpI_65I50U-4fIaTrL_52_xFQ51YyWhIrBhDt2x5JUdEOy7B0W4wEZJJtiU9hJwGJ6m5LLXaCUThGMBGl2T5fPS88NSI2v84jfDueyjxzHnsu_6l6e5g5xjtoYHDUe2rhAK6TX0F9eljwai5pCEhzV3xDr6wQ6-n96j-sAi2C9lk1iNdhfCuUz82l9A_xipSiTlM23cHETX1NL1y3hFjni3UAQ",
    title: "Saumon",
    quantity: 1,
    inStock: true,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdILloRhdzs3F9nZ4xm1I8FFDQgWLxVZ7DIpcGCXMhdMWM5rTLmaKJRPQeF7_53xy5agUN1uOAqPxElwJxxh3vsjOxj2x83EwtXkIIPeEjG4okaP-WQyJbr-Nwhac3Tt-wwPcEy41NZ9zVNWwT--ib77D10Rci7pMOO4x2vah-gyy07RR54QbVWPYcDhM7JgyIzSt_TmGG_mp77b6wvQqOy9seCkEMgfFM1zw9bAERne_ljQEmL4U_8-Q7KidKKD9ANBnpaPRajnc",
    title: "Tomates",
    quantity: 2,
    inStock: true,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASapgXvDpgEYZqBiiEB0xscUOVnU7HL9XsqTGZTRNivLw55dcRdKsbEHksUKZmVYmwLDb59FYdhoQtbgd075J5uoKbdeoY1IMvpJKfDgtV7kIdsX0252es4arQz_SYZo8q8gjjmvz6XkkV5C6lkDFRkwOjcL9e3A_3s0HN62EbUHzK4mUBLQ7Z1opX8V3Wr9Vrewn3r0WRJkhXAKPasfT9ttni1_aeYlFtfKHBH0SY-0ApaQGGNLpYUPcSR9mPfPwE_NZS1GiKya4",
    title: "Épinards",
    quantity: 1,
    inStock: true,
  },
];

export default function StockScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {articles.map((item, idx) => (
          <ArticleCard key={idx} {...item} />
        ))}
      </ScrollView>
      <Navbar activeTab="stock" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: COLORS.background + "CC",
    paddingTop: SIZES.paddingLarge,
    paddingBottom: SIZES.paddingSmall,
    alignItems: "center",
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: SIZES.fontXL,
    fontWeight: "bold",
    letterSpacing: -0.5,
    textAlign: "center",
  },
  scrollContent: {
    paddingHorizontal: SIZES.paddingLarge,
    paddingVertical: SIZES.paddingSmall,
    gap: SIZES.paddingSmall,
  },
});
