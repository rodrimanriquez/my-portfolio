import React from "react"
import NavDarkMode from "./navbarDarkMode/Index.js"
import NavLinks from "./navbarLinks/Index"
import NavbarBrand from "./navbarBrand/Index"
import NavbarBtn from "./navbarBtn/Index"
import useToggle from "../../hooks/useToggle"
import useTheme from "../../hooks/useTheme"

import styles from "./Navbar.module.css"

const Navbar = () => {
  const [themeSelected, handleToggle] = useTheme()

  const [isOpen, toggle] = useToggle()
  return (
    <nav className={`${styles.navbar}`}>
      <NavbarBrand />
      
      <NavLinks isOpen={isOpen} onClick={toggle} />

      <div className={styles.wrapperBtns}>
        <NavDarkMode onClick={handleToggle} themeSelected={themeSelected} />
        <NavbarBtn onClick={toggle} isOpen={isOpen} />
      </div>
    </nav>
  )
}

export default Navbar
