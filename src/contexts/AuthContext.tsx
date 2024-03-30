"use client";

import { CurrentUser } from "@/lib/supabase/currentUser";
import { createContext } from "react";

export interface IAuthContext {
  user: CurrentUser | undefined;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
});

export const AuthContextProvider = ({
  value,
  children,
}: {
  value: IAuthContext;
  children: JSX.Element;
}) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
