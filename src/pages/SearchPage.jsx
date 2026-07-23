import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSearch, FiArrowRight, FiBookOpen, FiBookmark } from 'react-icons/fi'
import { getVocabularyForLanguage } from '../data/vocabulary'
import { getPhrasesForLanguage } from '../data/phrases'
import { grammarLessons } from '../data/grammar'
import { useLanguage } from '../context/LanguageContext'
import SearchBar from '../components/SearchBar'
import { EmptyState } from '../components/AchievementCard'
import { searchFilter } from '../utils/helpers'

export default function SearchPage() {
  const { selectedLanguage, languageMeta } = useLanguage()
  const [query, setQuery] = useState('')

  const searchableItems = useMemo(() => {
    const words = getVocabularyForLanguage(selectedLanguage).map((w) => ({
      id: `word-${w.id}`,
      type: 'word',
      title: w.word,
      subtitle: w.translation,
      meaning: w.meaning,
      category: w.category,
      icon: w.icon,
      link: `/lessons?category=${w.category}`,
      searchFields: { word: w.word, meaning: w.meaning, translation: w.translation, category: w.category },
    }))

    const phraseItems = getPhrasesForLanguage(selectedLanguage).map((p) => ({
      id: `phrase-${p.id}`,
      type: 'phrase',
      title: p.phrase,
      subtitle: p.meaning,
      meaning: p.meaning,
      category: p.category,
      icon: p.icon,
      link: `/lessons?category=${p.category}`,
      searchFields: { word: p.phrase, meaning: p.meaning, translation: p.translation, category: p.category },
    }))

    const grammarItems = grammarLessons.map((g) => ({
      id: `grammar-${g.id}`,
      type: 'grammar',
      title: g.title,
      subtitle: g.topic,
      meaning: g.description,
      category: g.topic,
      icon: '📖',
      link: '/grammar',
      searchFields: { word: g.title, meaning: g.description, translation: g.topic, category: g.topic },
    }))

    return [...words, ...phraseItems, ...grammarItems]
  }, [selectedLanguage])

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchableItems.filter((item) => {
      const filtered = searchFilter([item.searchFields], query, ['word', 'meaning', 'translation', 'category'])
      return filtered.length > 0
    })
  }, [searchableItems, query])

  const typeBadge = {
    word: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    phrase: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
    grammar: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/40">
            <FiSearch className="text-xl text-violet-600 dark:text-violet-400" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Search</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Find words, phrases, and grammar in {languageMeta.flag} {languageMeta.name}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by word, meaning, translation, or category..."
          autoFocus
        />
      </motion.div>

      {!query.trim() ? (
        <EmptyState
          icon="🔍"
          title="Start searching"
          message="Enter a word, meaning, translation, or category to find lessons and content across the app."
        />
      ) : results.length === 0 ? (
        <EmptyState
          icon="😕"
          title="No results found"
          message={`Nothing matched "${query}". Try a different spelling or search term.`}
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
        <div className="space-y-3">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {results.length} result{results.length !== 1 ? 's' : ''}
          </p>
          {results.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <Link
                to={item.link}
                className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xl dark:bg-slate-700">
                  {item.type === 'grammar' ? <FiBookmark /> : item.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-extrabold text-slate-800 dark:text-white">{item.title}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide ${
                        typeBadge[item.type]
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{item.subtitle}</p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">{item.meaning}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm font-bold text-emerald-600 opacity-0 transition group-hover:opacity-100 dark:text-emerald-400">
                  Open <FiArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}

          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-center dark:border-slate-600 dark:bg-slate-800/40">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Want more?{' '}
              <Link to="/lessons" className="font-bold text-emerald-600 hover:underline dark:text-emerald-400">
                <FiBookOpen className="mr-1 inline" size={14} />
                Browse all lessons
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
