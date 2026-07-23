import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiChevronDown, FiChevronUp, FiBookOpen } from 'react-icons/fi'
import { grammarTopics, grammarLessons } from '../data/grammar'
import { useLanguage } from '../context/LanguageContext'

const difficultyColors = {
  beginner: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  advanced: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
}

export default function Grammar() {
  const { selectedLanguage, progress, markGrammarCompleted } = useLanguage()
  const [activeTopic, setActiveTopic] = useState('all')
  const [expandedId, setExpandedId] = useState(null)

  const filteredLessons = useMemo(() => {
    if (activeTopic === 'all') return grammarLessons
    return grammarLessons.filter((lesson) => lesson.topic === activeTopic)
  }, [activeTopic])

  const topicCounts = useMemo(() => {
    const counts = {}
    grammarTopics.forEach((t) => {
      counts[t.name] = grammarLessons.filter((l) => l.topic === t.name).length
    })
    return counts
  }, [])

  const completedCount = progress.completedGrammar.length

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const isCompleted = (id) => progress.completedGrammar.includes(id)

  const langExamples = (lesson) => {
    const match = lesson.examples.filter((ex) => ex.language === selectedLanguage)
    return match.length ? match : lesson.examples
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl dark:bg-emerald-900/40">
            <FiBookOpen className="text-emerald-600 dark:text-emerald-400" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Grammar</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Master {grammarLessons.length} lessons across {grammarTopics.length} topics ·{' '}
              {completedCount} completed
            </p>
          </div>
        </div>
      </motion.div>

      {/* Topic filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="flex flex-wrap gap-2"
      >
        <button
          type="button"
          onClick={() => setActiveTopic('all')}
          className={`rounded-2xl px-4 py-2 text-sm font-bold transition ${
            activeTopic === 'all'
              ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
        >
          All ({grammarLessons.length})
        </button>
        {grammarTopics.map((topic) => (
          <button
            key={topic.name}
            type="button"
            onClick={() => setActiveTopic(topic.name)}
            className={`inline-flex items-center gap-1.5 rounded-2xl px-4 py-2 text-sm font-bold transition ${
              activeTopic === topic.name
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <span>{topic.icon}</span>
            {topic.name}
            <span className="opacity-70">({topicCounts[topic.name]})</span>
          </button>
        ))}
      </motion.div>

      {/* Lessons list */}
      <div className="space-y-3">
        {filteredLessons.map((lesson, index) => {
          const expanded = expandedId === lesson.id
          const done = isCompleted(lesson.id)
          const examples = langExamples(lesson)

          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className={`overflow-hidden rounded-3xl border bg-white shadow-sm dark:bg-slate-800 ${
                done
                  ? 'border-emerald-200 dark:border-emerald-800'
                  : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleExpand(lesson.id)}
                className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-slate-50 dark:hover:bg-slate-700/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-lg dark:bg-slate-700">
                  {grammarTopics.find((t) => t.name === lesson.topic)?.icon || '📖'}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-extrabold text-slate-800 dark:text-white">{lesson.title}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide ${
                        difficultyColors[lesson.difficulty] || difficultyColors.beginner
                      }`}
                    >
                      {lesson.difficulty}
                    </span>
                    {done && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold uppercase text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <FiCheck size={10} /> Done
                      </span>
                    )}
                  </div>
                  <p className="truncate text-sm text-slate-500 dark:text-slate-400">{lesson.description}</p>
                  <p className="mt-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">{lesson.topic}</p>
                </div>
                <span className="shrink-0 text-slate-400">
                  {expanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 border-t border-slate-100 px-5 pb-5 pt-4 dark:border-slate-700">
                      <div>
                        <h4 className="mb-2 text-sm font-extrabold text-slate-700 dark:text-slate-200">Explanation</h4>
                        <div className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {lesson.explanation.split('\n\n').map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 text-sm font-extrabold text-slate-700 dark:text-slate-200">Examples</h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {examples.map((ex, i) => (
                            <div
                              key={i}
                              className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-900/50"
                            >
                              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">
                                {ex.language}
                              </p>
                              <p className="font-bold text-slate-800 dark:text-white">{ex.sentence}</p>
                              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{ex.translation}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
                        <p className="mb-1 text-xs font-extrabold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                          💡 Tip
                        </p>
                        <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">{lesson.tip}</p>
                      </div>

                      {!done && (
                        <button
                          type="button"
                          onClick={() => markGrammarCompleted(lesson.id)}
                          className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
                        >
                          <FiCheck size={16} />
                          Mark as Completed
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
