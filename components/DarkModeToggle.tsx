import React, { useState, useEffect } from 'react'

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode')
    const isDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false

    setDarkMode(isDarkMode)

    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [])

  function toggleDarkMode() {
    setDarkMode((prevMode) => {
      const nextMode = !prevMode
      localStorage.setItem('darkMode', JSON.stringify(nextMode))

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

export default DarkModeToggle
