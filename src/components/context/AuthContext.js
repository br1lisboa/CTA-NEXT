import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false, // Estado inicial: usuario no autenticado
    email: null,
    uid: null,
  });

  const registerUser = async (values) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // No actualizamos logged a true después del registro
    } catch (error) {
      console.error("Error during registration:", error);
      // Aquí puedes manejar errores de registro si es necesario
    }
  };

  const loginUser = async (values) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const user = userCredential.user;

    setUser({
      logged: true,
      email: user.email,
      uid: user.uid,
    });
  };


  const logout = async () => {
    await signOut(auth)
    setUser({
      logged: false,
      email: null,
      uid: null,
    });
  }


  const contextValue = { user, registerUser, loginUser, logout, setUser };


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};



  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log(user)
  //     if (user) {
  //       setUser({
  //         logged: true,
  //         email: user.email,
  //         uid: user.uid
  //       })
  //     }
  //   })
  // }, [])