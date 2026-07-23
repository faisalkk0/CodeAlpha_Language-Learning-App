import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiHome,
  FiBookOpen,
  FiLayers,
  FiHelpCircle,
  FiZap,
  FiBookmark,
  FiHeart,
  FiUser,
  FiBarChart2,
  FiSettings,
  FiX,
  FiGlobe,
} from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

const links = [
  { to: '/', label: 'Dashboard', icon: FiHome },
  { to: '/lessons', label: 'Lessons', icon: FiBookOpen },
  { to: '/flashcards', label: 'Flashcards', icon: FiLayers },
  { to: '/daily', label: 'Daily Lesson', icon: FiZap },
  { to: '/grammar', label: 'Grammar', icon: FiBookmark },
  { to: '/quiz', label: 'Quiz', icon: FiHelpCircle },
  { to: '/practice', label: 'Practice', icon: FiZap },
  { to: '/favorites', label: 'Favorites', icon: FiHeart },
  { to: '/search', label: 'Search', icon: FiGlobe },
  { to: '/progress', label: 'Progress', icon: FiBarChart2 },
  { to: '/notes', label: 'Notes', icon: FiBookOpen },
  { to: '/profile', label: 'Profile', icon: FiUser },
  { to: '/settings', label: 'Settings', icon: FiSettings },
]

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen, languageMeta, progress, completionPercent } = useLanguage()

  const navContent = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-700">
        <div>
          <p className="text-sm font-extrabold text-slate-800 dark:text-white">Menu</p>
          <p className="text-xs text-slate-500">
            {languageMeta.flag} {languageMeta.name}
          </p>
        </div>
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 lg:hidden dark:hover:bg-slate-800"
        >
          <FiX size={20} />
        </button>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-bold transition ${
                isActive
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-200 p-4 dark:border-slate-700">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">Progress</p>
        <div className="mb-2 flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span>{progress.learnedWords.length} words</span>
          <span>{completionPercent}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-500"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-slate-200 bg-white lg:block dark:border-slate-700 dark:bg-slate-900">
        {navContent}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl lg:hidden dark:bg-slate-900"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            >
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
