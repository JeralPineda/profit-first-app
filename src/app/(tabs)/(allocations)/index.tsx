import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function Allocations() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Allocations</ThemedText>
      <Link href="/new-allocation">New Allocation</Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
