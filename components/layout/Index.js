import Head from "next/head"
import Email from "../email/Email"
import Footer from "../footer/Index"
import Navbar from "../navbar/Index"
import SocialNetwork from "../social/Index"


const MainWrapper = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rodrigo Manríquez - Front-end Developer</title>
        <meta name="description" content="Portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      {children}
      <SocialNetwork />
      <Email />

      <Footer />
    </>
  )
}

export default MainWrapper
