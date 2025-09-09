import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { useCameraPermissions } from "expo-camera";
import Navbar from "@/components/Navbar";
import { COLORS, SIZES } from "../constants/Styles";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CameraView from "../components/CameraView";

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    alert(`Le code-barres de type ${type} et de données ${data} a été scanné !`);
    // TODOr
    // rajouter la logique métier pour traiter le code QR
    router.push("/stock" as any);
  };

  if (!permission) {
    return (
      <View style={styles.center}>
        <Text>Demande d'accès à la caméra...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.center}>
          <Text style={{ textAlign: "center", marginBottom: SIZES.paddingXS }}>
            Nous avons besoin de votre permission pour utiliser la caméra.
          </Text>
          <Button onPress={requestPermission} title="Autoriser la caméra" />
        </View>
        <Navbar activeTab="scan" />
      </SafeAreaView>
    );
  }

  // Les permissions sont accordées
  return (
    <SafeAreaView style={styles.safeArea}>
      <CameraView
        scanned={scanned}
        onBarCodeScanned={handleBarCodeScanned}
        onScanAgain={() => setScanned(false)}
      />
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
    paddingHorizontal: SIZES.paddingLarge,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.paddingLarge,
    zIndex: 10,
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});