import { useAuthContext } from "../context/AuthContext"
import { Boton } from "../boton/Boton"

const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <Boton type="button" onClick={logout} className="bg-red-500">Cerrar sesión</Boton>
}

export default LogoutButton