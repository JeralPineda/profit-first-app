import AllocationsList from "@/components/allocations-list";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { mySync } from "@/db/sync";
import * as Crypto from "expo-crypto";
import { supabase } from "@/lib/supabase";

export default function Allocations() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  const insets = useSafeAreaInsets();

  const onRefresh = () => {};

  const test = async () => {
    const res = await supabase.rpc("create_account", {
      _id: Crypto.randomUUID(),
      _user_id: Crypto.randomUUID(), // Replace 'uuid-string-here' with a valid UUID
      _name: "Example Name", // Replace 'Example Name' with the actual account name
      _cap: 1000.0, // Set a numeric value for the cap
      _tap: 500.0, // Set a numeric value for the tap
      _created_at: new Date().toISOString(), // Current date-time in ISO string format
      _updated_at: new Date().toISOString(), // Current date-time in ISO string format
    });
    console.log(res);
  };

  return (
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <ThemedText type="subtitle">Allocations</ThemedText>

        <Pressable
          onPress={mySync}
          style={({ pressed }) => [
            styles.refreshButton,
            {
              backgroundColor: colors.background,
              opacity: pressed ? 0.5 : 1,
            },
          ]}
        >
          <Feather name="refresh-cw" size={24} color={colors.text} />
        </Pressable>

        {/* <Pressable */}
        {/*   onPress={test} */}
        {/*   style={({ pressed }) => [ */}
        {/*     styles.refreshButton, */}
        {/*     { */}
        {/*       backgroundColor: colors.background, */}
        {/*       opacity: pressed ? 0.5 : 1, */}
        {/*     }, */}
        {/*   ]} */}
        {/* > */}
        {/*   <Feather name="repeat" size={24} color={colors.text} /> */}
        {/* </Pressable> */}
      </View>

      <Pressable
        onPress={() => router.push("/new-allocation")}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.primary, opacity: pressed ? 0.5 : 1 },
        ]}
      >
        <ThemedText style={styles.textButton}>New Allocation</ThemedText>
        <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
      </Pressable>

      <AllocationsList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  refreshButton: {
    padding: 10,
    borderRadius: 100,
  },
  button: {
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
});
