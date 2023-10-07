import TablaNoticias from "@/components/tablaDeNoticias/TablaNoticias"
import LogoutButton from "@/components/loginForm/LogoutButton"
import AdminLayout from "./AdminLayout"
import AuthListener from "@/components/authListener/AuthListener";
const Admin: React.FC = () => {
    return (
      <AdminLayout>
        <div className="container m-auto mt-6">
          <h2 className="text-2xl my-10 border-b pb-4">Panel Administración</h2>
          <LogoutButton />
          <TablaNoticias />
        </div>
        <AuthListener />
      </AdminLayout>
    );
  };
  
  export default Admin;
