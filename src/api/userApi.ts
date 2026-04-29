import { apiClient } from "./axios"

// 🔥 USER TYPE (то что возвращает backend)
export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  country: string
  bio: string
  avatar_url?: string
}

// 🔥 REGISTER DTO (то что отправляем)
export interface UserCreate {
  first_name: string
  last_name: string
  email: string
  country_id: string
  bio: string
  password: string
  confirm_password: string
}

export interface UserLogin {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  token_type: string
}


export const registerUserApi = async (data: FormData): Promise<User> => {
  const response = await apiClient.post(
    "api/users/register",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )

  return response.data
}

export const loginUserApi = async (
  data: UserLogin
): Promise<LoginResponse> => {
  const response = await apiClient.post(
    "api/users/login",
    data
  )
  return response.data
}