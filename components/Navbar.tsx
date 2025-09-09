import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/Styles";

type NavbarProps = {
  activeTab?: "scan" | "stock" | "buy";
};

const Navbar: React.FC<NavbarProps> = ({ activeTab = "scan" }) => {
  const router = useRouter();

  const changeRoute = (route: "scan" | "stock" | "buy") => {
    if (route === "scan") router.push("/scan" as any);
    else if (route === "stock") router.push("/stock" as any);
    else if (route === "buy") router.push("/buy" as any);
  };

  return (
    <SafeAreaView style={styles.footer}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => changeRoute("scan")}
        >
          <MaterialIcons
            name="qr-code-scanner"
            size={SIZES.icon}
            color={activeTab === "scan" ? COLORS.primary : COLORS.textSecondary}
          />
          <Text style={styles.label}>Scanner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => changeRoute("stock")}
        >
          <MaterialIcons
            name="inventory-2"
            size={SIZES.icon}
            color={
              activeTab === "stock" ? COLORS.primary : COLORS.textSecondary
            }
          />
          <Text
            style={[styles.label, activeTab === "stock" && styles.activeLabel]}
          >
            Stock
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => changeRoute("buy")}
        >
          <MaterialIcons
            name="shopping-cart"
            size={SIZES.icon}
            color={activeTab === "buy" ? COLORS.primary : COLORS.textSecondary}
          />
          <Text style={styles.label}>À Acheter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.secondary + "CC",
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingBottom: 12,
    paddingHorizontal: 16,
    zIndex: 10,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 2,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: SIZES.fontXS,
    fontWeight: "500",
    letterSpacing: 0.2,
    marginTop: 2,
  },
  activeLabel: {
    color: COLORS.primary,
    fontWeight: "700",
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
});

export default Navbar;
