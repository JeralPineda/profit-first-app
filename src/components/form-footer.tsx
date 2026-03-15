import { Colors } from "@/constants/theme";
import {
  Button,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

export default function FormFooter() {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  const addAccount = () => {
    console.log("Adding account:", name, cap, tap);
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
