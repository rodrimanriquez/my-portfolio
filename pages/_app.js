import MainWrapper from "../components/layout/Index"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <MainWrapper>
      <Component {...pageProps} />
    </MainWrapper>
  )
}

export default MyApp
