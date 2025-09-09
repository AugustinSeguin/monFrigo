import Navbar from "@/components/Navbar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants/Styles";

const articles = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAd0C-HOl8cZyC0yQFknwP_OnDWmPmO1QmARTQZxZ0h4rEfJ1sSTqUZUC95ioSHoulx6UZLyROnXB5pyv6RgGd6TGoJWRvIE16uQKXPNA-NTKRmswT9bWIz_kDlhPvxl4cz2oWyGuEqxMm6oKHTyuCEnNbarAJpybWhBUQZAkfiza5jSbNkYkEpVcPXT_0VYhsR_Sn6kp5kJWirgC2y82D1Up7Hwr9_AH_uj9Y5kYcKJfScl1PnBapL6VUrn5bODjCmHnr4eMvgs9A",
    title: "Pâtes",
    subtitle: "Reste 100g",
    status: "faible",
    statusColor: "#facc15",
    statusBg: "#facc1533",
    out: false,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-TD-szSnZL1C4Wv8CRv553fgbePWXp4ETDAtWWsS1K86sgcTtj3O_uQMpr0yTtc2VwJMkVFseG1NmilbmOYNVpdhAUv4-8DXKeBZREFY21HccRyJ0furhFAEW--3AiWix198-LV-L69jnS_yqj8FqlnQqBuqXmSJlsKvaT2_dWgyvEx49AL3IwL8mxpW9jKEjXaz2b2G_0yyXe7OCuBPhybroit5ejZ58MUmox51K-TFcR6wmBgz34eXhEk4Dtwrv8pA1hwWMj70",
    title: "Lait",
    subtitle: "Reste 1 unité",
    status: "faible",
    statusColor: "#facc15",
    statusBg: "#facc1533",
    out: false,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA075EeHtc5NtASAdylGY7-jYatJk_xUNXqbFDlvMmrrOBv9zfKBm5MWCBAWuBuScVz-gtcWFf6hZIZePsaqglt9iplkhmQUzC1rjmvWf4eGoWrpREMoSk5dDBOnPMeUq13if75q-WtH511FYPWzOxZEMm7zHvMESTQFa-oK47SZKiSNCKMHiT367r1qE-5XRTtbEUGRb92TFW9rELcwC5_qlvA9oSlN7c-b3rHDh-4vOyhT3j_Kx_IvN4yXbNxadtF9_-CamD7NEA",
    title: "Œufs",
    subtitle: "Reste 2 unités",
    status: "faible",
    statusColor: "#facc15",
    statusBg: "#facc1533",
    out: false,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvGFQEvIWEh09NIULzI-qwjnhOHhH8OSTj4TVdgSWkBlmyjpXYyB8tASdQV8d6ze_tAqlW2TAqW-nfy8IR8rpFdkOloacsWPYgJwFpd4GCzFAsoFTF3-EMS_M6T2UswO84v2Z-2pcUDFrpH3oFUtINZzpk3CZDMq7l6uMU30IF1vEIeejSp3ABjJJ7zUt38YbfYd5Gl6T2UV5DEK4l5c2wIfj98Cc-LJGau75cn21lDqVHEXdOoR1Q67aaFBFFlY4xdllSSzUf_EQ",
    title: "Pain",
    subtitle: "Épuisé",
    status: "vide",
    statusColor: "#ef4444",
    statusBg: "#ef444433",
    out: true,
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOrxNFiktFjwG1UDoccne4zKMCFUup2M8hvphZy8-7YKsdgBbUketElsWBTKHr6e0p_nlmKIFJ12kxQ4YP9boFzrM6Z1PJs4XmLQ6mwsp53QWkav4ekYx98Pjjy_J35n8Ql99ds7QTpAQji6-3uCXAQ3mZ1XSx_HKF-oQofpG3G7PuYqSqiwtGSO6Rt27PfTwEV6d46y8raUuAC83z9eQc9EwXXnogiTX-tfp2QzaD0keNXlmJVAD62a4kCIIdUJovALW3gY0utPI",
    title: "Beurre",
    subtitle: "Épuisé",
    status: "vide",
    statusColor: "#ef4444",
    statusBg: "#ef444433",
    out: true,
  },
];

export default function BuyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Articles à racheter</Text>
        {articles.map((item) => (
          <View
            key={item.title}
            style={[styles.card, item.out && styles.cardOut]}
          >
            <View style={styles.image}>
              <View style={[styles.image, { backgroundColor: "#ccc" }]} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text
                style={[
                  styles.cardSubtitle,
                  item.out && styles.cardSubtitleOut,
                ]}
              >
                {item.subtitle}
              </Text>
            </View>
            <View style={styles.statusContainer}>
              <Text
                style={[
                  styles.status,
                  { color: item.statusColor, backgroundColor: item.statusBg },
                ]}
              >
                {item.status === "vide" ? "Vide" : "Faible"}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Navbar activeTab="buy" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#181818",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.paddingLarge,
    paddingTop: SIZES.paddingLarge,
    backgroundColor: "#181818CC",
    zIndex: 10,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: SIZES.fontLarge,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  scrollContent: {
    padding: SIZES.paddingLarge,
    gap: SIZES.paddingSmall,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: SIZES.fontXXL,
    fontWeight: "bold",
    marginBottom: SIZES.paddingLarge,
    letterSpacing: -0.5,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: SIZES.paddingMedium,
    borderRadius: SIZES.borderRadius * 1.5,
    marginBottom: SIZES.paddingSmall,
    gap: SIZES.paddingSmall,
  },
  cardOut: {
    opacity: 0.7,
  },
  image: {
    width: SIZES.cardImage,
    height: SIZES.cardImage,
    borderRadius: SIZES.borderRadius,
    overflow: "hidden",
    backgroundColor: "#ccc",
    marginRight: SIZES.paddingSmall,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  cardTitle: {
    color: COLORS.text,
    fontSize: SIZES.fontMedium,
    fontWeight: "600",
  },
  cardSubtitle: {
    color: "#a1a1a1",
    fontSize: SIZES.fontSmall,
  },
  cardSubtitleOut: {
    color: "#ef4444",
    fontWeight: "500",
  },
  statusContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    fontSize: SIZES.fontXS,
    fontWeight: "600",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    overflow: "hidden",
  },
});
