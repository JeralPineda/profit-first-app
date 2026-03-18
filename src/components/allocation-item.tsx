import { Colors } from "@/constants/theme";
import Allocation from "@/model/Allocation";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./themed-text";

interface AllocationItemProps {
  allocation: Allocation;
}

function AllocationItem({ allocation }: AllocationItemProps) {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <ThemedText type="small">
          {allocation?.createdAt.toLocaleDateString()}
        </ThemedText>

        <ThemedText style={[styles.income, { color: colors.primary }]}>
          ${allocation?.income}
        </ThemedText>
      </View>
    </View>
  );
}

export default AllocationItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  income: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
