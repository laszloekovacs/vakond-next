"use client"
import { useState } from "react"
import { useHotkeys } from "react-hotkeys-hook"


export default function Home() {
  const [count, setCount] = useState(0)

  useHotkeys("a", () => setCount(c => c + 1))

  return (
    <div className="--plex-mono">
      <p>home page</p>
      <span>pressed a {count} times</span>
    </div>
  )
}
