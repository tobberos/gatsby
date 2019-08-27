import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"

export default () => <div style={{ color: 'purple',}}>
<Menu>
<Link to="/contact/" style={{ margin:"20px",}}>Contact</Link>
<Link to="/about-css-modules/" style={{ margin:"20px",}}>About CSS Modules</Link>
</Menu>
<h1>Hello Gatsby!!!</h1>
<p>What a world</p>
<img src="https://source.unsplash.com/random/400x200" alt="" />

</div>
