import { createContext } from "react";

export const AccessContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
});
