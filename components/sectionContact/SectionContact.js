import textStyle from "../../styles/Text.module.css"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import styles from "./SectionContact.module.css"

const SectionContact = () => {
  return (
    <section id="contact" className={styles.contactWrapper}>
      <h1 className={textStyle.textTitle}>Contacto</h1>
      <div className={styles.contactContent}>
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  )
}

export default SectionContact
