import * as React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div className="container-menu">
    <Link to="/contato" activeStyle={{ color: "red", fontWeight: "bold" }} style={{ textDecoration: "none", padding: "0.5rem 2rem", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer"}}>Formulário</Link>
    <Link to="/galeria" activeStyle={{ color: "red", fontWeight: "bold" }} style={{ textDecoration: "none", padding: "0.5rem 2rem", backgroundColor: "purple", color: "white", border: "none", cursor: "pointer"}}>Galeria</Link>
  </div>
)

export default Menu