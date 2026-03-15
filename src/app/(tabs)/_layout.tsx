import AppTabs from "@/components/app-tabs";

export const unstable_settings = {
  initialRouteName: "(allocations)/index", // siempre carga index primero
};

export default function RootLayout() {
  return <AppTabs />;
}
