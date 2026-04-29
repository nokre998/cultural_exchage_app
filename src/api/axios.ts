import axios from "axios"

const BASE_URL = "http://127.0.0.1:8000"

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const apiClientWithAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

apiClientWithAuth.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")

        if (token && config.headers) {
            config.headers["Authorization"] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)