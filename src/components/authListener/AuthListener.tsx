import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { auth } from "@/firebase/config";
const AuthListener = () => {
  const { logout,setUser } = useAuthContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null
        });
      }
    });

    // Importante: Detener la escucha cuando se desmonte el componente
    return () => unsubscribe();
  }, [logout]);  // Asegúrate de incluir setUser en la dependencia

  return null;  // No necesitas renderizar nada para esta lógica
};

export default AuthListener;