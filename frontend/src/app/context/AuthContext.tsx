"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { IUser } from "@/app/types/types";

interface AuthContextType {
  user: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    // Llama a la API para obtener datos de usuario al cargar la aplicación
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/user/me", {
        method: "POST",
        credentials: "include", // Envía la cookie automáticamente
      });

      console.log("Respuesta recibida de la API:", response);
      if (response.ok) {
        const data = await response.json();
        setUser(data.payload);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const login = (userData: IUser) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setUser(null);
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
