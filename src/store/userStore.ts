import { create } from "zustand"
import {
  registerUserApi,
  loginUserApi,
  type UserCreate,
  type UserLogin,
  type User,
} from "../api/userApi"

interface UserStore {
  loading: boolean
  userRegistered: boolean
  userLogined: boolean
  user?: User
  error: string | null

  registerUser: (data: UserCreate & { avatar?: File }) => Promise<void>
  loginUser: (data: UserLogin) => Promise<boolean>
  logoutUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  loading: false,
  userRegistered: false,
  userLogined: !!localStorage.getItem("token"),
  user: undefined,
  error: null,

  registerUser: async (payload) => {
    set({ loading: true, userRegistered: false, error: null })

    try {
      const formData = new FormData()

      formData.append("first_name", payload.first_name)
      formData.append("last_name", payload.last_name)
      formData.append("email", payload.email)
      formData.append("country_id", String(payload.country_id))
      formData.append("password", payload.password)
      formData.append("confirm_password", payload.confirm_password)

      if (payload.bio) {
        formData.append("bio", payload.bio)
      }

      if (payload.avatar) {
        formData.append("avatar", payload.avatar)
      }

      const res = await registerUserApi(formData)

      set({
        userRegistered: true,
        user: res,
        error: null,
      })
    } catch (error) {
      console.error(error)
      set({
        userRegistered: false,
        error: "Ошибка регистрации",
      })
    } finally {
      set({ loading: false })
    }
  },

  loginUser: async (data) => {
    set({ loading: true, error: null })

    try {
      const res = await loginUserApi(data)

      localStorage.setItem("token", res.access_token)

      set({
        userLogined: true,
        error: null,
      })

      return true
    } catch (error) {
      console.error("LOGIN ERROR:", error)

      set({
        userLogined: false,
        error: "Неверный email или пароль",
      })

      return false
    } finally {
      set({ loading: false })
    }
  },

  logoutUser: () => {
    localStorage.removeItem("token")

    set({
      userLogined: false,
      userRegistered: false,
      user: undefined,
      error: null,
    })
  },
}))