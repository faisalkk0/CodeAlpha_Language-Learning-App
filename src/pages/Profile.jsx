import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiEdit2, FiSave, FiUser } from 'react-icons/fi'
import { achievementsList } from '../data/languages'
import { useLanguage } from '../context/LanguageContext'
import ProfileCard from '../components/ProfileCard'
import AchievementCard from '../components/AchievementCard'
import ProgressCard from '../components/ProgressCard'

export default function Profile() {
  const {
    profile,
    updateProfile,
    progress,
    favorites,
    quizScores,
    quizAverage,
    completionPercent,
    unlockedAchievements,
    languageMeta,
  } = useLanguage()

  const [editing, setEditing] = useState(false)
  const [username, setUsername] = useState(profile.username)

  const handleSave = () => {
    const trimmed = username.trim() || 'Learner'
    updateProfile({ username: trimmed })
    setUsername(trimmed)
    setEditing(false)
  }

  const joinDate = profile.joinDate
    ? new Date(profile.joinDate).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Recently'

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/40">
            <FiUser className="text-xl text-emerald-600 dark:text-emerald-400" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Profile</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Member since {joinDate} · Learning {languageMeta.flag} {languageMeta.name}
            </p>
          </div>
        </div>
      </motion.div>

      <ProfileCard />

      {/* Username editor */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-800 dark:text-white">Username</h2>
          {!editing ? (
            <button
              type="button"
              onClick={() => {
                setUsername(profile.username)
                setEditing(true)
              }}
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-bold text-emerald-600 transition hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/30"
            >
              <FiEdit2 size={14} />
              Edit
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-1.5 text-sm font-bold text-white transition hover:bg-emerald-600"
            >
              <FiSave size={14} />
              Save
            </button>
          )}
        </div>
        {editing ? (
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={30}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-emerald-900/40"
            placeholder="Enter username"
          />
        ) : (
          <p className="text-lg font-extrabold text-slate-800 dark:text-white">{profile.username}</p>
        )}
      </motion.div>

      {/* Stats grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="mb-4 text-base font-extrabold text-slate-800 dark:text-white">Statistics</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProgressCard
            title="Words Learned"
            value={progress.learnedWords.length}
            subtitle={`${completionPercent}% of vocabulary`}
            icon="📚"
            color="emerald"
          />
          <ProgressCard
            title="Lessons Completed"
            value={progress.completedLessons.length}
            subtitle={`${progress.completedGrammar.length} grammar lessons`}
            icon="✅"
            color="sky"
          />
          <ProgressCard
            title="Quiz Average"
            value={`${quizAverage}%`}
            subtitle={`${quizScores.length} quiz${quizScores.length !== 1 ? 'es' : ''} taken`}
            icon="🎯"
            color="violet"
          />
          <ProgressCard
            title="Current Streak"
            value={`${progress.streak} days`}
            subtitle={progress.lastStudyDate ? `Last studied ${progress.lastStudyDate}` : 'Start today!'}
            icon="🔥"
            color="orange"
          />
          <ProgressCard
            title="Favorites"
            value={favorites.length}
            subtitle="Saved words"
            icon="❤️"
            color="rose"
          />
          <ProgressCard
            title="Achievements"
            value={`${unlockedAchievements.length}/${achievementsList.length}`}
            subtitle="Unlocked badges"
            icon="🏆"
            color="violet"
          />
        </div>
      </motion.div>

      {/* Achievements grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <h2 className="mb-4 text-base font-extrabold text-slate-800 dark:text-white">
          Achievements ({unlockedAchievements.length}/{achievementsList.length})
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievementsList.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              unlocked={unlockedAchievements.includes(achievement.id)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
