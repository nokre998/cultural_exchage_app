// import { MagnifyingGlassIcon, UserIcon, BellIcon } from "@heroicons/react/16/solid"
// import { Link } from "react-router-dom"

// const navItems = [
//   { label: "Home", to: "/home", icon: HomeIcon },
//   { label: "Community", to: "/community", icon: CommunityIcon },
//   { label: "Exchanges", to: "/exchanges", icon: ExchangeIcon },
//   { label: "Events", to: "/events", icon: EventIcon },
//   { label: "Chats", to: "/chats", icon: ChatIcon },
//   { label: "Articles", to: "/articles", icon: ArticleIcon },
//   { label: "Profile", to: "/profile", icon: ProfileIcon },
// ]

// function HomeIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   )
// }

// function CommunityIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M23 21v-2a4 4 0 00-3-3.87" />
//       <path d="M16 3.13a4 4 0 010 7.75" />
//     </svg>
//   )
// }

// function ExchangeIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <polyline points="17 1 21 5 17 9" />
//       <path d="M3 11V9a4 4 0 014-4h14" />
//       <polyline points="7 23 3 19 7 15" />
//       <path d="M21 13v2a4 4 0 01-4 4H3" />
//     </svg>
//   )
// }

// function EventIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//       <line x1="16" y1="2" x2="16" y2="6" />
//       <line x1="8" y1="2" x2="8" y2="6" />
//       <line x1="3" y1="10" x2="21" y2="10" />
//     </svg>
//   )
// }

// function ChatIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
//     </svg>
//   )
// }

// function ArticleIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
//       <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
//     </svg>
//   )
// }

// function ProfileIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   )
// }

// export const Profile = () => {
//   return (
//     <div className="flex min-h-screen flex-col bg-[#f5f2ed] font-serif">
//       <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#e4dfd7] bg-[#f5f2ed] px-7">
//         <div className="flex items-center gap-2.5">
//           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4a6741]">
//             <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="white">
//               <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
//             </svg>
//           </div>
//           <span className="text-[1.15rem] font-bold tracking-[-0.01em] text-[#1e2d1f]">CultureConnect</span>
//         </div>

//         <div className="flex items-center gap-5">
//           <button className="relative p-1 text-[#4a5a4b] transition hover:text-[#1e2d1f]">
//             <MagnifyingGlassIcon className="w-5 h-5"/>
//           </button>

//           <button className="relative p-1 text-[#4a5a4b] transition hover:text-[#1e2d1f]">
//             <UserIcon className="w-5 h-5"/>
//           </button>

//           <button className="relative p-1 text-[#4a5a4b] transition hover:text-[#1e2d1f]">
//             <BellIcon className="w-5 h-5"/>
//           </button>


//     </div>
//     </header>
//           <div className="flex flex-1">
//         <aside className="sticky top-16 flex h-[calc(100vh-64px)] w-60 shrink-0 flex-col justify-between border-r border-[#e4dfd7] bg-[#f5f2ed] py-5 pb-6">
//           <nav className="flex flex-col gap-0.5 px-3">
//             {navItems.map(({ label, to, icon: Icon }) => {
//               const isActive = location.pathname === to

//               return (
//                 <Link
//                   key={label}
//                   to={to}
//                   className={`flex w-full items-center gap-3 rounded-[10px] px-3.5 py-2.5 text-left font-sans text-[0.925rem] transition ${
//                     isActive
//                       ? "bg-[#4a6741] font-semibold text-white"
//                       : "text-[#3a4a3b] hover:bg-[#eae6df]"
//                   }`}
//                 >
//                   <Icon />
//                   {label}
//                 </Link>
//               )
//             })}
//           </nav>
    
//     </div>
    
//   );
// };
import {
  MagnifyingGlassIcon,
  UserIcon,
  BellIcon,
} from "@heroicons/react/16/solid"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  { label: "Home", to: "/home", icon: HomeIcon },
  { label: "Community", to: "/community", icon: CommunityIcon },
  { label: "Exchanges", to: "/exchanges", icon: ExchangeIcon },
  { label: "Events", to: "/events", icon: EventIcon },
  { label: "Chats", to: "/chats", icon: ChatIcon },
  { label: "Articles", to: "/articles", icon: ArticleIcon },
  { label: "Profile", to: "/profile", icon: ProfileIcon },
]

function HomeIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function CommunityIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function ExchangeIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  )
}

function EventIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

function ArticleIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export const Profile = () => {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f2ed] font-serif">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#e4dfd7] bg-[#f5f2ed] px-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4a6741]">
            <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
            </svg>
          </div>
          <span className="text-[1.15rem] font-bold text-[#1e2d1f]">
            CultureConnect
          </span>
        </div>

        <div className="flex items-center gap-5">
          <button className="p-1 text-[#4a5a4b] hover:text-[#1e2d1f]">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <button className="p-1 text-[#4a5a4b] hover:text-[#1e2d1f]">
            <UserIcon className="h-5 w-5" />
          </button>

          <button className="p-1 text-[#4a5a4b] hover:text-[#1e2d1f]">
            <BellIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-60 shrink-0 flex-col justify-between border-r border-[#e4dfd7] bg-[#f5f2ed] py-5 pb-6 md:flex">
          <nav className="flex flex-col gap-0.5 px-3">
            {navItems.map(({ label, to, icon: Icon }) => {
              const isActive = location.pathname === to

              return (
                <Link
                  key={label}
                  to={to}
                  className={`flex w-full items-center gap-3 rounded-[10px] px-3.5 py-2.5 text-left font-sans text-[0.925rem] transition ${
                    isActive
                      ? "bg-[#4a6741] font-semibold text-white"
                      : "text-[#3a4a3b] hover:bg-[#eae6df]"
                  }`}
                >
                  <Icon />
                  {label}
                </Link>
              )
            })}
          </nav>
        </aside>

        <main className="flex-1 px-4 py-6 sm:px-9 lg:px-18">
          <section className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-[#1e2d1f] md:text-4xl">
              Profile
            </h1>
            <div className="grid"></div>
            <h2 className="mb-2 text-3xl font-bold text-[#1e2d1f] md:text-4xl">
              Profile
            </h2>
          </section>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white px-150 py-30 shadow-sm">
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}