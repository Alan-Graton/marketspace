import { createStyle } from "@gluestack-style/react";

export const ButtonText = createStyle({
  variants: {
    action: {
      primary: {
        color: "$gray100",
      },
      secondary: {
        color: "$amber400",
      },
      ternary: {
        color: "$amber400",
      },
    },
  },
});
