import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function LessonCard({
  title,
  subtitle,
  icon,
  to,
  progress,
  badge,
  onClick,
}) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-emerald-700"
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm dark:bg-slate-700">
          {icon}
        </span>
        {badge && (
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mb-1 text-base font-extrabold text-slate-800 dark:text-white">{title}</h3>
      <p className="mb-4 flex-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
      {typeof progress === 'number' && (
        <div className="mb-3">
          <div className="mb-1 flex justify-between text-xs font-semibold text-slate-500">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
      <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 group-hover:gap-2 dark:text-emerald-400">
        Open <FiArrowRight />
      </span>
    </motion.div>
  )

  if (to) {
    return (
      <Link to={to} className="block h-full">
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className="h-full w-full text-left">
      {content}
    </button>
  )
}
