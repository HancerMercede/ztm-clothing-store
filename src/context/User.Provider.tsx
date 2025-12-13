import { useState } from "react";
import { UserContext } from "./User.Context";
import type { CurrentUser, UserContextType, UserProviderProps } from "../types";

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);
  const value: UserContextType = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
