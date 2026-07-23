import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiEdit2, FiTrash2, FiSave, FiX, FiBookOpen } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { EmptyState } from '../components/AchievementCard'

export default function Notes() {
  const { notes, saveNote, deleteNote } = useLanguage()
  const [editingKey, setEditingKey] = useState(null)
  const [editContent, setEditContent] = useState('')

  const noteEntries = useMemo(
    () =>
      Object.entries(notes)
        .map(([key, content]) => ({ key, content }))
        .sort((a, b) => a.key.localeCompare(b.key)),
    [notes]
  )

  const startEdit = (key, content) => {
    setEditingKey(key)
    setEditContent(content)
  }

  const cancelEdit = () => {
    setEditingKey(null)
    setEditContent('')
  }

  const handleSave = (key) => {
    const trimmed = editContent.trim()
    if (trimmed) {
      saveNote(key, trimmed)
    } else {
      deleteNote(key)
    }
    cancelEdit()
  }

  const handleDelete = (key) => {
    if (window.confirm('Delete this note?')) {
      deleteNote(key)
      if (editingKey === key) cancelEdit()
    }
  }

  const formatKey = (key) => {
    return key
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/40">
            <FiBookOpen className="text-xl text-indigo-600 dark:text-indigo-400" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Notes</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {noteEntries.length} saved note{noteEntries.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </motion.div>

      {noteEntries.length === 0 ? (
        <EmptyState
          icon="📝"
          title="No notes yet"
          message="Save notes while studying lessons to keep track of important vocabulary, grammar rules, and personal tips."
          action={
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
            >
              <FiBookOpen size={16} />
              Start Learning
            </Link>
          }
        />
      ) : (
        <div className="space-y-4">
          {noteEntries.map((note, index) => {
            const isEditing = editingKey === note.key

            return (
              <motion.div
                key={note.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold text-slate-800 dark:text-white">{formatKey(note.key)}</h3>
                    <p className="text-xs font-semibold text-slate-400">{note.key}</p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    {!isEditing ? (
                      <>
                        <button
                          type="button"
                          aria-label="Edit note"
                          onClick={() => startEdit(note.key, note.content)}
                          className="rounded-xl p-2 text-slate-400 transition hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400"
                        >
                          <FiEdit2 size={16} />
                        </button>
                        <button
                          type="button"
                          aria-label="Delete note"
                          onClick={() => handleDelete(note.key)}
                          className="rounded-xl p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/30"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          aria-label="Save note"
                          onClick={() => handleSave(note.key)}
                          className="rounded-xl p-2 text-emerald-600 transition hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                        >
                          <FiSave size={16} />
                        </button>
                        <button
                          type="button"
                          aria-label="Cancel edit"
                          onClick={cancelEdit}
                          className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 dark:hover:bg-slate-700"
                        >
                          <FiX size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {isEditing ? (
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    rows={5}
                    className="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-emerald-900/40"
                    placeholder="Write your note..."
                  />
                ) : (
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {note.content}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
