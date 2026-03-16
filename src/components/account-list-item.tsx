import { Colors } from "@/constants/theme";
import Account from "@/model/Account";
import { withObservables } from "@nozbe/watermelondb/react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./themed-text";

function AccountListItem({ account }: { account: Account }) {
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

// Sin esto el elemento de la lista no se actualiza
// si hago un update a un elemento no cambia hasta que recargue debido a que no es reactivo
const enhance = withObservables(["account"], ({ account }) => ({
  account,
}));

export default enhance(AccountListItem);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {},
  percentage: {},
});
