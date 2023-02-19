import './Navbar.css'
import Button from '../Button/Button'
import { useState } from "react";

const Navbar = () => {

    const [activePage, setActivePage] = useState("home");

    const onHomeClick = () => {
        setActivePage("home");
    }

    const onGalleryClick = () => {
        setActivePage("gallery");
    }

    const onCustomerSupportClick = () => {
        setActivePage("customer support");
    }

    return <div className="navbar">
        <p>Virtual Gallery</p>
        <div className="buttonGroup">
        <Button label="Home" onClick={onHomeClick}/>
        <Button label="Gallery" onClick={onGalleryClick}/>
        <Button label="Customer Support" onClick={onCustomerSupportClick}/>
        </div>
    </div>
}

export default Navbar