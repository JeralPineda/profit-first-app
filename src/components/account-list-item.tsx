import { Colors } from "@/constants/theme";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./themed-text";
import Account from "@/model/Account";

export default function AccountListItem({ account }: { account: Account }) {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText type="smallBold" style={styles.name}>
        {account.name}
      </ThemedText>
      <ThemedText style={styles.percentage}>{account.cap}%</ThemedText>
      <ThemedText style={styles.percentage}>{account.tap}%</ThemedText>
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
