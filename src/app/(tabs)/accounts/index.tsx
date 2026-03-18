import AccountsList from "@/components/accounts-list";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Accounts() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };

  return (
    <ThemedView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <ThemedText type="subtitle">Accounts</ThemedText>

      <View style={styles.header}>
        <ThemedText>Name</ThemedText>
        <ThemedText>CAP</ThemedText>
        <ThemedText>TAP</ThemedText>
        <ThemedText></ThemedText>
      </View>

      <AccountsList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: MaxContentWidth,
    padding: 15,
    gap: 5,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
