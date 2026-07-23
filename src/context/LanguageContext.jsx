import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { languages, achievementsList } from '../data/languages'
import { vocabulary } from '../data/vocabulary'
import {
  clearAllAppData,
  defaultProfile,
  defaultProgress,
  exportLearningData,
  getItem,
  importLearningData,
  setItem,
  storageKeys,
} from '../utils/localStorage'
import { todayKey, updateStreak, average, percentage } from '../utils/helpers'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguageState] = useState(() =>
    getItem(storageKeys.language, 'spanish')
  )
  const [progress, setProgress] = useState(() => ({
    ...defaultProgress,
    ...getItem(storageKeys.progress, {}),
  }))
  const [favorites, setFavorites] = useState(() => getItem(storageKeys.favorites, []))
  const [notes, setNotes] = useState(() => getItem(storageKeys.notes, {}))
  const [quizScores, setQuizScores] = useState(() => getItem(storageKeys.quizScores, []))
  const [profile, setProfile] = useState(() => ({
    ...defaultProfile,
    ...getItem(storageKeys.profile, {}),
  }))
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Persist core state
  useEffect(() => {
    setItem(storageKeys.language, selectedLanguage)
  }, [selectedLanguage])

  useEffect(() => {
    setItem(storageKeys.progress, progress)
  }, [progress])

  useEffect(() => {
    setItem(storageKeys.favorites, favorites)
  }, [favorites])

  useEffect(() => {
    setItem(storageKeys.notes, notes)
  }, [notes])

  useEffect(() => {
    setItem(storageKeys.quizScores, quizScores)
  }, [quizScores])

  useEffect(() => {
    setItem(storageKeys.profile, profile)
  }, [profile])

  const languageMeta = useMemo(
    () => languages.find((l) => l.id === selectedLanguage) || languages[1],
    [selectedLanguage]
  )

  const setSelectedLanguage = (id) => {
    setSelectedLanguageState(id)
    toast.success(`Learning language set to ${languages.find((l) => l.id === id)?.name || id}`)
  }

  const recordStudyActivity = useCallback(() => {
    setProgress((prev) => {
      const updated = updateStreak(prev.lastStudyDate, prev.streak)
      return { ...prev, ...updated }
    })
  }, [])

  const markWordLearned = useCallback(
    (wordId) => {
      setProgress((prev) => {
        if (prev.learnedWords.includes(wordId)) return prev
        const learnedWords = [...prev.learnedWords, wordId]
        toast.success('Word marked as learned!')
        return { ...prev, learnedWords }
      })
      recordStudyActivity()
    },
    [recordStudyActivity]
  )

  const unmarkWordLearned = useCallback((wordId) => {
    setProgress((prev) => ({
      ...prev,
      learnedWords: prev.learnedWords.filter((id) => id !== wordId),
    }))
  }, [])

  const markLessonCompleted = useCallback(
    (lessonId) => {
      setProgress((prev) => {
        if (prev.completedLessons.includes(lessonId)) return prev
        toast.success('Lesson completed!')
        return {
          ...prev,
          completedLessons: [...prev.completedLessons, lessonId],
        }
      })
      recordStudyActivity()
    },
    [recordStudyActivity]
  )

  const markGrammarCompleted = useCallback(
    (grammarId) => {
      setProgress((prev) => {
        if (prev.completedGrammar.includes(grammarId)) return prev
        toast.success('Grammar lesson completed!')
        return {
          ...prev,
          completedGrammar: [...prev.completedGrammar, grammarId],
        }
      })
      recordStudyActivity()
    },
    [recordStudyActivity]
  )

  const toggleFavorite = useCallback((wordId) => {
    setFavorites((prev) => {
      if (prev.includes(wordId)) {
        toast('Removed from favorites', { icon: '💔' })
        return prev.filter((id) => id !== wordId)
      }
      toast.success('Added to favorites!')
      return [...prev, wordId]
    })
  }, [])

  const clearFavorites = useCallback(() => {
    setFavorites([])
    toast.success('Favorites cleared')
  }, [])

  const saveNote = useCallback((lessonKey, content) => {
    setNotes((prev) => ({ ...prev, [lessonKey]: content }))
    toast.success('Note saved')
  }, [])

  const deleteNote = useCallback((lessonKey) => {
    setNotes((prev) => {
      const next = { ...prev }
      delete next[lessonKey]
      return next
    })
  }, [])

  const addQuizScore = useCallback(
    (entry) => {
      const record = {
        ...entry,
        date: new Date().toISOString(),
        language: selectedLanguage,
      }
      setQuizScores((prev) => [record, ...prev].slice(0, 50))
      setProgress((prev) => ({
        ...prev,
        quizHistory: [record, ...(prev.quizHistory || [])].slice(0, 50),
      }))
      recordStudyActivity()
    },
    [recordStudyActivity, selectedLanguage]
  )

  const addPracticeScore = useCallback(
    (entry) => {
      const record = {
        ...entry,
        date: new Date().toISOString(),
        language: selectedLanguage,
        type: 'practice',
      }
      setProgress((prev) => ({
        ...prev,
        practiceHistory: [record, ...(prev.practiceHistory || [])].slice(0, 50),
      }))
      recordStudyActivity()
    },
    [recordStudyActivity, selectedLanguage]
  )

  const completeDailyLesson = useCallback(() => {
    const today = todayKey()
    setProgress((prev) => ({ ...prev, dailyLessonCompleted: today }))
    markLessonCompleted(`daily-${today}`)
    toast.success('Daily lesson completed! 🎉')
  }, [markLessonCompleted])

  const updateProfile = useCallback((updates) => {
    setProfile((prev) => ({ ...prev, ...updates }))
  }, [])

  const bestQuizScore = useMemo(() => {
    if (!quizScores.length) return 0
    return Math.max(...quizScores.map((q) => q.percentage || 0))
  }, [quizScores])

  const quizAverage = useMemo(() => {
    return average(quizScores.map((q) => q.percentage || 0))
  }, [quizScores])

  const completionPercent = useMemo(() => {
    return percentage(progress.learnedWords.length, vocabulary.length)
  }, [progress.learnedWords])

  const unlockedAchievements = useMemo(() => {
    const stats = {
      lessonsCompleted: progress.completedLessons.length,
      wordsLearned: progress.learnedWords.length,
      streak: progress.streak,
      bestQuizScore,
      favoritesCount: favorites.length,
    }
    return achievementsList.filter((a) => a.condition(stats)).map((a) => a.id)
  }, [progress, bestQuizScore, favorites])

  // Persist unlocked achievements when they change
  useEffect(() => {
    setProgress((prev) => {
      const newlyUnlocked = unlockedAchievements.filter(
        (id) => !(prev.unlockedAchievements || []).includes(id)
      )
      if (!newlyUnlocked.length) return prev
      newlyUnlocked.forEach((id) => {
        const achievement = achievementsList.find((a) => a.id === id)
        if (achievement) toast.success(`Achievement unlocked: ${achievement.title}!`, { icon: achievement.icon })
      })
      return {
        ...prev,
        unlockedAchievements: [
          ...new Set([...(prev.unlockedAchievements || []), ...unlockedAchievements]),
        ],
      }
    })
  }, [unlockedAchievements])

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress })
    setQuizScores([])
    toast.success('Progress reset')
  }, [])

  const resetAll = useCallback(() => {
    clearAllAppData()
    setProgress({ ...defaultProgress })
    setFavorites([])
    setNotes({})
    setQuizScores([])
    setProfile({ ...defaultProfile })
    setSelectedLanguageState('spanish')
    toast.success('All data cleared')
  }, [])

  const exportData = useCallback(() => exportLearningData(), [])

  const importData = useCallback((data) => {
    importLearningData(data)
    setSelectedLanguageState(getItem(storageKeys.language, 'spanish'))
    setProgress({ ...defaultProgress, ...getItem(storageKeys.progress, {}) })
    setFavorites(getItem(storageKeys.favorites, []))
    setNotes(getItem(storageKeys.notes, {}))
    setQuizScores(getItem(storageKeys.quizScores, []))
    setProfile({ ...defaultProfile, ...getItem(storageKeys.profile, {}) })
    toast.success('Data imported successfully')
  }, [])

  const value = {
    languages,
    selectedLanguage,
    setSelectedLanguage,
    languageMeta,
    progress,
    favorites,
    notes,
    quizScores,
    profile,
    updateProfile,
    markWordLearned,
    unmarkWordLearned,
    markLessonCompleted,
    markGrammarCompleted,
    toggleFavorite,
    clearFavorites,
    saveNote,
    deleteNote,
    addQuizScore,
    addPracticeScore,
    completeDailyLesson,
    bestQuizScore,
    quizAverage,
    completionPercent,
    unlockedAchievements,
    resetProgress,
    resetAll,
    exportData,
    importData,
    recordStudyActivity,
    sidebarOpen,
    setSidebarOpen,
    isFavorite: (id) => favorites.includes(id),
    isLearned: (id) => progress.learnedWords.includes(id),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
