import React from "react";
import { useAuthContext } from "@/components/context/AuthContext";

import LoginPage from "./@login";


interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { user } = useAuthContext();


  if (user.logged) {
    return children;
  } else {
    return <LoginPage/>;
  }
};

export default AdminLayout;