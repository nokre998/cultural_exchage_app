import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../components/auth/login/Login"
import { RegisterPage } from "../components/auth/register/Register"
import { HomePage } from "../components/home/Home"
import { Profile } from "../components/profile/Profile"

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },

  // ✅ ВОТ ЭТОГО НЕ ХВАТАЛО
  { path: "/home", element: <HomePage /> },

  { path: "/profile", element: <Profile /> },
])