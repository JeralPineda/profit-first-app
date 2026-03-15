import { FlatList, StyleSheet } from "react-native";
import AccountListItem from "./account-list-item";
import FormFooter from "./form-footer";

export default function AccountsList() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      contentContainerStyle={styles.contentContainer}
      contentInsetAdjustmentBehavior="automatic"
      renderItem={() => <AccountListItem />}
      ListFooterComponent={() => <FormFooter />}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 5,
  },
});
