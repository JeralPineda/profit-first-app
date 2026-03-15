import { Colors } from "@/constants/theme";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useColorScheme } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // ✅ Import específico
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{
        selected: { color: colors.primary },
        default: { color: colors.text },
      }}
      iconColor={{
        default: colors.text, // color inactivo
        selected: colors.primary, // color activo (azul)
      }}
    >
      <NativeTabs.Trigger name="(allocations)">
        <NativeTabs.Trigger.Label>Allocations</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={
            <NativeTabs.Trigger.VectorIcon
              family={MaterialIcons}
              name="account-balance-wallet"
            />
          }
          renderingMode="original"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="accounts">
        <NativeTabs.Trigger.Label>Accounts</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={
            <NativeTabs.Trigger.VectorIcon
              family={MaterialIcons}
              name="account-tree"
            />
          }
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
