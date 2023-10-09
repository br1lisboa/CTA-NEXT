import LoginForm from "@/components/loginForm/LoginForm"


import AuthListener from "@/components/authListener/AuthListener"
const LoginPage = () => {
    return (
            <div>
                <LoginForm />
                <AuthListener />
            </div>

    )
}


export default LoginPage