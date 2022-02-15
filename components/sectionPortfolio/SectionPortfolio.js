import styles from "./SectionPortfolio.module.css"
import textStyle from "../../styles/Text.module.css"

const SectionPortfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolioWrapper}>
      <div className={styles.portfolioContent}>
        <h1 className={textStyle.textTitle}>Portafolio</h1>
      </div>
    </section>
  )
}

export default SectionPortfolio
