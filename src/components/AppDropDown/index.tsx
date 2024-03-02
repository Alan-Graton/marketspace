import { Dropdown } from "react-native-element-dropdown";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";

import { useTheme } from "styled-components/native";

interface IProps extends DropdownProps<any> {
  data: Array<{ label: string; value: string }>;
}

export function AppDropDown({ data, ...rest }: IProps) {
  const { FONT_FAMILY } = useTheme();

  return (
    <Dropdown
      data={data}
      fontFamily={FONT_FAMILY.BODY}
      placeholderStyle={{ fontFamily: FONT_FAMILY.BODY }}
      {...rest}
    />
  );
}
