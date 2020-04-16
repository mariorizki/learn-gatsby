import React from "react"
import Link from "gatsby-link"

import "./header.css"

const header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require("../images/gatsby-icon.png")} alt="logo" width="30" />
      </Link>
      <Link to="/">Menu 1</Link>
      <Link to="/">Menu 2</Link>
      <Link to="/">Menu 3</Link>
      <img
        className="LightIcon"
        src={require("../images/sun.svg")}
        alt=""
        width="30"
      />
    </div>
  </div>
)

export default header
