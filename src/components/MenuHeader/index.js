import { useState } from "react";
import Menu from "../Menu"
import Navbar from "../Navbar"

const MenuHeader = ({bgActive}) => {
    const [isOpen, setOpen] = useState(null);

    const handleClickHamburgr = () => {
        setOpen(prevState => !prevState);
    }

    return (
        // TODO: wrap both components in a div to add functionality that closes the menu when clicking anywhere on the screen
        <>
            <Menu isOpen={isOpen} setOpen={setOpen} />
            <Navbar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClickHamburgr} />
        </>
    )
}

export default MenuHeader;