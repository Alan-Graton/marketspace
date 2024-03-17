import React from "react";

import { UserDTO } from "@/dtos/User.dto";
import { api } from "@/service/api";

export interface IAuthContext {
  signUp: (user: UserDTO) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  user: UserDTO;
  setUser: React.Dispatch<React.SetStateAction<UserDTO>>;
}

export const AuthContext = React.createContext({} as IAuthContext);

interface IProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: IProps) {
  const [user, setUser] = React.useState<UserDTO>({} as UserDTO);

  async function signUp(user: UserDTO) {
    try {
    } catch (error) {
      console.error("signUp FAILED: ", error);
      throw error;
    } finally {
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("sessions", {
        email: email,
        password: password,
      });

      setUser((prevState) => (prevState = data.user));
    } catch (error) {
      console.error("signIn FAILED: ", error);
      throw error;
    } finally {
    }
  }

  async function signOut() {
    try {
    } catch (error) {
      console.error("signOut FAILED: ", error);
      throw error;
    } finally {
    }
  }

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
