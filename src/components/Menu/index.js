import cn from 'classnames';
import { useState } from 'react';
import s from './style.module.css';

const Menu = ({onToggleActive}) => {
    const [isActive, setActive] = useState(false);
    setActive(isActive);
    onToggleActive && onToggleActive(isActive, setActive) 
    return (
        // cn(s.menu-container, s.active/deactive)
        <div className={cn(s.menuContainer, isActive ? s.active : s.deactive)}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;