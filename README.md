# Language Learning App

A modern, responsive language learning web app inspired by Duolingo, Memrise, and Babbel.

## Features

- Home dashboard with streak, progress, and stats
- Language selection (9 languages)
- Vocabulary lessons across 12 categories
- Interactive flashcards with flip animation
- Daily lessons with seeded content
- Grammar lessons (30 topics)
- Pronunciation via SpeechSynthesis API
- Favorites, notes, and search
- Quizzes and timed practice mode
- Progress charts (Recharts)
- Achievements and profile
- Dark mode (Context API + LocalStorage)
- Import / export learning data

## Tech Stack

- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Framer Motion
- Recharts
- React Hot Toast
- React Icons
- LocalStorage (no backend)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # Reusable UI
  pages/        # Route screens
  context/      # Theme & language state
  utils/        # LocalStorage, speech, helpers
  data/         # Vocabulary, grammar, phrases
```
