import { useState } from "react";
import Menu from "../Menu"
import Navbar from "../Navbar"

const MenuHeader = () => {
    const [open, setOpen] = useState(false);

    return (
        // TODO: wrap both components in a div to add functionality that closes the menu when clicking anywhere on the screen
        <>
            <Navbar open={open} setOpen={setOpen} />
            <Menu open={open} />
        </>
    )
}

export default MenuHeader;