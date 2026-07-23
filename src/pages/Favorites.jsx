import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHeart, FiVolume2, FiTrash2, FiBookOpen } from 'react-icons/fi'
import { getVocabularyForLanguage } from '../data/vocabulary'
import { useLanguage } from '../context/LanguageContext'
import SearchBar from '../components/SearchBar'
import { EmptyState } from '../components/AchievementCard'
import { searchFilter } from '../utils/helpers'
import { speak } from '../utils/speech'

export default function Favorites() {
  const { selectedLanguage, languageMeta, favorites, toggleFavorite, isLearned } = useLanguage()
  const [query, setQuery] = useState('')

  const favoriteWords = useMemo(() => {
    const all = getVocabularyForLanguage(selectedLanguage)
    return all.filter((word) => favorites.includes(word.id))
  }, [selectedLanguage, favorites])

  const filtered = useMemo(
    () => searchFilter(favoriteWords, query, ['word', 'translation', 'meaning', 'category']),
    [favoriteWords, query]
  )

  const handleSpeak = (text) => {
    speak(text, languageMeta.speechCode)
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-2xl dark:bg-rose-900/40">
            <FiHeart className="text-rose-500" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Favorites</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {favoriteWords.length} saved word{favoriteWords.length !== 1 ? 's' : ''} in {languageMeta.name}
            </p>
          </div>
        </div>
      </motion.div>

      {favoriteWords.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search your favorites..."
          />
        </motion.div>
      )}

      {favoriteWords.length === 0 ? (
        <EmptyState
          icon="💔"
          title="No favorites yet"
          message="Tap the heart icon on any word while studying to save it here for quick review."
          action={
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
            >
              <FiBookOpen size={16} />
              Browse Lessons
            </Link>
          }
        />
      ) : filtered.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="No matches found"
          message={`Nothing matched "${query}". Try a different search term.`}
          action={
            <button
              type="button"
              onClick={() => setQuery('')}
              className="rounded-2xl bg-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            >
              Clear search
            </button>
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((word, index) => (
            <motion.div
              key={word.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-3 flex items-start justify-between">
                <span className="text-2xl">{word.icon}</span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    aria-label="Pronounce word"
                    onClick={() => handleSpeak(word.word)}
                    className="rounded-xl p-2 text-slate-400 transition hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400"
                  >
                    <FiVolume2 size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="Remove from favorites"
                    onClick={() => toggleFavorite(word.id)}
                    className="rounded-xl p-2 text-rose-400 transition hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/30"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>

              <h3 className="mb-0.5 text-lg font-extrabold text-slate-800 dark:text-white">{word.word}</h3>
              <p className="mb-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">{word.translation}</p>
              <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">{word.pronunciation}</p>
              <p className="mb-3 flex-1 text-sm text-slate-600 dark:text-slate-300">{word.meaning}</p>

              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                  {word.category}
                </span>
                {isLearned(word.id) && (
                  <span className="text-[10px] font-extrabold uppercase text-emerald-600 dark:text-emerald-400">
                    ✓ Learned
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
