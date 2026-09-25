import { useEffect, useState } from "react"

const VOWELS: Record<string, string> = { a: "@", e: "3", i: "!", o: "0", u: "#" }
const CONSONANTS: Record<string, string> = { l: "1", m: "m", n: "n", t: "7", s: "5", h: "4" }

export function toLeet(word: string) {
  return word
    .split("")
    .map((ch) => {
      const lower = ch.toLowerCase()
      if (Math.random() < 0.3) return ch
      if (VOWELS[lower]) return VOWELS[lower]
      if (CONSONANTS[lower]) return CONSONANTS[lower]
      return ch
    })
    .join("")
}

/**
 * Periodically glitches one of the given keywords into leetspeak for ~800ms
 * before resolving back. Which words have glitched persists across sessions.
 */
export function useGlitchKeywords(keywords: string[]) {
  const [glitched, setGlitched] = useState<Record<string, string>>({})

  useEffect(() => {
    const seen: string[] = JSON.parse(localStorage.getItem("acsc_glitch_words") ?? "[]")
    let pool = keywords.filter((k) => !seen.includes(k))
    if (pool.length === 0) pool = keywords

    const iv = setInterval(() => {
      const word = pool[Math.floor(Math.random() * pool.length)]
      const leet = toLeet(word)
      setGlitched((g) => ({ ...g, [word]: leet }))
      setTimeout(() => {
        setGlitched((g) => {
          const next = { ...g }
          delete next[word]
          return next
        })
      }, 800)
      const updated = [...new Set([...seen, word])]
      localStorage.setItem("acsc_glitch_words", JSON.stringify(updated))
    }, 2600)

    return () => clearInterval(iv)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords.join("|")])

  return (word: string) => glitched[word] ?? word
}
