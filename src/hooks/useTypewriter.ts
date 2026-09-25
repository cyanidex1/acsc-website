import { useEffect, useRef, useState } from "react"

/**
 * Types an array of lines character-by-character (25ms per char),
 * appending each finished line to `output`. Resolves `done` when finished.
 */
export function useTypewriter(lines: string[], start: boolean = true, speed = 25) {
  const [output, setOutput] = useState<string[]>([])
  const [current, setCurrent] = useState("")
  const [done, setDone] = useState(false)
  const key = lines.join("\n")

  useEffect(() => {
    if (!start) return
    setOutput([])
    setCurrent("")
    setDone(false)

    let lineIdx = 0
    let charIdx = 0
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      if (cancelled) return
      if (lineIdx >= lines.length) {
        setDone(true)
        return
      }
      const line = lines[lineIdx]
      if (charIdx < line.length) {
        charIdx += 1
        setCurrent(line.slice(0, charIdx))
        timer = setTimeout(tick, speed + Math.random() * 20)
      } else {
        setOutput((prev) => [...prev, line])
        setCurrent("")
        lineIdx += 1
        charIdx = 0
        timer = setTimeout(tick, 140)
      }
    }
    timer = setTimeout(tick, 300)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, start])

  return { output, current, done }
}

/** Rotates through status messages on an interval. */
export function useRotator(messages: string[], interval = 4000) {
  const [idx, setIdx] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  useEffect(() => {
    timer.current = setInterval(() => setIdx((i) => (i + 1) % messages.length), interval)
    return () => clearInterval(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.join("|"), interval])

  return messages[idx]
}
