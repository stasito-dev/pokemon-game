import cn from 'classnames';
import s from './style.module.css';

const Navbar = ({ open, setOpen }) => {

    return (
        <nav id="navbar">
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a href="#menu" onClick={() => setOpen(!open)} className={cn(s.menuButton, (open && s.active) )}>
                    <span />
                </a>
            </div>
        </nav >
    );
}

export default Navbar;