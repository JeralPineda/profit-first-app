import { Colors } from "@/constants/theme";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function AccountListItem() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.name}>Profit</Text>
      <Text style={styles.percentage}>10%</Text>
      <Text style={styles.percentage}>20%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
  },
  percentage: {},
});
