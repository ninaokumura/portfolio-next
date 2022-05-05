import React, { useState, useEffect } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'))
    setDarkMode(isDarkMode)

    if (isDarkMode) {
      document.body.classList.add('dark')
    }
  }, [])

  function toggleDarkMode() {
    setDarkMode((prevMode) => {
      const nextMode = !prevMode

      localStorage.setItem('darkMode', String(nextMode))

      if (nextMode) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
      return nextMode
    })
  }
  return (
    <div className="text-2xl">
      <button onClick={toggleDarkMode}>{darkMode ? '🌜' : '🌞'}</button>
    </div>
  )
}
