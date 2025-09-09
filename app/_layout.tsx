import { COLORS } from "@/constants/Styles";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="scan"
          options={{
            headerTitle: "",
            headerBackVisible: false,
            headerStyle: { backgroundColor: COLORS.secondary },
            headerTitleStyle: { color: COLORS.white },
          }}
        />
        <Stack.Screen
          name="stock"
          options={{
            headerTitle: "Mon Stock",
            headerBackVisible: false,
            headerStyle: { backgroundColor: COLORS.secondary },
            headerTitleStyle: { color: COLORS.white },
          }}
        />
        <Stack.Screen
          name="buy"
          options={{
            headerTitle: "Ma liste de courses",
            headerBackVisible: false,
            headerStyle: { backgroundColor: COLORS.secondary },
            headerTitleStyle: { color: COLORS.white },
          }}
        />
        <Stack.Screen
          name="add"
          options={{
            headerTitle: "Ajotuer un article",
            headerBackVisible: false,
            headerStyle: { backgroundColor: COLORS.secondary },
            headerTitleStyle: { color: COLORS.white },
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
