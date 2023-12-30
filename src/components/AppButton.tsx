import { Button, ButtonText, Text } from "@gluestack-ui/themed";

type IButtonProps = React.ComponentProps<typeof Button>;

interface Props extends IButtonProps {
  title: string;
  action: "primary" | "secondary" | "ternary";
}

export function AppButton({ title, action = "primary", ...rest }: Props) {
  return (
    <Button w="$full" h="$12" action={action} {...rest}>
      <ButtonText action={action}>{title}</ButtonText>
    </Button>
  );
}
