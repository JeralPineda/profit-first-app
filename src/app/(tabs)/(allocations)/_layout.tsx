import { Stack } from "expo-router";

export default function AllocationsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerLargeTitle: true,
          headerTitle: "Allocations",
        }}
      />
      <Stack.Screen name="new-allocation" />
    </Stack>
  );
}
