import React from "react";

import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
} from "@gluestack-ui/themed";

import { Eye, EyeClosed } from "phosphor-react-native";

type IInputField = React.ComponentProps<typeof InputField>;

interface Props extends IInputField {
  errorMessage?: string;
  helpMessage?: string;
  isInvalid?: boolean;
}

/**
 * InputSlot && InputIcon não estão funcionando corretamente.
 *
 * Ao pressionar no ícone o state é alterado, porém as props que deveriam ser afetadas
 * pela mudança do state não ocorrem.
 *
 * Talvez para poder arrumar isso será necessário implementar o Design Pattern: Compound Component.
 *
 * Cada tipo de ícone será um {children} do componente pai que poderá ser utilizado ou não
 */
export function AppInput({
  errorMessage,
  helpMessage,
  isInvalid,
  ...rest
}: Props) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <Input
        w="$full"
        h={50}
        my="$2.5"
        bg="$gray100"
        borderWidth={0}
        isInvalid={invalid}
      >
        <InputField p={3} {...rest} />
        <InputSlot
          pr="$3"
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <InputIcon as={!showPassword ? Eye : EyeClosed} size="lg" />
        </InputSlot>
      </Input>
      {errorMessage && (
        <FormControlError>
          <FormControlErrorText>{errorMessage}</FormControlErrorText>
        </FormControlError>
      )}
      {helpMessage && (
        <FormControlHelper>
          <FormControlHelperText>{helpMessage}</FormControlHelperText>
        </FormControlHelper>
      )}
    </FormControl>
  );
}
