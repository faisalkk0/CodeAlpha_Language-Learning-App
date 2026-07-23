import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiSettings, FiDownload, FiUpload, FiTrash2, FiRefreshCw, FiSun, FiMoon } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { downloadJSON } from '../utils/helpers'

export default function Settings() {
  const {
    languages,
    selectedLanguage,
    setSelectedLanguage,
    profile,
    updateProfile,
    resetProgress,
    clearFavorites,
    exportData,
    importData,
  } = useLanguage()

  const { theme, setTheme } = useTheme()
  const fileInputRef = useRef(null)
  const [username, setUsername] = useState(profile.username)

  const handleResetProgress = () => {
    if (window.confirm('Reset all learning progress? This cannot be undone.')) {
      resetProgress()
    }
  }

  const handleClearFavorites = () => {
    if (window.confirm('Clear all favorite words? This cannot be undone.')) {
      clearFavorites()
    }
  }

  const handleExport = () => {
    const data = exportData()
    const filename = `language-learning-backup-${new Date().toISOString().slice(0, 10)}.json`
    downloadJSON(filename, data)
    toast.success('Learning data exported!')
  }

  const handleImport = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result)
        importData(data)
      } catch {
        toast.error('Invalid JSON file. Please check the file and try again.')
      }
    }
    reader.onerror = () => toast.error('Failed to read file')
    reader.readAsText(file)
    e.target.value = ''
  }

  const handleSaveUsername = () => {
    const trimmed = username.trim() || 'Learner'
    updateProfile({ username: trimmed })
    setUsername(trimmed)
    toast.success('Username updated!')
  }

  const sectionClass =
    'rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800'

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700">
            <FiSettings className="text-xl text-slate-600 dark:text-slate-300" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Settings</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Customize your learning experience
            </p>
          </div>
        </div>
      </motion.div>

      {/* Profile */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className={sectionClass}>
        <h2 className="mb-4 text-base font-extrabold text-slate-800 dark:text-white">Profile</h2>
        <label className="mb-2 block text-sm font-bold text-slate-600 dark:text-slate-300">Username</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={30}
            className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-emerald-900/40"
          />
          <button
            type="button"
            onClick={handleSaveUsername}
            className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600"
          >
            Save
          </button>
        </div>
      </motion.div>

      {/* Language */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={sectionClass}>
        <h2 className="mb-4 text-base font-extrabold text-slate-800 dark:text-white">Learning Language</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((lang) => (
            <button
              key={lang.id}
              type="button"
              onClick={() => setSelectedLanguage(lang.id)}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                selectedLanguage === lang.id
                  ? 'border-emerald-400 bg-emerald-50 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-200'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-200 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-emerald-700'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div>
                <p>{lang.name}</p>
                <p className="text-xs font-semibold opacity-70">{lang.nativeName}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Theme */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className={sectionClass}>
        <h2 className="mb-4 text-base font-extrabold text-slate-800 dark:text-white">Appearance</h2>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setTheme('light')}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition ${
              theme === 'light'
                ? 'border-emerald-400 bg-emerald-50 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-200'
                : 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-300'
            }`}
          >
            <FiSun size={18} />
            Light
          </button>
          <button
            type="button"
            onClick={() => setTheme('dark')}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition ${
              theme === 'dark'
                ? 'border-emerald-400 bg-emerald-50 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-200'
                : 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-300'
            }`}
          >
            <FiMoon size={18} />
            Dark
          </button>
        </div>
      </motion.div>

      {/* Data management */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={sectionClass}>
        <h2 className="mb-4 text-base font-extrabold text-slate-800 dark:text-white">Data Management</h2>
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleExport}
            className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-emerald-900/20"
          >
            <FiDownload className="text-emerald-600 dark:text-emerald-400" size={18} />
            <div>
              <p>Export Learning Data</p>
              <p className="text-xs font-semibold text-slate-400">Download a JSON backup file</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:bg-emerald-900/20"
          >
            <FiUpload className="text-sky-600 dark:text-sky-400" size={18} />
            <div>
              <p>Import Learning Data</p>
              <p className="text-xs font-semibold text-slate-400">Restore from a JSON backup</p>
            </div>
          </button>
          <input ref={fileInputRef} type="file" accept=".json,application/json" className="hidden" onChange={handleImport} />

          <button
            type="button"
            onClick={handleClearFavorites}
            className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-bold text-slate-700 transition hover:border-amber-200 hover:bg-amber-50 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:border-amber-700 dark:hover:bg-amber-900/20"
          >
            <FiTrash2 className="text-amber-600 dark:text-amber-400" size={18} />
            <div>
              <p>Clear Favorites</p>
              <p className="text-xs font-semibold text-slate-400">Remove all saved favorite words</p>
            </div>
          </button>

          <button
            type="button"
            onClick={handleResetProgress}
            className="flex w-full items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-left text-sm font-bold text-rose-700 transition hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-900/20 dark:text-rose-300 dark:hover:bg-rose-900/40"
          >
            <FiRefreshCw size={18} />
            <div>
              <p>Reset Progress</p>
              <p className="text-xs font-semibold text-rose-400">Clear all learned words, lessons, and quiz scores</p>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
