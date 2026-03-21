import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);

  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  async function signInWithEmail() {
    setLoading(true);
    console.log({ email, password });
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoadingSignUp(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoadingSignUp(false);
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedText type="subtitle">Login</ThemedText>

      <View style={[styles.verticallySpaced]}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          style={[styles.input, { backgroundColor: colors.backgroundElement }]}
        />

        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
          style={[styles.input, { backgroundColor: colors.backgroundElement }]}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => signInWithEmail()}
          disabled={loading}
          style={[styles.button, { backgroundColor: colors.primary }]}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: "white" }}>Sign In</Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => signUpWithEmail()}
          disabled={loadingSignUp}
          style={[styles.button, { backgroundColor: colors.primary }]}
        >
          {loadingSignUp ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: "white" }}>Sign Up</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verticallySpaced: {
    gap: 10,
    width: "100%",
    marginVertical: 15,
  },
  input: {
    // borderWidth: 1,
    padding: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    gap: 10,
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
});
