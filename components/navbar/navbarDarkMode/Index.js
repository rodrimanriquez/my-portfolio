import { IconMoon, IconSun } from "../../../constants/icons"
import styles from "./NavbarDarkMode.module.css"

const NavDarkMode = ({ onClick, themeSelected }) => {
 
  const isVisibleSun = !themeSelected ? "visibleIcon" : "hiddenIcon"
  const isVisibleMoon = themeSelected ? "visibleIcon" : "hiddenIcon"

  return (
    <div className={`${styles.btnTheme}`} onClick={onClick}>
      <div className={`${styles.icon} ${styles[isVisibleSun]}`}>
        <IconSun />
      </div>
      <div className={`${styles.icon} ${styles[isVisibleMoon]}`}>
        <IconMoon />
      </div>
    </div>
  )
}

export default NavDarkMode
