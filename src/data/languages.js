/**
 * Supported learning languages and category metadata.
 */

export const languages = [
  { id: 'english', name: 'English', nativeName: 'English', flag: '🇬🇧', speechCode: 'en-US' },
  { id: 'spanish', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', speechCode: 'es-ES' },
  { id: 'french', name: 'French', nativeName: 'Français', flag: '🇫🇷', speechCode: 'fr-FR' },
  { id: 'german', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', speechCode: 'de-DE' },
  { id: 'italian', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', speechCode: 'it-IT' },
  { id: 'japanese', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', speechCode: 'ja-JP' },
  { id: 'chinese', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', speechCode: 'zh-CN' },
  { id: 'urdu', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', speechCode: 'ur-PK' },
  { id: 'arabic', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', speechCode: 'ar-SA' },
]

export const categories = [
  { id: 'vocabulary', name: 'Vocabulary', icon: '📚', color: 'bg-emerald-100 text-emerald-700', description: 'Build your word bank' },
  { id: 'grammar', name: 'Grammar', icon: '📖', color: 'bg-sky-100 text-sky-700', description: 'Master language rules' },
  { id: 'phrases', name: 'Common Phrases', icon: '💬', color: 'bg-violet-100 text-violet-700', description: 'Everyday expressions' },
  { id: 'conversation', name: 'Daily Conversation', icon: '🗣️', color: 'bg-amber-100 text-amber-700', description: 'Speak with confidence' },
  { id: 'numbers', name: 'Numbers', icon: '🔢', color: 'bg-rose-100 text-rose-700', description: 'Count and quantify' },
  { id: 'colors', name: 'Colors', icon: '🎨', color: 'bg-pink-100 text-pink-700', description: 'Name every shade' },
  { id: 'animals', name: 'Animals', icon: '🐾', color: 'bg-lime-100 text-lime-700', description: 'Wildlife & pets' },
  { id: 'food', name: 'Food', icon: '🍽️', color: 'bg-orange-100 text-orange-700', description: 'Meals and ingredients' },
  { id: 'travel', name: 'Travel', icon: '✈️', color: 'bg-cyan-100 text-cyan-700', description: 'Navigate the world' },
  { id: 'business', name: 'Business', icon: '💼', color: 'bg-slate-100 text-slate-700', description: 'Professional language' },
  { id: 'greetings', name: 'Greetings', icon: '👋', color: 'bg-teal-100 text-teal-700', description: 'Say hello properly' },
  { id: 'family', name: 'Family', icon: '👨‍👩‍👧', color: 'bg-indigo-100 text-indigo-700', description: 'Family members' },
]

export const achievementsList = [
  {
    id: 'first_lesson',
    title: 'First Lesson',
    description: 'Complete your first lesson',
    icon: '🌱',
    condition: (p) => p.lessonsCompleted >= 1,
  },
  {
    id: 'words_50',
    title: '50 Words Learned',
    description: 'Learn 50 vocabulary words',
    icon: '📘',
    condition: (p) => p.wordsLearned >= 50,
  },
  {
    id: 'words_100',
    title: '100 Words Learned',
    description: 'Learn 100 vocabulary words',
    icon: '📗',
    condition: (p) => p.wordsLearned >= 100,
  },
  {
    id: 'streak_7',
    title: '7 Day Streak',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    condition: (p) => p.streak >= 7,
  },
  {
    id: 'quiz_master',
    title: 'Quiz Master',
    description: 'Score 90% or higher on a quiz',
    icon: '🏆',
    condition: (p) => p.bestQuizScore >= 90,
  },
  {
    id: 'vocab_expert',
    title: 'Vocabulary Expert',
    description: 'Favorite 20 or more words',
    icon: '⭐',
    condition: (p) => p.favoritesCount >= 20,
  },
]
