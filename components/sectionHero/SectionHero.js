import Button from "../button/Index"
import styles from "./SectionHero.module.css"
import textStyle from "../../styles/Text.module.css"

const SectionHero = () => {
  return (
    <section id="hero" className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroMyNameIs}>Hola 👋, mi nombre es</h1>
        <h1 className={textStyle.textTitleXl}>Rodrigo Manríquez</h1>
        <h2 className={textStyle.textSubtitle}>
          Ingeniero informatico y Desarrollador Front-end.
        </h2>
      </div>
      <Button as="a" variant="primary" href="#aboutMe">
        Comencemos
      </Button>
    </section>
  )
}

export default SectionHero
