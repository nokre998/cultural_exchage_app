import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUserStore } from "../../../store/userStore"
import type { UserLogin } from "../../../api/userApi"

export const LoginPage = () => {
  const navigate = useNavigate()
  const { loginUser, loading, error } = useUserStore()

  const [loginForm, setLoginForm] = useState<UserLogin>({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const success = await loginUser(loginForm)

    if (success) {
      navigate("/home")
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-[560px] flex-col items-center justify-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#668463] shadow-sm sm:h-20 sm:w-20">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-white sm:h-8 sm:w-8"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2.8l1.42 4.78L18.2 9l-4.78 1.42L12 15.2l-1.42-4.78L5.8 9l4.78-1.42L12 2.8z" />
          </svg>
        </div>

        <h1 className="text-center font-serif text-4xl leading-tight text-[#34251E] sm:text-5xl">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-base leading-7 text-[#6F665E] sm:text-lg">
          Sign in to continue your cultural journey
        </p>

        <div className="mt-8 w-full rounded-[24px] border border-[#E8E2DB] bg-[#FCFBF9] px-5 py-7 shadow-sm sm:mt-10 sm:rounded-[28px] sm:px-10 sm:py-10">
          {error && (
            <div className="mb-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#2E241F] sm:text-[15px]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={loginForm.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="h-14 w-full rounded-2xl border border-[#E6E0D8] bg-white px-4 text-base text-[#2E241F] placeholder:text-[#B0A79F] outline-none transition focus:border-[#9CAF91] focus:ring-2 focus:ring-[#9CAF91]/20 sm:h-[58px] sm:px-5"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#2E241F] sm:text-[15px]"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={loginForm.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="h-14 w-full rounded-2xl border border-[#E6E0D8] bg-white px-4 text-base text-[#2E241F] placeholder:text-[#B0A79F] outline-none transition focus:border-[#9CAF91] focus:ring-2 focus:ring-[#9CAF91]/20 sm:h-[58px] sm:px-5"
              />
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-3 text-sm text-[#2E241F] sm:text-[15px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border border-[#BEB6AE] accent-[#668463]"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="text-left text-sm text-[#6E8771] transition hover:text-[#5d745f] sm:text-[15px]"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-14 w-full rounded-full bg-[#668463] text-base font-medium text-white transition hover:bg-[#587558] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[68px] sm:text-lg"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <div className="flex items-center gap-4 pt-1">
              <div className="h-px flex-1 bg-[#E2DBD3]" />
              <span className="shrink-0 text-sm text-[#7C726A] sm:text-[15px]">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-[#E2DBD3]" />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <button
                type="button"
                className="flex h-14 items-center justify-center rounded-2xl border border-[#E6E0D8] bg-white text-base font-medium text-[#2F241E] transition hover:bg-[#F6F3EE] sm:h-[62px] sm:text-lg"
              >
                Google
              </button>

              <button
                type="button"
                className="flex h-14 items-center justify-center rounded-2xl border border-[#E6E0D8] bg-white text-base font-medium text-[#2F241E] transition hover:bg-[#F6F3EE] sm:h-[62px] sm:text-lg"
              >
                Facebook
              </button>
            </div>

            <p className="pt-1 text-center text-sm text-[#6F665E] sm:text-base">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-[#668463] hover:text-[#587558]"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}