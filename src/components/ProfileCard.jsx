import { motion } from 'framer-motion'
import { achievementsList } from '../data/languages'
import { useLanguage } from '../context/LanguageContext'

export default function ProfileCard() {
  const { profile, languageMeta, progress, quizAverage, completionPercent, unlockedAchievements } =
    useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-8 text-white">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-extrabold backdrop-blur">
            {profile.username?.charAt(0)?.toUpperCase() || 'L'}
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">{profile.username}</h2>
            <p className="text-sm font-semibold text-emerald-50">
              Learning {languageMeta.flag} {languageMeta.name}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-4">
        {[
          { label: 'Words', value: progress.learnedWords.length },
          { label: 'Lessons', value: progress.completedLessons.length },
          { label: 'Quiz Avg', value: `${quizAverage}%` },
          { label: 'Progress', value: `${completionPercent}%` },
        ].map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-slate-50 p-3 text-center dark:bg-slate-900/50">
            <p className="text-xl font-extrabold text-slate-800 dark:text-white">{stat.value}</p>
            <p className="text-xs font-bold text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 px-6 py-4 dark:border-slate-700">
        <p className="mb-3 text-sm font-extrabold text-slate-700 dark:text-slate-200">
          Achievements ({unlockedAchievements.length}/{achievementsList.length})
        </p>
        <div className="flex flex-wrap gap-2">
          {achievementsList.map((a) => {
            const unlocked = unlockedAchievements.includes(a.id)
            return (
              <span
                key={a.id}
                title={a.description}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                  unlocked
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
                    : 'bg-slate-100 text-slate-400 opacity-60 dark:bg-slate-700'
                }`}
              >
                {a.icon} {a.title}
              </span>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
