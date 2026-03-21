import AccountAllocation from "@/model/AccountAllocation";
import { View } from "react-native";
import { ThemedText } from "./themed-text";
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "@/model/Account";

interface AccountAllocationItemProps {
  accountAllocation: AccountAllocation;
  account: Account;
}

function AccountAllocationItem({
  accountAllocation,
  account,
}: AccountAllocationItemProps) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <ThemedText type="small">{account.name}</ThemedText>
      <ThemedText type="small">${accountAllocation.amount}</ThemedText>
    </View>
  );
}

const enhance = withObservables(
  ["accountAllocation"],
  ({ accountAllocation }: { accountAllocation: AccountAllocation }) => ({
    accountAllocation,
    account: accountAllocation.account,
  }),
);

export default enhance(AccountAllocationItem);
