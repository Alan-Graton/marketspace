import styled, { css } from "styled-components/native";

import { Dropdown } from "react-native-element-dropdown";

export const DropDownInput = styled(Dropdown)`
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 5px;
  border-radius: 6px;
  width: 150px;
`;
