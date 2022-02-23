import Button from "../button/Button.js"
import styles from "./SectionHero.module.css"
import Typography from "../typography/Typography.js"
import Link from "next/link"

const SectionHero = () => {
  return (
    <section id="hero" className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroMyNameIs}>Hola 👋, mi nombre es</h1>
        <Typography as="h1" variant="titleXl" color="primary">
          Rodrigo Manríquez
        </Typography>
        <Typography as="h2" variant="subtitle">
          Ingeniero informatico y Desarrollador Front-end.
        </Typography>
      </div>
      <Link href="/#aboutMe" passHref>
        <div>
          <Button as="button" variant="primary">
            Comencemos
          </Button>
        </div>
      </Link>
    </section>
  )
}

export default SectionHero
