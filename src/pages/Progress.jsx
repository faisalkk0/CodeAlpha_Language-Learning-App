import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { FiBarChart2 } from 'react-icons/fi'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import { vocabulary } from '../data/vocabulary'
import { categories } from '../data/languages'
import { useLanguage } from '../context/LanguageContext'
import ProgressCard, { CircularProgress } from '../components/ProgressCard'

const CHART_COLORS = ['#10B981', '#0EA5E9', '#8B5CF6', '#F59E0B', '#EF4444', '#EC4899', '#06B6D4', '#84CC16']

export default function Progress() {
  const {
    progress,
    favorites,
    quizScores,
    quizAverage,
    completionPercent,
    selectedLanguage,
  } = useLanguage()

  const quizChartData = useMemo(() => {
    const history = [...quizScores].reverse().slice(-10)
    return history.map((entry, i) => ({
      name: entry.date
        ? new Date(entry.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
        : `#${i + 1}`,
      score: entry.percentage ?? 0,
      correct: entry.correct ?? 0,
      total: entry.total ?? 0,
    }))
  }, [quizScores])

  const categoryData = useMemo(() => {
    const learnedSet = new Set(progress.learnedWords)
    const counts = {}

    vocabulary.forEach((word) => {
      if (learnedSet.has(word.id)) {
        counts[word.category] = (counts[word.category] || 0) + 1
      }
    })

    return categories
      .map((cat) => ({
        name: cat.name,
        learned: counts[cat.id] || 0,
        icon: cat.icon,
      }))
      .filter((c) => c.learned > 0)
      .sort((a, b) => b.learned - a.learned)
  }, [progress.learnedWords])

  const completionPieData = useMemo(
    () => [
      { name: 'Learned', value: progress.learnedWords.length },
      { name: 'Remaining', value: Math.max(0, vocabulary.length - progress.learnedWords.length) },
    ],
    [progress.learnedWords.length]
  )

  const grammarPercent = useMemo(() => {
    const total = 30
    return Math.round((progress.completedGrammar.length / total) * 100)
  }, [progress.completedGrammar.length])

  const tooltipStyle = {
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    border: 'none',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 600,
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-900/40">
            <FiBarChart2 className="text-xl text-sky-600 dark:text-sky-400" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Progress</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Track your learning journey in {selectedLanguage}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ProgressCard
          title="Words Learned"
          value={progress.learnedWords.length}
          subtitle={`of ${vocabulary.length} total`}
          icon="📚"
          color="emerald"
        />
        <ProgressCard
          title="Lessons Done"
          value={progress.completedLessons.length}
          subtitle={`${progress.completedGrammar.length} grammar`}
          icon="✅"
          color="sky"
        />
        <ProgressCard
          title="Quiz Average"
          value={`${quizAverage}%`}
          subtitle={`${quizScores.length} attempts`}
          icon="🎯"
          color="violet"
        />
        <ProgressCard
          title="Streak"
          value={`${progress.streak} days`}
          subtitle={`${favorites.length} favorites saved`}
          icon="🔥"
          color="orange"
        />
      </div>

      {/* Completion ring + pie */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <h2 className="mb-4 self-start text-base font-extrabold text-slate-800 dark:text-white">
            Vocabulary Completion
          </h2>
          <CircularProgress percent={completionPercent} label="Words" />
          <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
            {progress.learnedWords.length} of {vocabulary.length} words mastered
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <h2 className="mb-4 text-base font-extrabold text-slate-800 dark:text-white">Learning Breakdown</h2>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={completionPieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {completionPieData.map((_, index) => (
                  <Cell key={index} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
              <Legend
                wrapperStyle={{ fontSize: '12px', fontWeight: 700 }}
                formatter={(value) => <span className="text-slate-600 dark:text-slate-300">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
          <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
            Grammar progress: {grammarPercent}% ({progress.completedGrammar.length}/30 lessons)
          </p>
        </motion.div>
      </div>

      {/* Quiz history line chart */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <h2 className="mb-1 text-base font-extrabold text-slate-800 dark:text-white">Quiz Score History</h2>
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Last {quizChartData.length} quiz results</p>
        {quizChartData.length === 0 ? (
          <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-900/40">
            <p className="text-sm font-semibold text-slate-400">Take a quiz to see your score history</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={quizChartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.3)" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fontWeight: 600, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fontSize: 11, fontWeight: 600, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
                unit="%"
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value, name) => [`${value}%`, name === 'score' ? 'Score' : name]}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, fill: '#059669' }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </motion.div>

      {/* Category bar chart */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
      >
        <h2 className="mb-1 text-base font-extrabold text-slate-800 dark:text-white">Words by Category</h2>
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Learned words per category</p>
        {categoryData.length === 0 ? (
          <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-900/40">
            <p className="text-sm font-semibold text-slate-400">Start learning words to see category stats</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={Math.max(240, categoryData.length * 36)}>
            <BarChart data={categoryData} layout="vertical" margin={{ top: 0, right: 16, left: 8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis
                type="category"
                dataKey="name"
                width={120}
                tick={{ fontSize: 11, fontWeight: 600, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`${value} words`, 'Learned']} />
              <Bar dataKey="learned" fill="#10B981" radius={[0, 8, 8, 0]} maxBarSize={28} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </motion.div>
    </div>
  )
}
