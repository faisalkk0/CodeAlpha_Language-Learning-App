import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiRotateCcw, FiAward } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import QuizCard from '../components/QuizCard'
import { generateQuizQuestions } from '../data/vocabulary'
import { percentage } from '../utils/helpers'

const QUESTION_COUNT = 20
const RESULT_DELAY = 1200

export default function Quiz() {
  const { selectedLanguage, languageMeta, addQuizScore } = useLanguage()

  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [finalPercent, setFinalPercent] = useState(0)

  const startQuiz = useCallback(() => {
    setQuestions(generateQuizQuestions(selectedLanguage, QUESTION_COUNT))
    setCurrentIndex(0)
    setSelected(null)
    setShowResult(false)
    setScore(0)
    setFinalPercent(0)
    setFinished(false)
    setStarted(true)
  }, [selectedLanguage])

  const finishQuiz = useCallback(
    (finalScore) => {
      const pct = percentage(finalScore, questions.length)
      addQuizScore({
        score: finalScore,
        total: questions.length,
        percentage: pct,
      })
      setScore(finalScore)
      setFinalPercent(pct)
      setFinished(true)
    },
    [addQuizScore, questions.length]
  )

  const handleSelect = (option) => {
    if (showResult || finished) return

    const question = questions[currentIndex]
    const correct = option === question.correctAnswer
    const newScore = score + (correct ? 1 : 0)

    setSelected(option)
    setShowResult(true)

    setTimeout(() => {
      if (currentIndex >= questions.length - 1) {
        finishQuiz(newScore)
      } else {
        setScore(newScore)
        setCurrentIndex((i) => i + 1)
        setSelected(null)
        setShowResult(false)
      }
    }, RESULT_DELAY)
  }

  const handleNext = () => {
    if (!showResult || finished) return

    const question = questions[currentIndex]
    const correct = selected === question.correctAnswer
    const newScore = score + (correct ? 1 : 0)

    if (currentIndex >= questions.length - 1) {
      finishQuiz(newScore)
    } else {
      setScore(newScore)
      setCurrentIndex((i) => i + 1)
      setSelected(null)
      setShowResult(false)
    }
  }

  const currentQuestion = questions[currentIndex]

  if (!started) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl dark:bg-emerald-900/40">
            📝
          </span>
          <h1 className="mb-2 text-2xl font-extrabold text-slate-800 dark:text-white">
            {languageMeta.flag} Vocabulary Quiz
          </h1>
          <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
            Test your knowledge with {QUESTION_COUNT} multiple-choice questions. Answer each
            question and see instant feedback.
          </p>
          <button
            type="button"
            onClick={startQuiz}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
          >
            <FiPlay /> Start Quiz
          </button>
        </motion.div>
      </div>
    )
  }

  if (finished) {
    const emoji = finalPercent >= 90 ? '🏆' : finalPercent >= 70 ? '🎉' : finalPercent >= 50 ? '👍' : '💪'

    return (
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <span className="mb-4 inline-block text-5xl">{emoji}</span>
          <h1 className="mb-2 text-2xl font-extrabold text-slate-800 dark:text-white">
            Quiz Complete!
          </h1>
          <p className="mb-1 text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {score} / {questions.length}
          </p>
          <p className="mb-6 flex items-center justify-center gap-2 text-lg font-bold text-slate-600 dark:text-slate-300">
            <FiAward className="text-amber-500" />
            {finalPercent}% correct
          </p>
          <button
            type="button"
            onClick={startQuiz}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
          >
            <FiRotateCcw /> Restart Quiz
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4 pb-12 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-slate-800 dark:text-white">
            {languageMeta.flag} Quiz
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Score: {score} · {currentIndex + 1} / {questions.length}
          </p>
        </div>
        <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
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
            {currentIndex >= questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </motion.div>
      )}
    </div>
  )
}
