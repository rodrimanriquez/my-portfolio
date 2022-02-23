import React from "react"
import { IconCancel } from "../../constants/icons"
import Typography from "../typography/Typography"
import styles from "./SectionContact"


const ContactModal = ({ title, message }) => {
  return (
    <div className={styles.contactModalWrapper}>
      <div className={styles.contactModalHeader}>
        <Typography as="h4" variant="title">
          {title}
        </Typography>
        <div className={styles.contactModalIcon}>
          <IconCancel />
        </div>
      </div>

      <div className={styles.contactModalBody}>
        <Typography as="p">{message}</Typography>
      </div>
    </div>
  )
}

export default ContactModal
