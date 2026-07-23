/**
 * LocalStorage helpers for Language Learning App persistence.
 */

const PREFIX = 'lla_'

const KEYS = {
  theme: `${PREFIX}theme`,
  language: `${PREFIX}language`,
  progress: `${PREFIX}progress`,
  favorites: `${PREFIX}favorites`,
  notes: `${PREFIX}notes`,
  quizScores: `${PREFIX}quizScores`,
  profile: `${PREFIX}profile`,
  dailyLesson: `${PREFIX}dailyLesson`,
}

export const storageKeys = KEYS

export function getItem(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null || raw === undefined) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}

export function clearAllAppData() {
  Object.values(KEYS).forEach((key) => removeItem(key))
}

export const defaultProgress = {
  learnedWords: [],
  completedLessons: [],
  completedGrammar: [],
  streak: 0,
  lastStudyDate: null,
  quizHistory: [],
  practiceHistory: [],
  unlockedAchievements: [],
  dailyLessonCompleted: null,
}

export const defaultProfile = {
  username: 'Learner',
  joinDate: new Date().toISOString(),
}

/** Export all app data as a single JSON-serializable object */
export function exportLearningData() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    theme: getItem(KEYS.theme, 'light'),
    language: getItem(KEYS.language, 'spanish'),
    progress: getItem(KEYS.progress, defaultProgress),
    favorites: getItem(KEYS.favorites, []),
    notes: getItem(KEYS.notes, {}),
    quizScores: getItem(KEYS.quizScores, []),
    profile: getItem(KEYS.profile, defaultProfile),
    dailyLesson: getItem(KEYS.dailyLesson, null),
  }
}

/** Import learning data from a parsed JSON object */
export function importLearningData(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid data format')
  }
  if (data.theme) setItem(KEYS.theme, data.theme)
  if (data.language) setItem(KEYS.language, data.language)
  if (data.progress) setItem(KEYS.progress, { ...defaultProgress, ...data.progress })
  if (data.favorites) setItem(KEYS.favorites, data.favorites)
  if (data.notes) setItem(KEYS.notes, data.notes)
  if (data.quizScores) setItem(KEYS.quizScores, data.quizScores)
  if (data.profile) setItem(KEYS.profile, { ...defaultProfile, ...data.profile })
  if (data.dailyLesson !== undefined) setItem(KEYS.dailyLesson, data.dailyLesson)
  return true
}
