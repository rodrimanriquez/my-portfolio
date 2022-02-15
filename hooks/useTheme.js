import { useEffect, useState } from "react"

const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState(undefined)

  const handleToggle = () => {
    darkTheme !== undefined && setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark")
        window.localStorage.setItem("theme", "dark")
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme")
        window.localStorage.setItem("theme", "light")
      }
    }
  }, [darkTheme])

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    )
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark")
  }, [])

  return [darkTheme, handleToggle]
}

export default useTheme
