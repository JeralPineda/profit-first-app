import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import database, { accountsCollection, allocationsCollection } from "@/db";
import { router, Stack } from "expo-router";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "@/model/Account";

interface AllocationItemProps {
  accounts: Account[];
}

function NewAllocation({ accounts }: AllocationItemProps) {
  const [income, setIncome] = useState("0");

  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  const onSave = async () => {
    if (income) {
      await database.write(async () => {
        await allocationsCollection.create((newAllocation) => {
          newAllocation.income = Number.parseFloat(income);
        });
      });

      setIncome("");
      router.back();
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: "New Allocation" }} />

      <View style={styles.inputRow}>
        <ThemedText type="smallBold" style={styles.label}>
          Income
        </ThemedText>
        <TextInput
          value={income}
          onChangeText={setIncome}
          placeholder="$123"
          style={[
            styles.input,
            { color: colors.text, backgroundColor: colors.background },
          ]}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>

      {accounts.map((account) => (
        <View key={account.id} style={styles.inputRow}>
          <ThemedText style={{ flex: 1 }}>
            {account.name}: {account.cap}%
          </ThemedText>
          <ThemedText>
            ${(Number.parseFloat(income) * account.cap) / 100}
          </ThemedText>
        </View>
      ))}

      <Button title="Save" onPress={onSave} />
    </ThemedView>
  );
}

const onhabce = withObservables([], () => ({
  accounts: accountsCollection.query(),
}));

export default onhabce(NewAllocation);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 10,
    flex: 1,
  },
  label: {
    width: 100,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
