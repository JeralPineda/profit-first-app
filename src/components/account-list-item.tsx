import { Colors } from "@/constants/theme";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./themed-text";

export default function AccountListItem() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText type="smallBold" style={styles.name}>
        Profit
      </ThemedText>
      <ThemedText style={styles.percentage}>10%</ThemedText>
      <ThemedText style={styles.percentage}>20%</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {},
  percentage: {},
});
