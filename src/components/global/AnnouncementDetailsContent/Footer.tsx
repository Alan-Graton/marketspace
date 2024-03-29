import React from "react";

interface Props {
  children: React.JSX.Element;
}

export function Footer({ children }: Props) {
  return <>{children}</>;
}
