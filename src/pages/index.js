import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to Design and Code with Gatsby</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, id!
        </p>
        <a href="#">Watch the video</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
