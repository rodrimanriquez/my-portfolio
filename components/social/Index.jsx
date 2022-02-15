import SocialIcon from "./SocialIcon"
import { IconGithub, IconLinkedin } from "../../constants/icons"
import styles from "./Social.module.css"

const SocialNetwork = () => {
  return (
    <div className={styles.socialWrapper}>
      <SocialIcon Icon={IconGithub} />
      <SocialIcon Icon={IconLinkedin} />
      <div className={styles.line}></div>
    </div>
  )
}

export default SocialNetwork
