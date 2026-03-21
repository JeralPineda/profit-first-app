import AllocationsList from "@/components/allocations-list";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { accountAllocationsCollection } from "@/db";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useEffect } from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Allocations() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      <ThemedText type="subtitle">Allocations</ThemedText>

      <Pressable
        onPress={() => router.push("/new-allocation")}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.primary, opacity: pressed ? 0.5 : 1 },
        ]}
      >
        <ThemedText style={styles.textButton}>New Allocation</ThemedText>
        <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
      </Pressable>

      <AllocationsList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  button: {
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
});
