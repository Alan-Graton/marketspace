import React from "react";

export const AuthContext = React.createContext({});

interface IProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: IProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
