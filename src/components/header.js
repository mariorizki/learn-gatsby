import React from "react"
import Link from "gatsby-link"
import DrawerToggleButton from "./drawerToggleButton"

import "./header.css"

const header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <div>
        <DrawerToggleButton />
      </div>

      <img src={require("../images/gatsby-icon.png")} alt="logo" width="30" />

      <Link to="/" className="header-menu">
        Menu 1
      </Link>
      <Link to="/" className="header-menu">
        Menu 2
      </Link>
      <Link to="/" className="header-menu">
        Menu 3
      </Link>
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
