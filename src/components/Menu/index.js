import cn from 'classnames';
import s from './style.module.css';

const Menu = ({open}) => {
    console.log('####: <Menu />');
    console.log('####: open', open)

    return (
        // cn(s.menu-container, s.active/deactive)
        <div className={cn(s.menuContainer, open ? s.active : s.deactive)}>
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