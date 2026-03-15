import { FlatList, Text, View } from "react-native";
import AccountListItem from "./account-list-item";

export default function AccountsList() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      contentContainerStyle={{
        gap: 5,
      }}
      renderItem={() => <AccountListItem />}
    />
  );
}
