import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Menu from "../components/menu"
export default () => (
  <div style={{ color: `teal` }}>
    <Menu>
    <Link to="/"style={{ margin:"20px",}}>Home</Link>
    </Menu>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)