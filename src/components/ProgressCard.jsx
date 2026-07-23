import { motion } from 'framer-motion'

export default function ProgressCard({ title, value, subtitle, icon, color = 'emerald' }) {
  const colors = {
    emerald: 'from-emerald-500 to-teal-500',
    orange: 'from-orange-400 to-amber-500',
    sky: 'from-sky-400 to-blue-500',
    violet: 'from-violet-400 to-purple-500',
    rose: 'from-rose-400 to-pink-500',
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="mb-3 flex items-center justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${colors[color] || colors.emerald} text-xl text-white shadow-md`}
        >
          {icon}
        </span>
      </div>
      <p className="text-2xl font-extrabold text-slate-800 dark:text-white">{value}</p>
      <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{title}</p>
      {subtitle && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </motion.div>
  )
}

/** Circular progress ring */
export function CircularProgress({ percent = 0, size = 120, stroke = 10, label = 'Done' }) {
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-slate-200 dark:text-slate-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-emerald-500 transition-all duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-extrabold text-slate-800 dark:text-white">{percent}%</span>
        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{label}</span>
      </div>
    </div>
  )
}
