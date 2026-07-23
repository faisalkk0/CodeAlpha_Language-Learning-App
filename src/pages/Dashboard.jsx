import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiBookOpen,
  FiZap,
  FiTrendingUp,
  FiAward,
  FiTarget,
  FiCheckCircle,
} from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import ProgressCard, { CircularProgress } from '../components/ProgressCard'
import CategoryCard from '../components/CategoryCard'
import LessonCard from '../components/LessonCard'
import { categories } from '../data/languages'
import { getVocabularyForLanguage } from '../data/vocabulary'
import { todayKey } from '../utils/helpers'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Dashboard() {
  const {
    profile,
    languages,
    selectedLanguage,
    setSelectedLanguage,
    languageMeta,
    progress,
    quizAverage,
    completionPercent,
  } = useLanguage()

  const vocabulary = useMemo(
    () => getVocabularyForLanguage(selectedLanguage),
    [selectedLanguage]
  )

  const categoryCounts = useMemo(() => {
    const counts = {}
    vocabulary.forEach((word) => {
      counts[word.category] = (counts[word.category] || 0) + 1
    })
    return counts
  }, [vocabulary])

  const dailyCompleted = progress.dailyLessonCompleted === todayKey()

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl space-y-8 p-4 pb-12 sm:p-6"
    >
      {/* Hero welcome */}
      <motion.section
        variants={item}
        className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 p-6 text-white shadow-lg shadow-emerald-500/20 sm:p-8"
      >
        <div className="relative z-10">
          <p className="mb-1 text-sm font-bold uppercase tracking-widest text-emerald-100">
            Welcome back
          </p>
          <h1 className="mb-2 text-3xl font-extrabold sm:text-4xl">
            {profile.username || 'Learner'} 👋
          </h1>
          <p className="mb-6 max-w-lg text-emerald-50">
            Keep your streak alive! You&apos;re learning{' '}
            <span className="font-bold">{languageMeta.name}</span> —{' '}
            {progress.learnedWords.length} words mastered so far.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-extrabold text-emerald-700 shadow-md transition hover:bg-emerald-50"
            >
              <FiBookOpen /> Continue Learning
            </Link>
            <Link
              to="/daily"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700/40 px-5 py-2.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-emerald-700/60"
            >
              <FiZap /> Today&apos;s Lesson
            </Link>
          </div>
        </div>
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 right-16 h-32 w-32 rounded-full bg-white/5" />
      </motion.section>

      {/* Stats grid */}
      <motion.section variants={item}>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">Your Stats</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Track your learning journey
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white px-5 py-3 dark:border-slate-700 dark:bg-slate-800">
            <CircularProgress percent={completionPercent} size={88} stroke={8} label="Done" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <ProgressCard
            title="Day Streak"
            value={progress.streak}
            subtitle="Keep it going!"
            icon="🔥"
            color="orange"
          />
          <ProgressCard
            title="Lessons Done"
            value={progress.completedLessons.length}
            subtitle="Total completed"
            icon={<FiCheckCircle />}
            color="emerald"
          />
          <ProgressCard
            title="Words Learned"
            value={progress.learnedWords.length}
            subtitle={`of ${vocabulary.length}`}
            icon="📚"
            color="sky"
          />
          <ProgressCard
            title="Quiz Average"
            value={`${quizAverage}%`}
            subtitle="All-time average"
            icon={<FiAward />}
            color="violet"
          />
          <ProgressCard
            title="Completion"
            value={`${completionPercent}%`}
            subtitle="Vocabulary progress"
            icon={<FiTrendingUp />}
            color="rose"
          />
        </div>
      </motion.section>

      {/* Quick actions */}
      <motion.section variants={item} className="grid gap-4 sm:grid-cols-2">
        <LessonCard
          title="Continue Learning"
          subtitle={`Pick up where you left off in ${languageMeta.name}`}
          icon="📖"
          to="/lessons"
          progress={completionPercent}
          badge="Recommended"
        />
        <LessonCard
          title="Today's Lesson"
          subtitle={
            dailyCompleted
              ? 'Great job! You completed today\'s lesson.'
              : 'A fresh daily challenge awaits you.'
          }
          icon="⚡"
          to="/daily"
          badge={dailyCompleted ? 'Done' : 'New'}
        />
      </motion.section>

      {/* Language selection */}
      <motion.section variants={item}>
        <div className="mb-4">
          <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">
            Choose Language
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Tap a language to switch your learning focus
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
          {languages.map((lang) => {
            const active = lang.id === selectedLanguage
            return (
              <motion.button
                key={lang.id}
                type="button"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`flex flex-col items-center gap-1 rounded-2xl border-2 p-3 transition ${
                  active
                    ? 'border-emerald-500 bg-emerald-50 shadow-md shadow-emerald-500/15 dark:bg-emerald-900/30'
                    : 'border-slate-200 bg-white hover:border-emerald-200 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-emerald-700'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span
                  className={`text-[10px] font-extrabold leading-tight ${
                    active
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {lang.name}
                </span>
              </motion.button>
            )
          })}
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section variants={item}>
        <div className="mb-4 flex items-center gap-2">
          <FiTarget className="text-emerald-500" />
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">Categories</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Explore vocabulary by topic
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              count={categoryCounts[cat.id] || 0}
            />
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
