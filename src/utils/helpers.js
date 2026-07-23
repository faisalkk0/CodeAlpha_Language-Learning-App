/**
 * Shared helper utilities for the Language Learning App.
 */

/** Shuffle array (Fisher–Yates), returns new array */
export function shuffleArray(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/** Pick n random unique items */
export function pickRandom(array, n) {
  return shuffleArray(array).slice(0, Math.min(n, array.length))
}

/** Format date as YYYY-MM-DD (local) */
export function todayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** Difference in calendar days between two YYYY-MM-DD keys */
export function daysBetween(a, b) {
  if (!a || !b) return Infinity
  const da = new Date(`${a}T00:00:00`)
  const db = new Date(`${b}T00:00:00`)
  return Math.round((db - da) / (1000 * 60 * 60 * 24))
}

/**
 * Update streak given last study date and current streak.
 * Returns { streak, lastStudyDate, isNewDay }
 */
export function updateStreak(lastStudyDate, streak) {
  const today = todayKey()
  if (lastStudyDate === today) {
    return { streak: streak || 0, lastStudyDate: today, isNewDay: false }
  }
  const gap = daysBetween(lastStudyDate, today)
  if (gap === 1) {
    return { streak: (streak || 0) + 1, lastStudyDate: today, isNewDay: true }
  }
  return { streak: 1, lastStudyDate: today, isNewDay: true }
}

export function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}

export function percentage(part, total) {
  if (!total) return 0
  return Math.round((part / total) * 100)
}

export function average(numbers) {
  if (!numbers?.length) return 0
  const sum = numbers.reduce((a, b) => a + b, 0)
  return Math.round(sum / numbers.length)
}

export function downloadJSON(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function searchFilter(items, query, fields) {
  const q = query.trim().toLowerCase()
  if (!q) return items
  return items.filter((item) =>
    fields.some((field) => String(item[field] ?? '').toLowerCase().includes(q))
  )
}

/** Deterministic daily seed from date string */
export function dailySeed(dateStr = todayKey()) {
  let hash = 0
  for (let i = 0; i < dateStr.length; i += 1) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

/** Seeded pseudo-random picker for daily lessons */
export function seededPick(array, count, seed) {
  const arr = [...array]
  let s = seed
  const rand = () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.slice(0, count)
}

export function classNames(...parts) {
  return parts.filter(Boolean).join(' ')
}
