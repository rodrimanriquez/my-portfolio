import { IconAddress, IconEmail, IconPhone } from "../../constants/icons"
import textStyle from "../../styles/Text.module.css"
import Button from "../button/Index"
import styles from "./SectionContact.module.css"

const SectionContact = () => {
  return (
    <section id="contact" className={styles.contactWrapper}>
      <h1 className={textStyle.textTitle}>Contacto</h1>
      <div className={styles.contactContent}>
        <form className={styles.contactForm}>
          <label className={styles.contactLabel} form="name">
            Nombre
          </label>
          <input className={styles.contactInput} type="text" id="name" />

          <label className={styles.contactLabel} form="name">
            Correo electrónico
          </label>
          <input className={styles.contactInput} type="text" id="name" />

          <label className={styles.contactLabel} form="name">
            Mensaje
          </label>
          <textarea className={styles.contactTextArea} type="text" id="name" rows="6"/>

          <Button as="button" variant="primary" type="submit">
            Enviar
          </Button>
        </form>

        <div>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoIcon}>
              <IconAddress />
            </div>
            <p>Talca, Chile</p>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoIcon}>
              <IconEmail />
            </div>
            <p>+56974489986</p>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoIcon}>
              <IconPhone />
            </div>
            <p>rmanriquezgonzal@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact
