import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiMoon, FiSun, FiSearch } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar({ onSearchFocus }) {
  const { theme, toggleTheme } = useTheme()
  const { languageMeta, progress, setSidebarOpen, profile } = useLanguage()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <FiMenu size={22} />
          </button>

          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-extrabold text-white shadow-md shadow-emerald-500/30">
              L
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-extrabold leading-tight text-slate-800 dark:text-white">
                Language Learning
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Build fluency daily</p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { to: '/', label: 'Home' },
            { to: '/lessons', label: 'Lessons' },
            { to: '/quiz', label: 'Quiz' },
            { to: '/progress', label: 'Progress' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-xl px-3 py-2 text-sm font-bold transition ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={onSearchFocus}
            className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <FiSearch size={20} />
          </button>

          <motion.button
            type="button"
            aria-label="Toggle theme"
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          <div className="hidden items-center gap-2 rounded-2xl bg-slate-100 px-3 py-1.5 sm:flex dark:bg-slate-800">
            <span className="text-lg">{languageMeta.flag}</span>
            <div>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{languageMeta.name}</p>
              <p className="text-[10px] font-semibold text-orange-500">🔥 {progress.streak} day streak</p>
            </div>
          </div>

          <Link
            to="/profile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-sm font-extrabold text-white shadow-sm"
            title={profile.username}
          >
            {profile.username?.charAt(0)?.toUpperCase() || 'L'}
          </Link>
        </div>
      </div>
    </header>
  )
}
