import styles from "./Email.module.css"

const Email = () => {
  return (
    <div className={styles.emailWrapper}>
      <div className={styles.emailRotateText}>
        <a href="mailto:rmanriquez@gmail.com" className={styles.emailText}>rmanriquez@gmail.com</a>
      </div>
      <div className={styles.line}></div>
    </div>
  )
}

export default Email
