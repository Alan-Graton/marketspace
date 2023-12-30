import {
  SafeAreaView,
  SafeAreaProviderProps,
} from "react-native-safe-area-context";

interface Props extends SafeAreaProviderProps {
  children: React.ReactNode;
  /** Background Color */
  bg: string;
}

export function AppSafeAreaView({ children, bg, ...rest }: Props) {
  return (
    <SafeAreaView
      style={{ flexGrow: 1, backgroundColor: bg }}
      {...rest}
    >
      {children}
    </SafeAreaView>
  );
}
