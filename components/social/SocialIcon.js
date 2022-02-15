import styles from "./Social.module.css"

const SocialIcon = ({ Icon }) => {
  return (
    <div className={styles.wrapperIcon}>
      <Icon />
    </div>
  )
}

export default SocialIcon
