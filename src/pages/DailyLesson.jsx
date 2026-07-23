import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiCheck, FiVolume2, FiZap, FiAward } from 'react-icons/fi'
import { getVocabularyForLanguage } from '../data/vocabulary'
import { getPhrasesForLanguage } from '../data/phrases'
import { grammarLessons } from '../data/grammar'
import { useLanguage } from '../context/LanguageContext'
import { todayKey, dailySeed, seededPick } from '../utils/helpers'
import { speak } from '../utils/speech'

export default function DailyLesson() {
  const {
    selectedLanguage,
    languageMeta,
    progress,
    completeDailyLesson,
    markWordLearned,
    isLearned,
  } = useLanguage()

  const today = todayKey()
  const seed = dailySeed(today)
  const alreadyCompleted = progress.dailyLessonCompleted === today

  const dailyContent = useMemo(() => {
    const allWords = getVocabularyForLanguage(selectedLanguage)
    const unlearned = allWords.filter((w) => !progress.learnedWords.includes(w.id))
    const wordPool = unlearned.length >= 5 ? unlearned : allWords
    const words = seededPick(wordPool, 5, seed)

    const allPhrases = getPhrasesForLanguage(selectedLanguage)
    const dailyPhrases = seededPick(allPhrases, 3, seed + 100)

    const grammarTip = seededPick(grammarLessons, 1, seed + 200)[0]

    const challengeWord = seededPick(words, 1, seed + 300)[0]

    return { words, phrases: dailyPhrases, grammarTip, challengeWord }
  }, [selectedLanguage, today, progress.learnedWords, seed])

  const [challengeAnswer, setChallengeAnswer] = useState('')
  const [challengeDone, setChallengeDone] = useState(false)

  const handleSpeak = (text) => {
    speak(text, languageMeta.speechCode)
  }

  const checkChallenge = () => {
    const normalized = challengeAnswer.trim().toLowerCase()
    const correct = dailyContent.challengeWord.translation.toLowerCase()
    if (normalized === correct) {
      setChallengeDone(true)
      toast.success('Correct! Great job!')
    } else {
      toast.error(`Not quite. The answer is "${dailyContent.challengeWord.translation}"`)
    }
  }

  const handleComplete = () => {
    dailyContent.words.forEach((word) => {
      if (!isLearned(word.id)) markWordLearned(word.id)
    })
    completeDailyLesson()
  }

  if (alreadyCompleted) {
    return (
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/40">
              <FiZap className="text-xl text-emerald-600 dark:text-emerald-400" />
            </span>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Daily Lesson</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">{today} · {languageMeta.flag} {languageMeta.name}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-16 text-center dark:border-emerald-800 dark:bg-emerald-900/20"
        >
          <span className="mb-4 text-5xl">🎉</span>
          <h2 className="mb-2 text-xl font-extrabold text-emerald-800 dark:text-emerald-200">
            Daily Lesson Complete!
          </h2>
          <p className="max-w-md text-sm text-emerald-700 dark:text-emerald-300">
            You&apos;ve finished today&apos;s lesson. Come back tomorrow for a fresh set of words, phrases, and a grammar tip.
          </p>
          <p className="mt-4 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            🔥 Keep your streak going!
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/40">
            <FiZap className="text-xl text-emerald-600 dark:text-emerald-400" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Daily Lesson</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {today} · 5 words · 3 phrases · 1 grammar tip · {languageMeta.flag} {languageMeta.name}
            </p>
          </div>
        </div>
      </motion.div>

      {/* New words */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <h2 className="mb-4 flex items-center gap-2 text-base font-extrabold text-slate-800 dark:text-white">
          📚 Today&apos;s Words
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dailyContent.words.map((word) => (
            <div
              key={word.id}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-900/50"
            >
              <div className="mb-2 flex items-start justify-between">
                <span className="text-xl">{word.icon}</span>
                <button
                  type="button"
                  aria-label={`Pronounce ${word.word}`}
                  onClick={() => handleSpeak(word.word)}
                  className="rounded-lg p-1.5 text-slate-400 transition hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400"
                >
                  <FiVolume2 size={16} />
                </button>
              </div>
              <p className="font-extrabold text-slate-800 dark:text-white">{word.word}</p>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{word.translation}</p>
              <p className="mt-1 text-xs text-slate-500">{word.pronunciation}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Phrases */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <h2 className="mb-4 flex items-center gap-2 text-base font-extrabold text-slate-800 dark:text-white">
          💬 Common Phrases
        </h2>
        <div className="space-y-3">
          {dailyContent.phrases.map((phrase) => (
            <div
              key={phrase.id}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-900/50"
            >
              <div>
                <p className="font-extrabold text-slate-800 dark:text-white">{phrase.phrase}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{phrase.meaning}</p>
                <p className="text-xs text-slate-400">{phrase.pronunciation}</p>
              </div>
              <button
                type="button"
                aria-label={`Pronounce ${phrase.phrase}`}
                onClick={() => handleSpeak(phrase.phrase)}
                className="shrink-0 rounded-xl p-2 text-slate-400 transition hover:bg-emerald-100 hover:text-emerald-600 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400"
              >
                <FiVolume2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Grammar tip */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20"
      >
        <h2 className="mb-3 flex items-center gap-2 text-base font-extrabold text-amber-900 dark:text-amber-100">
          📖 Grammar Tip
        </h2>
        <p className="mb-1 text-sm font-extrabold text-amber-800 dark:text-amber-200">
          {dailyContent.grammarTip.title}
        </p>
        <p className="mb-3 text-sm text-amber-900/80 dark:text-amber-100/80">
          {dailyContent.grammarTip.description}
        </p>
        <div className="rounded-2xl border border-amber-200 bg-white/60 p-4 dark:border-amber-700 dark:bg-slate-900/40">
          <p className="mb-1 text-xs font-extrabold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            💡 Tip
          </p>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {dailyContent.grammarTip.tip}
          </p>
        </div>
      </motion.section>

      {/* Daily challenge */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <h2 className="mb-4 flex items-center gap-2 text-base font-extrabold text-slate-800 dark:text-white">
          <FiAward className="text-emerald-500" />
          Daily Challenge
        </h2>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          What is the English meaning of{' '}
          <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
            &quot;{dailyContent.challengeWord.word}&quot;
          </span>
          ?
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value={challengeAnswer}
            onChange={(e) => setChallengeAnswer(e.target.value)}
            disabled={challengeDone}
            onKeyDown={(e) => e.key === 'Enter' && !challengeDone && checkChallenge()}
            placeholder="Type the translation..."
            className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 disabled:opacity-60 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-emerald-900/40"
          />
          <button
            type="button"
            onClick={checkChallenge}
            disabled={challengeDone || !challengeAnswer.trim()}
            className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 disabled:opacity-50"
          >
            Check
          </button>
        </div>
        {challengeDone && (
          <p className="mt-3 text-sm font-bold text-emerald-600 dark:text-emerald-400">
            ✓ Challenge complete!
          </p>
        )}
      </motion.section>

      {/* Complete button */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
        <button
          type="button"
          onClick={handleComplete}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-4 text-base font-extrabold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600 sm:w-auto sm:px-8"
        >
          <FiCheck size={20} />
          Complete Daily Lesson
        </button>
      </motion.div>
    </div>
  )
}
