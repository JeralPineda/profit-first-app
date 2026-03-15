import { Stack } from "expo-router";

export default function AccountLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerLargeTitle: true,

          headerTitle: "Accounts",
        }}
      />
    </Stack>
  );
}
