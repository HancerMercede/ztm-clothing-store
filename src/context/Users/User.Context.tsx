import { createContext } from "react";

import { defaultUserValue, type UserContextType } from "../../types/index";

export const UserContext = createContext<UserContextType>(defaultUserValue);
