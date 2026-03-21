import { Colors } from "@/constants/theme";
import AccountAllocation from "@/model/AccountAllocation";
import Allocation from "@/model/Allocation";
import { withObservables } from "@nozbe/watermelondb/react";
import { StyleSheet, useColorScheme, View } from "react-native";
import AccountAllocationItem from "./account-allocation-item";
import { ThemedText } from "./themed-text";

interface AllocationItemProps {
  allocation: Allocation;
  accountAllocations: AccountAllocation[];
}

function AllocationItem({
  allocation,
  accountAllocations,
}: AllocationItemProps) {
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

      <View style={{ gap: 5 }}>
        {accountAllocations.map((item) => (
          <AccountAllocationItem key={item.id} accountAllocation={item} />
        ))}
      </View>
    </View>
  );
}

const enhance = withObservables(
  ["allocation"],
  ({ allocation }: { allocation: Allocation }) => ({
    allocation,
    accountAllocations: allocation.accountAllocations,
  }),
);

export default enhance(AllocationItem);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  income: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
