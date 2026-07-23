import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiRotateCcw, FiClock, FiZap } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import QuizCard from '../components/QuizCard'
import { generateQuizQuestions } from '../data/vocabulary'
import { formatTime, percentage } from '../utils/helpers'

const QUESTION_COUNT = 10
const TOTAL_TIME = 90
const RESULT_DELAY = 800

export default function Practice() {
  const { selectedLanguage, languageMeta, addPracticeScore } = useLanguage()

  const [phase, setPhase] = useState('idle')
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const [finalScore, setFinalScore] = useState(0)
  const [finalPercent, setFinalPercent] = useState(0)

  const scoreRef = useRef(0)
  const finishingRef = useRef(false)

  const finishPractice = useCallback(
    (final) => {
      if (finishingRef.current) return
      finishingRef.current = true

      const answered = Math.min(currentIndex + (showResult ? 1 : 0), questions.length)
      const total = questions.length || QUESTION_COUNT
      const pct = percentage(final, answered || total)

      addPracticeScore({
        score: final,
        total: answered || total,
        percentage: pct,
        timeUsed: TOTAL_TIME - timeLeft,
      })

      setFinalScore(final)
      setFinalPercent(pct)
      setScore(final)
      setPhase('finished')
    },
    [addPracticeScore, currentIndex, questions.length, showResult, timeLeft]
  )

  const startPractice = () => {
    finishingRef.current = false
    scoreRef.current = 0
    setQuestions(generateQuizQuestions(selectedLanguage, QUESTION_COUNT))
    setCurrentIndex(0)
    setSelected(null)
    setShowResult(false)
    setScore(0)
    setTimeLeft(TOTAL_TIME)
    setFinalScore(0)
    setFinalPercent(0)
    setPhase('active')
  }

  useEffect(() => {
    if (phase !== 'active') return

    if (timeLeft <= 0) {
      finishPractice(scoreRef.current)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [phase, timeLeft, finishPractice])

  const advanceQuestion = (newScore) => {
    scoreRef.current = newScore
    setScore(newScore)

    if (currentIndex >= questions.length - 1) {
      finishPractice(newScore)
      return
    }

    setCurrentIndex((i) => i + 1)
    setSelected(null)
    setShowResult(false)
  }

  const handleSelect = (option) => {
    if (showResult || phase !== 'active') return

    const question = questions[currentIndex]
    const correct = option === question.correctAnswer
    const newScore = scoreRef.current + (correct ? 1 : 0)

    setSelected(option)
    setShowResult(true)

    setTimeout(() => {
      advanceQuestion(newScore)
    }, RESULT_DELAY)
  }

  const handleNext = () => {
    if (!showResult || phase !== 'active') return

    const question = questions[currentIndex]
    const correct = selected === question.correctAnswer
    const newScore = scoreRef.current + (correct ? 1 : 0)
    advanceQuestion(newScore)
  }

  const currentQuestion = questions[currentIndex]
  const timerUrgent = timeLeft <= 15

  if (phase === 'idle') {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-3xl dark:bg-amber-900/40">
            ⚡
          </span>
          <h1 className="mb-2 text-2xl font-extrabold text-slate-800 dark:text-white">
            {languageMeta.flag} Timed Practice
          </h1>
          <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
            Answer {QUESTION_COUNT} questions as fast as you can.
          </p>
          <p className="mb-6 flex items-center justify-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400">
            <FiClock /> {formatTime(TOTAL_TIME)} total time
          </p>
          <button
            type="button"
            onClick={startPractice}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
          >
            <FiPlay /> Start Practice
          </button>
        </motion.div>
      </div>
    )
  }

  if (phase === 'finished') {
    const emoji = finalPercent >= 90 ? '🏆' : finalPercent >= 70 ? '🔥' : '💪'

    return (
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <span className="mb-4 inline-block text-5xl">{emoji}</span>
          <h1 className="mb-2 text-2xl font-extrabold text-slate-800 dark:text-white">
            Time&apos;s Up!
          </h1>
          <p className="mb-1 text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {finalScore} correct
          </p>
          <p className="mb-6 text-lg font-bold text-slate-600 dark:text-slate-300">
            {finalPercent}% accuracy
          </p>
          <button
            type="button"
            onClick={startPractice}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
          >
            <FiRotateCcw /> Try Again
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4 pb-12 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 text-xl font-extrabold text-slate-800 dark:text-white">
            <FiZap className="text-amber-500" />
            {languageMeta.flag} Practice
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Score: {score} · Question {currentIndex + 1} / {questions.length}
          </p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-extrabold ${
            timerUrgent
              ? 'animate-pulse bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300'
              : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
          }`}
        >
          <FiClock />
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            timerUrgent ? 'bg-rose-500' : 'bg-emerald-500'
          }`}
          style={{ width: `${(timeLeft / TOTAL_TIME) * 100}%` }}
        />
      </div>

      <QuizCard
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        total={questions.length}
        selected={selected}
        showResult={showResult}
        onSelect={handleSelect}
      />

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <button
            type="button"
            onClick={handleNext}
            className="rounded-2xl bg-emerald-500 px-6 py-2.5 text-sm font-extrabold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
          >
            {currentIndex >= questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </motion.div>
      )}
    </div>
  )
}
