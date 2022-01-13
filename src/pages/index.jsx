import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

// markup
const IndexPage = () => {
  return (
    <main>
      <Header/>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <Footer/>
    </main>
  )
}

export default IndexPage
