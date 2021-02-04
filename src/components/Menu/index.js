import cn from 'classnames';
import { Link } from 'react-router-dom'

import s from './style.module.css';

const MENU = [
    {
        title: 'HOME',
        to: 'home',
    },
    {
        title: 'GAME',
        to: 'game',
    },
    {
        title: 'ABOUT',
        to: 'about',
    },
    {
        title: 'CONTACT',
        to: 'contact',
    },
]

const Menu = ({ isOpen, setOpen }) => {
    console.log('####: <Menu />');
    console.log('####: isOpen', isOpen);

    return (
        // cn(s.menu-container, s.active/deactive)
        <div className={cn(s.menuContainer, {
            [s.active]: isOpen === true,
            [s.deactive]: isOpen === false
        })}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map(({ title, to }, index) => (
                            <li key={index} onClick={() => {setOpen(prevState => !prevState)}}>
                                <Link to={to}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
{/*                     <li>
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
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Menu;