import { Center, Spinner } from "@gluestack-ui/themed";

type CenterProps = React.ComponentProps<typeof Center>;

interface Props extends CenterProps {
  loading?: boolean;
}

export function AppLoader({ loading = true, ...rest }: Props) {
  return (
    <>
      {loading && (
        <Center flex={1} bg="$gray200">
          <Spinner color="$blue" size="large" {...rest} />
        </Center>
      )}
    </>
  );
}
