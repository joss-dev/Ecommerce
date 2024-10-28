"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { IUser } from "@/app/types/User";

interface AuthContextType {
  user: IUser | null;  // Cambiado a IUser | null
  token: string | null;
  login: (userData: IUser, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null); 
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Verificar si hay un token en el localStorage
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      console.log(savedToken)
      fetchUserData(savedToken)
    }
  }, []);

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch("http://localhost:8081/api/user/me", { // Cambia la URL según tu API
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("estamos aca beby");
        setUser(data.payload); // Ajusta según la estructura de tu respuesta
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const login = (userData: IUser, token: string) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem("token", token); // Almacena el token
  };

  const logout = () => {
    setUser(null); // Cambiado a null para indicar que no hay usuario
    setToken(null);
    localStorage.removeItem("token"); // Elimina el token
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
