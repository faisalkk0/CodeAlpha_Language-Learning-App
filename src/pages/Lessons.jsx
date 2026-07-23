import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiCheck,
  FiVolume2,
  FiPause,
  FiPlay,
  FiRotateCw,
  FiSave,
} from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { categories } from '../data/languages'
import { getVocabularyForLanguage } from '../data/vocabulary'
import {
  speak,
  pauseSpeech,
  resumeSpeech,
  stopSpeech,
  replay,
  loadVoices,
  isSpeaking,
  isPaused,
} from '../utils/speech'

export default function Lessons() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'

  const {
    selectedLanguage,
    languageMeta,
    notes,
    saveNote,
    toggleFavorite,
    markWordLearned,
    unmarkWordLearned,
    isFavorite,
    isLearned,
    recordStudyActivity,
  } = useLanguage()

  const allWords = useMemo(
    () => getVocabularyForLanguage(selectedLanguage),
    [selectedLanguage]
  )

  const filteredWords = useMemo(() => {
    if (categoryParam === 'all') return allWords
    return allWords.filter((w) => w.category === categoryParam)
  }, [allWords, categoryParam])

  const [index, setIndex] = useState(0)
  const [noteText, setNoteText] = useState('')
  const [speechActive, setSpeechActive] = useState(false)
  const [speechPaused, setSpeechPaused] = useState(false)

  const currentWord = filteredWords[index] ?? null
  const noteKey = currentWord ? `word-${currentWord.id}` : ''

  useEffect(() => {
    loadVoices()
  }, [])

  useEffect(() => {
    setIndex(0)
  }, [categoryParam, selectedLanguage])

  useEffect(() => {
    if (currentWord) {
      setNoteText(notes[noteKey] || '')
    }
  }, [currentWord, notes, noteKey])

  useEffect(() => {
    return () => stopSpeech()
  }, [])

  useEffect(() => {
    stopSpeech()
    setSpeechActive(false)
    setSpeechPaused(false)
  }, [index, selectedLanguage])

  const setCategory = (id) => {
    if (id === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', id)
    }
    setSearchParams(searchParams, { replace: true })
  }

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1))
  }, [])

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(filteredWords.length - 1, i + 1))
  }, [filteredWords.length])

  const handleSpeak = useCallback(() => {
    if (!currentWord) return
    speak(currentWord.word, languageMeta.speechCode, {
      onEnd: () => {
        setSpeechActive(false)
        setSpeechPaused(false)
      },
    })
    setSpeechActive(true)
    setSpeechPaused(false)
    recordStudyActivity()
  }, [currentWord, languageMeta.speechCode, recordStudyActivity])

  const handlePause = () => {
    if (isPaused()) {
      resumeSpeech()
      setSpeechPaused(false)
    } else {
      pauseSpeech()
      setSpeechPaused(true)
    }
  }

  const handleReplay = () => {
    if (!currentWord) return
    replay(currentWord.word, languageMeta.speechCode, {
      onEnd: () => {
        setSpeechActive(false)
        setSpeechPaused(false)
      },
    })
    setSpeechActive(true)
    setSpeechPaused(false)
  }

  const handleStop = () => {
    stopSpeech()
    setSpeechActive(false)
    setSpeechPaused(false)
  }

  const handleToggleLearned = useCallback(() => {
    if (!currentWord) return
    if (isLearned(currentWord.id)) {
      unmarkWordLearned(currentWord.id)
    } else {
      markWordLearned(currentWord.id)
    }
  }, [currentWord, isLearned, unmarkWordLearned, markWordLearned])

  const handleSaveNote = () => {
    if (noteKey) saveNote(noteKey, noteText)
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          goPrev()
          break
        case 'ArrowRight':
          e.preventDefault()
          goNext()
          break
        case ' ':
          e.preventDefault()
          if (isSpeaking()) handleStop()
          else handleSpeak()
          break
        case 'f':
        case 'F':
          if (currentWord) toggleFavorite(currentWord.id)
          break
        case 'l':
        case 'L':
          handleToggleLearned()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext, handleSpeak, currentWord, toggleFavorite, handleToggleLearned])

  const availableCategories = useMemo(() => {
    const ids = new Set(allWords.map((w) => w.category))
    return categories.filter((c) => ids.has(c.id))
  }, [allWords])

  if (!filteredWords.length) {
    return (
      <div className="mx-auto max-w-3xl p-6 text-center">
        <p className="text-lg font-bold text-slate-600 dark:text-slate-300">
          No words found in this category.
        </p>
        <button
          type="button"
          onClick={() => setCategory('all')}
          className="mt-4 rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white"
        >
          View All Words
        </button>
      </div>
    )
  }

  const learned = currentWord && isLearned(currentWord.id)
  const favorited = currentWord && isFavorite(currentWord.id)

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4 pb-12 sm:p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">
          {languageMeta.flag} Vocabulary Lessons
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Word {index + 1} of {filteredWords.length}
        </p>
      </div>

      {/* Progress bar */}
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <motion.div
          className="h-full rounded-full bg-emerald-500"
          initial={false}
          animate={{ width: `${((index + 1) / filteredWords.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory('all')}
          className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition ${
            categoryParam === 'all'
              ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
              : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 dark:bg-slate-800 dark:text-slate-300'
          }`}
        >
          All
        </button>
        {availableCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition ${
              categoryParam === cat.id
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* Word card */}
      <AnimatePresence mode="wait">
        {currentWord && (
          <motion.div
            key={currentWord.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between">
              <span className="text-5xl">{currentWord.icon}</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold capitalize text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                {currentWord.category}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Word</p>
                <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white">
                  {currentWord.word}
                </h2>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Translation
                </p>
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  {currentWord.translation}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Pronunciation
                </p>
                <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  {currentWord.pronunciation}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Meaning
                </p>
                <p className="text-slate-600 dark:text-slate-300">{currentWord.meaning}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Example
                </p>
                <p className="italic text-slate-600 dark:text-slate-300">
                  &ldquo;{currentWord.example}&rdquo;
                </p>
              </div>
            </div>

            {/* Pronunciation controls */}
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleSpeak}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
              >
                <FiVolume2 /> Show Pronunciation
              </button>
              {speechActive && (
                <>
                  <button
                    type="button"
                    onClick={handlePause}
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                  >
                    {speechPaused ? <FiPlay /> : <FiPause />}
                    {speechPaused ? 'Resume' : 'Pause'}
                  </button>
                  <button
                    type="button"
                    onClick={handleReplay}
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                  >
                    <FiRotateCw /> Replay
                  </button>
                  <button
                    type="button"
                    onClick={handleStop}
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                  >
                    Stop
                  </button>
                </>
              )}
            </div>

            {/* Notes */}
            <div className="mt-6">
              <label
                htmlFor="word-note"
                className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400"
              >
                Your Notes
              </label>
              <textarea
                id="word-note"
                rows={3}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a personal note about this word..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
              />
              <button
                type="button"
                onClick={handleSaveNote}
                className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-slate-800 px-4 py-2 text-sm font-bold text-white dark:bg-slate-600"
              >
                <FiSave /> Save Note
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation & actions */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-emerald-300 disabled:opacity-40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          <FiChevronLeft /> Previous
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => currentWord && toggleFavorite(currentWord.id)}
            className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition ${
              favorited
                ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300'
                : 'border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
            }`}
          >
            <FiHeart className={favorited ? 'fill-current' : ''} /> Favorite
          </button>
          <button
            type="button"
            onClick={handleToggleLearned}
            className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition ${
              learned
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                : 'border border-slate-200 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
            }`}
          >
            <FiCheck /> {learned ? 'Learned' : 'Mark as Learned'}
          </button>
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={index >= filteredWords.length - 1}
          className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600 disabled:opacity-40"
        >
          Next <FiChevronRight />
        </button>
      </div>

      <p className="text-center text-xs text-slate-400">
        Shortcuts: ← → navigate · Space pronounce · F favorite · L learned
      </p>
    </div>
  )
}
