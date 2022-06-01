import { createContext, useEffect, useState } from "react";
import { api } from "../services/Api";

export const AuthContext = createContext([false, () => {}, () => {}]);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    admin: false,
    isLogged: false,
  });

  const signUp = async (data) =>
    await api.post("/users", data, {
      headers: { "Content-Type": "application/json" },
    });

  const login = async (data) =>
    api
      .post("/auth/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("id", response.data.user_id);
      });

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    setUser({
      name: "",
      email: "",
      admin: false,
      isLogged: false,
    });
  };

  const getUserData = async () => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    return api
      .get("/users/" + id, {
        headers: { Authorization: "bearer " + token },
      })
      .then((response) =>
        setUser({
          name: response.data.name,
          email: response.data.email,
          admin: response.data.isAdmin,
          isLogged: true,
        })
      );
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={[user, logout, login, signUp, getUserData]}>
      {children}
    </AuthContext.Provider>
  );
};
