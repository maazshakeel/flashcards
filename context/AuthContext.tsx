"use client";

import { createContext, FC, ReactNode } from "react";
import { useState } from "react";

// Define the types for your authentication data
interface AuthContextValue {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
}

const initialValue = {
  authenticated: false,
  setAuthenticated: () => {},
};

// Create the context
const AuthContext = createContext<AuthContextValue>(initialValue);

// Create the provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated,
  );

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
