import styled, { css } from "styled-components/native";

import { ComponentStyleType } from "@/@types";

interface IconButtonStyleProps {
  variant?: string;
  type: ComponentStyleType;
}

export const Button = styled.TouchableOpacity<IconButtonStyleProps>``;
