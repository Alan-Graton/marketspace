import {
  Input,
  InputField,
  // InputSlot,
  // InputSlot,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
} from "@gluestack-ui/themed";

type IInputField = React.ComponentProps<typeof InputField>;

interface Props extends IInputField {
  errorMessage?: string;
  helpMessage?: string;
  isInvalid?: boolean;
}

export function AppInput({
  errorMessage,
  helpMessage,
  isInvalid,
  ...rest
}: Props) {
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
