import * as Haptics from "expo-haptics";
import { Pressable } from "react-native";

export function HapticTab(props: any) {
  const { children, onPressIn, ...rest } = props;

  return (
    <Pressable
      {...rest}
      onPressIn={(event) => {
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPressIn?.(event);
      }}
    >
      {children}
    </Pressable>
  );
}
