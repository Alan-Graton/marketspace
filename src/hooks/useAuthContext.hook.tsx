import React from "react";

import { AuthContext, IAuthContext } from "@/contexts/Auth.context";

export function useAuthContext(): IAuthContext {
  const context = React.useContext(AuthContext);

  return context;
}
