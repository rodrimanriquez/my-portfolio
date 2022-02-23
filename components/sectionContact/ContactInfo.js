import React from 'react'
import { IconAddress, IconEmail, IconPhone } from "../../constants/icons"
import styles from "./SectionContact.module.css"

const ContactInfo = () => {
  return (
    <div>
    <div className={styles.contactInfo}>
      <div className={styles.contactInfoIcon}>
        <IconAddress />
      </div>
      <p>Talca, Chile</p>
    </div>
    <div className={styles.contactInfo}>
      <div className={styles.contactInfoIcon}>
        <IconPhone />
      </div>
      <p>+56974489986</p>
    </div>
    <div className={styles.contactInfo}>
      <div className={styles.contactInfoIcon}>
        <IconEmail />
      </div>
      <p>rmanriquezgonzal@gmail.com</p>
    </div>
  </div>
  )
}

export default ContactInfo