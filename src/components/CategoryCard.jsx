import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CategoryCard({ category, count, to }) {
  return (
    <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={to || `/lessons?category=${category.id}`}
        className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
      >
        <span className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${category.color}`}>
          {category.icon}
        </span>
        <h3 className="mb-1 text-base font-extrabold text-slate-800 dark:text-white">{category.name}</h3>
        <p className="mb-3 flex-1 text-sm text-slate-500 dark:text-slate-400">{category.description}</p>
        {typeof count === 'number' && (
          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{count} items</p>
        )}
      </Link>
    </motion.div>
  )
}
