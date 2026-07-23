import { motion } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'

export default function QuizCard({
  question,
  questionNumber,
  total,
  selected,
  showResult,
  onSelect,
}) {
  if (!question) return null

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          Question {questionNumber} / {total}
        </span>
        <span className="text-xs font-semibold capitalize text-slate-400">{question.category}</span>
      </div>

      <p className="mb-2 text-sm font-bold text-slate-500 dark:text-slate-400">Translate the word</p>
      <h2 className="mb-6 text-3xl font-extrabold text-slate-800 dark:text-white">{question.word}</h2>

      <div className="grid gap-3">
        {question.options.map((option) => {
          const isSelected = selected === option
          const isCorrect = option === question.correctAnswer
          let styles =
            'border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-600 dark:hover:border-emerald-600 dark:hover:bg-emerald-900/20'

          if (showResult) {
            if (isCorrect) styles = 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200'
            else if (isSelected && !isCorrect) styles = 'border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200'
            else styles = 'border-slate-200 opacity-60 dark:border-slate-600'
          } else if (isSelected) {
            styles = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
          }

          return (
            <button
              key={option}
              type="button"
              disabled={showResult}
              onClick={() => onSelect(option)}
              className={`flex items-center justify-between rounded-2xl border-2 px-4 py-3 text-left text-sm font-bold text-slate-700 transition dark:text-slate-200 ${styles}`}
            >
              <span>{option}</span>
              {showResult && isCorrect && <FiCheck className="text-emerald-600" />}
              {showResult && isSelected && !isCorrect && <FiX className="text-rose-500" />}
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}
