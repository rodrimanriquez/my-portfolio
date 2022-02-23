import styles from "./SectionAboutMe.module.css"
import textStyle from "../../styles/Text.module.css"
import Typography from "../typography/Typography"

const SectionAboutMe = () => {
  return (
    <section id="aboutMe" className={styles.aboutMeWrapper}>
      <div className={styles.aboutMeContent}>
        <h1 className={textStyle.textTitle}>Sobre mi</h1>
        <Typography as="p" variant="normal">
          Hola 👋, mi nombre es Rodrigo, Ingeniero en informatica y disfruto
          creando aplicaciones web y moviles. Mi interes por el desarrollo movil
          nacio mientras cursaba mi segundo año de carrera. Tengo dos años de
          experiencia como desarrollador Front-end. Avance rápido hasta hoy, y
          tuve el privilegio de trabajar en una agencia asesora, una empresa
          nueva la cual confio en mi y
        </Typography>
        <div className={styles.aboutMeWrapperImage}>
          {/*           <AboutMeWrapperImage
            src="/assets/images/yo-momoji.png"
            alt="momoji de Rodrigo Manríquez"
          /> */}
        </div>
      </div>
    </section>
  )
}

export default SectionAboutMe
