import cn from 'classnames';
import { useState } from 'react';
import s from './style.module.css';

const Navbar = ({ onToggleActive }) => {
    const [isActive, setActive] = useState(false);
    // const activeClass = s.active;
    // const styleMenuButton = s.menuButton;

    const handleClick = (e) => {
        console.log('####: <Navbar />')
        setActive(!isActive);
        onToggleActive && onToggleActive((isActive, setActive) => setActive(!isActive));

    }
    return (
        <nav id="navbar">
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                {/* cn(s.menuButton, s.active) */}
                <a href="#menu" onClick={handleClick} className={cn(s.menuButton, (isActive && s.active))}>
                    <span />
                </a>
            </div>
        </nav >
    );
}

export default Navbar;