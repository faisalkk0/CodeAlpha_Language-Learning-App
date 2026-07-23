/**
 * Browser SpeechSynthesis API helpers for pronunciation.
 */

let currentUtterance = null

export function isSpeechSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

function pickVoice(langCode) {
  if (!isSpeechSupported()) return null
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null
  const exact = voices.find((v) => v.lang === langCode)
  if (exact) return exact
  const prefix = langCode.split('-')[0]
  return voices.find((v) => v.lang.startsWith(prefix)) || null
}

/**
 * Speak text aloud.
 * @param {string} text
 * @param {string} langCode - e.g. 'es-ES'
 * @param {object} options
 */
export function speak(text, langCode = 'en-US', options = {}) {
  if (!isSpeechSupported() || !text) return false

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = langCode
  utterance.rate = options.rate ?? 0.9
  utterance.pitch = options.pitch ?? 1
  utterance.volume = options.volume ?? 1

  const voice = pickVoice(langCode)
  if (voice) utterance.voice = voice

  if (options.onEnd) utterance.onend = options.onEnd
  if (options.onError) utterance.onerror = options.onError

  currentUtterance = utterance
  window.speechSynthesis.speak(utterance)
  return true
}

export function pauseSpeech() {
  if (!isSpeechSupported()) return
  if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause()
  }
}

export function resumeSpeech() {
  if (!isSpeechSupported()) return
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume()
  }
}

export function stopSpeech() {
  if (!isSpeechSupported()) return
  window.speechSynthesis.cancel()
  currentUtterance = null
}

export function replay(text, langCode, options = {}) {
  stopSpeech()
  return speak(text, langCode, options)
}

export function isSpeaking() {
  return isSpeechSupported() && window.speechSynthesis.speaking
}

export function isPaused() {
  return isSpeechSupported() && window.speechSynthesis.paused
}

/** Prefetch voices (Chrome loads them asynchronously) */
export function loadVoices() {
  if (!isSpeechSupported()) return Promise.resolve([])
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices()
    if (voices.length) {
      resolve(voices)
      return
    }
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices())
    }
  })
}
