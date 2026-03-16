import { accountsCollection } from "@/db";
import Account from "@/model/Account";
import { withObservables } from "@nozbe/watermelondb/react";
import { FlatList } from "react-native";
import AccountListItem from "./account-list-item";
import FormFooter from "./form-footer";

type Props = {
  accounts: Account[];
};

function AccountsList({ accounts }: Props) {
  return (
    <FlatList
      data={accounts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item }) => <AccountListItem account={item} />}
      ListFooterComponent={() => <FormFooter />}
    />
  );
}

// Sin esto aunque se actualice la lista de cuentas, el componente no se actualizara
const enhance = withObservables([], () => ({
  accounts: accountsCollection.query(),
}));

export default enhance(AccountsList);
