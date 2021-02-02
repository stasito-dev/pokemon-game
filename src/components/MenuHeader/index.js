import { useState } from "react";
import Menu from "../Menu"
import Navbar from "../Navbar"

const MenuHeader = () => {
    const [isActive, setActive] = useState(true);
    const handleToggleActive = (isActive, setActive) => {
        console.log('####: <MenuHeader />');
        setActive(!isActive);
    }
    return (
        <>
            <Menu onToggleActive={() => handleToggleActive(isActive, setActive)} />
            <Navbar onToggleActive={() => handleToggleActive(isActive, setActive)} />
        </>
    )
}

export default MenuHeader;