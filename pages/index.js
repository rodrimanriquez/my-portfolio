import stylesWrapper from "../components/layout/MainWrapper.module.css"
import SectionAboutMe from "../components/sectionAboutMe/SectionAboutMe"
import SectionContact from "../components/sectionContact/SectionContact"
import SectionHero from "../components/sectionHero/SectionHero"
import SectionPortfolio from "../components/sectionPortfolio/SectionPortfolio"

const Home = () => {
  return (
    <main className={stylesWrapper.mainWrapper}>
      <SectionHero />
      <SectionAboutMe />
      <SectionPortfolio />
      <SectionContact />
    </main>
  )
}

export default Home
