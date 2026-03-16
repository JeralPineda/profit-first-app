import { Colors } from "@/constants/theme";
import { accountsCollection } from "@/db";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

export default function FormFooter() {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  const addAccount = () => {
    console.log("Adding account:", name, cap, tap);
  };

  const onRead = async () => {
    const accounts = await accountsCollection.query().fetch();

    console.log("🚀 form-footer.tsx -> #31 ~ accounts:", accounts);

    // await database.write(async () => {
    //   await accountsCollection.create((account) => {
    //     account.name = "Test";
    //     account.cap = 10.5;
    //     account.tap = 10.5;
    //   });
    // });
  };

  return (
    <View>
      <View style={[styles.inputRow, { backgroundColor: colors.background }]}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { color: colors.text }]}
        />
        <TextInput
          value={cap}
          onChangeText={setCap}
          placeholder="CAP"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { color: colors.text }]}
        />
        <TextInput
          value={tap}
          onChangeText={setTap}
          placeholder="TAP"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { color: colors.text }]}
        />
        <Entypo name="check" size={20} color="green" />
      </View>

      <Button title="Add Account" onPress={addAccount} />

      <Button title="Read" onPress={onRead} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
});
