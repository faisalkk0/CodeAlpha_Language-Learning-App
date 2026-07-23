import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiChevronLeft,
  FiChevronRight,
  FiShuffle,
  FiRotateCcw,
} from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import Flashcard from '../components/Flashcard'
import { getVocabularyForLanguage } from '../data/vocabulary'
import { shuffleArray } from '../utils/helpers'
import { speak, stopSpeech, loadVoices } from '../utils/speech'

export default function Flashcards() {
  const { selectedLanguage, languageMeta, recordStudyActivity } = useLanguage()

  const [words, setWords] = useState(() => getVocabularyForLanguage(selectedLanguage))
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const currentWord = words[index] ?? null

  useEffect(() => {
    loadVoices()
    return () => stopSpeech()
  }, [])

  useEffect(() => {
    setWords(getVocabularyForLanguage(selectedLanguage))
    setIndex(0)
    setFlipped(false)
    stopSpeech()
  }, [selectedLanguage])

  const goPrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1)
      setFlipped(false)
      stopSpeech()
    }
  }

  const goNext = () => {
    if (index < words.length - 1) {
      setIndex((i) => i + 1)
      setFlipped(false)
      stopSpeech()
    }
  }

  const handleShuffle = () => {
    setWords(shuffleArray(words))
    setIndex(0)
    setFlipped(false)
    stopSpeech()
  }

  const handleRestart = () => {
    setIndex(0)
    setFlipped(false)
    stopSpeech()
  }

  const handleFlip = () => {
    setFlipped((f) => !f)
  }

  const handleSpeak = () => {
    if (!currentWord) return
    speak(currentWord.word, languageMeta.speechCode)
    recordStudyActivity()
  }

  if (!words.length) {
    return (
      <div className="p-6 text-center">
        <p className="font-bold text-slate-600 dark:text-slate-300">No flashcards available.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 pb-12 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">
          {languageMeta.flag} Flashcards
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Card {index + 1} of {words.length}
        </p>
      </motion.div>

      {/* Progress */}
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          className="h-full rounded-full bg-emerald-500"
          initial={false}
          animate={{ width: `${((index + 1) / words.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <Flashcard
        word={currentWord}
        flipped={flipped}
        onFlip={handleFlip}
        onSpeak={handleSpeak}
      />

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-emerald-300 disabled:opacity-40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          <FiChevronLeft /> Previous
        </button>

        <button
          type="button"
          onClick={handleShuffle}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          <FiShuffle /> Shuffle
        </button>

        <button
          type="button"
          onClick={handleRestart}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          <FiRotateCcw /> Restart
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={index >= words.length - 1}
          className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600 disabled:opacity-40"
        >
          Next <FiChevronRight />
        </button>
      </div>

      <p className="text-center text-xs text-slate-400">
        Tap the card to flip · Use the pronounce button to hear the word
      </p>
    </div>
  )
}
