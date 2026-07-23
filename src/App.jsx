import { useRef } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Lessons from './pages/Lessons'
import Flashcards from './pages/Flashcards'
import Quiz from './pages/Quiz'
import Practice from './pages/Practice'
import Grammar from './pages/Grammar'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import Progress from './pages/Progress'
import Settings from './pages/Settings'
import DailyLesson from './pages/DailyLesson'
import SearchPage from './pages/SearchPage'
import Notes from './pages/Notes'

function AppLayout() {
  const navigate = useNavigate()
  const searchTriggered = useRef(false)

  const handleSearchFocus = () => {
    searchTriggered.current = true
    navigate('/search')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <Navbar onSearchFocus={handleSearchFocus} />
      <div className="mx-auto flex max-w-7xl">
        <Sidebar />
        <main className="min-h-[calc(100vh-4rem)] flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/daily" element={<DailyLesson />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppLayout />
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'text-sm font-bold',
              style: {
                borderRadius: '16px',
                padding: '12px 16px',
              },
              success: {
                iconTheme: { primary: '#10B981', secondary: '#fff' },
              },
            }}
          />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
