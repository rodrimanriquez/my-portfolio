import { useState, useCallback } from "react"

const useToggle = (initialToggleValue = false) => {
  const [value, setToggleValue] = useState(initialToggleValue)

  const toggle = useCallback(() => {
    setToggleValue((value) => !value)
  }, [])

  return [value, toggle]
}

export default useToggle
