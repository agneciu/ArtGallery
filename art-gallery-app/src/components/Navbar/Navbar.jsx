import './Navbar.css'
import Button from '../Button/Button'
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ pages }) => {

    return <div className="navbar">
        <p>Virtual Gallery</p>
        <div className="buttonGroup">
        {pages?.map((page) => {
          return <Link className="navbarLinks" key={page.to} to={page.to}>{page.label}</Link>
        })}
        </div>
    </div>
}

export default Navbar