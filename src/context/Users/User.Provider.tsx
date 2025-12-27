import { useState, useEffect } from "react";
import { UserContext } from "./User.Context";
import type {
  CurrentUser,
  UserContextType,
  UserProviderProps,
} from "../../types";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../../utils/Firebase/firebase";
import type { User } from "firebase/auth";

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);

  const value: UserContextType = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) createUserDocumentFromAuth(user);

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
