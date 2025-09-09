import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Navbar from "@/components/Navbar";
import { COLORS, SIZES } from "../constants/Styles";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ScanScreen() {
  const [hasPermission] = useState<boolean | null>(null);
  const router = useRouter();

  if (hasPermission === null) {
    return <View style={styles.center}><Text>Demande d'accès à la caméra...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.center}><Text>Accès à la caméra refusé</Text></View>;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={28} color={COLORS.white} />
        </TouchableOpacity>
        <View style={styles.headerBtn} />
      </View>
      <Navbar activeTab="scan" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.paddingLarge,
    backgroundColor: COLORS.background + "CC",
    zIndex: 10,
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: SIZES.fontXL,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(19,23,18,0.3)",
    zIndex: 2,
  },
  scanUI: {
    zIndex: 3,
    width: "100%",
    alignItems: "center",
    marginBottom: SIZES.paddingLarge,
  },
  quantityContainer: {
    alignItems: "center",
    marginBottom: SIZES.paddingLarge,
  },
  quantityLabel: {
    color: COLORS.white + "CC",
    fontSize: SIZES.fontSmall,
    fontWeight: "500",
  },
  quantityValue: {
    color: COLORS.white,
    fontSize: SIZES.fontXXL,
    fontWeight: "bold",
  },
  scanActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.paddingLarge,
  },
  actionBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.primary + "CC",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.paddingSmall,
  },
  scanBtn: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    marginHorizontal: SIZES.paddingSmall,
  },
});