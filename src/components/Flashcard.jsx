import { motion } from 'framer-motion'
import { FiVolume2 } from 'react-icons/fi'

export default function Flashcard({ word, flipped, onFlip, onSpeak }) {
  if (!word) return null

  return (
    <div className="perspective mx-auto w-full max-w-md">
      <button
        type="button"
        aria-label={flipped ? 'Show word' : 'Show meaning'}
        onClick={onFlip}
        className="relative h-72 w-full cursor-pointer"
      >
        <motion.div
          className="preserve-3d relative h-full w-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.55, type: 'spring', stiffness: 120, damping: 16 }}
        >
          {/* Front */}
          <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-xl shadow-emerald-500/20">
            <span className="mb-3 text-4xl">{word.icon}</span>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-100">Tap to flip</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{word.word}</h2>
            <p className="mt-3 text-sm font-semibold text-emerald-50">{word.pronunciation}</p>
          </div>

          {/* Back */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-600 dark:bg-slate-800">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Meaning</p>
            <h3 className="mb-2 text-2xl font-extrabold text-slate-800 dark:text-white">{word.translation}</h3>
            <p className="mb-3 text-center text-sm text-slate-500 dark:text-slate-400">{word.meaning}</p>
            <p className="mb-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">Pronunciation</p>
            <p className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">{word.pronunciation}</p>
            <p className="text-center text-sm italic text-slate-600 dark:text-slate-300">&ldquo;{word.example}&rdquo;</p>
          </div>
        </motion.div>
      </button>

      {onSpeak && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onSpeak()
          }}
          className="mx-auto mt-4 flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-700 dark:text-slate-200"
        >
          <FiVolume2 /> Pronounce
        </button>
      )}
    </div>
  )
}
