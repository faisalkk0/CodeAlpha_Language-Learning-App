import { motion } from 'framer-motion'

export default function AchievementCard({ achievement, unlocked }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`rounded-3xl border p-5 shadow-sm transition ${
        unlocked
          ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20'
          : 'border-slate-200 bg-white opacity-70 dark:border-slate-700 dark:bg-slate-800'
      }`}
    >
      <div className="mb-3 text-3xl">{achievement.icon}</div>
      <h3 className="mb-1 text-base font-extrabold text-slate-800 dark:text-white">{achievement.title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400">{achievement.description}</p>
      <p
        className={`mt-3 text-xs font-extrabold uppercase tracking-wide ${
          unlocked ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'
        }`}
      >
        {unlocked ? 'Unlocked' : 'Locked'}
      </p>
    </motion.div>
  )
}

export function SkeletonCard() {
  return <div className="skeleton h-36 w-full" />
}

export function EmptyState({ icon = '📭', title, message, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center dark:border-slate-600 dark:bg-slate-800/40">
      <span className="mb-3 text-4xl">{icon}</span>
      <h3 className="mb-1 text-lg font-extrabold text-slate-800 dark:text-white">{title}</h3>
      <p className="mb-4 max-w-sm text-sm text-slate-500 dark:text-slate-400">{message}</p>
      {action}
    </div>
  )
}
