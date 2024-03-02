import { ViewProps } from "react-native";

import * as S from "./styles";

interface IProps extends ViewProps {
  errorMessage?: string;
  helpMessage?: string;
}

export function AppFormTexts({ errorMessage, helpMessage, ...rest }: IProps) {
  return (
    <>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      {helpMessage && <S.HelpMessage>{helpMessage}</S.HelpMessage>}
    </>
  );
}
