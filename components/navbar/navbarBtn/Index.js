import styles from "./NavbarBtn.module.css"

const NavbarBtn = ({ onClick, isOpen }) => {
  const handleOpen = isOpen ? "open" : "close"

  return (
    <div className={styles.btnBurguer} onClick={onClick}>
      <div className={`${styles.line1} ${styles[handleOpen]}`}></div>
      <div className={`${styles.line2} ${styles[handleOpen]}`}></div>
    </div>
  )
}

export default NavbarBtn
