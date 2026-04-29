import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useUserStore } from "../../../store/userStore"
import type { UserCreate } from "../../../api/userApi"

export const RegisterPage = () => {
  const navigate = useNavigate()
  const { registerUser, loading } = useUserStore()
    // const { registerUser, loading, userRegistered } = useUserStore()

  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)


  const [form, setForm] = useState<UserCreate>({
    first_name: "",
    last_name: "",
    email: "",
    country_id: "",
    bio: "",
    password: "",
    confirm_password: "",
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      setAvatarFile(file)
      setAvatarPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (form.password !== form.confirm_password) {
      alert("Passwords do not match")
      return
    }

  await registerUser({
    ...form,
    avatar: avatarFile ?? undefined,
  })

    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-[#f6f3ed] px-4 py-10 md:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[760px] flex-col items-center justify-center">

        <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#6f8b68] shadow-sm">
          <span className="text-[28px] text-white">✦</span>
        </div>

        <h1 className="text-center font-serif text-[42px] leading-tight text-[#1f1d1a] md:text-[56px]">
          Join CultureConnect
        </h1>

        <p className="mt-3 text-center text-[18px] text-[#6f6a63] md:text-[20px]">
          Start your journey of cultural exchange
        </p>

        {/* FORM CARD */}
        <div className="mt-10 w-full rounded-[28px] border border-[#e4ddd3] bg-[#f8f6f2] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] md:p-9">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* AVATAR */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[#ddd6cc] bg-white">
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm text-[#9a938b]">No photo</span>
                )}
              </div>

              <label className="cursor-pointer rounded-[14px] border border-[#d9d2c8] bg-white px-4 py-2 text-[15px] text-[#3d3a36]">
                Upload avatar
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                placeholder="First Name"
                className="h-[58px] rounded-[18px] border border-[#e2ddd6] bg-white px-5"
              />

              <input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                className="h-[58px] rounded-[18px] border border-[#e2ddd6] bg-white px-5"
              />
            </div>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="h-[58px] w-full rounded-[18px] border border-[#e2ddd6] bg-white px-5"
            />

            <select
              name="country_id"
              value={form.country_id}
              onChange={handleChange}
            >
              <option value="">Select country</option>
              <option value="1">Kazakhstan</option>
              <option value="2">USA</option>
              <option value="3">China</option>
              <option value="4">Germany</option>
            </select>

            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-[18px] border border-[#e2ddd6] bg-white px-5 py-4 resize-none"
              placeholder="Tell about yourself"
            />

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="h-[58px] w-full rounded-[18px] border border-[#e2ddd6] bg-white px-5"
            />

            <input
              name="confirm_password"
              type="password"
              value={form.confirm_password}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="h-[58px] w-full rounded-[18px] border border-[#e2ddd6] bg-white px-5"
            />

            <button
              type="submit"
              disabled={loading}
              className="h-[60px] w-full rounded-[18px] bg-[#6f8b68] text-white"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

            <p className="text-center text-[17px] text-[#665f58]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#587353]">
                Sign in
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}