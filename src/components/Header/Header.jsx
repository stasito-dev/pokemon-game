import s from './Header.module.css';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';

const Header = ({ title, descr, onClickButton }) => {
    const history = useHistory();

    const handleClick = () => {
        console.log('####: <Header /> component!');
        onClickButton && onClickButton('game');
        history.push('/game');
    }
    
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}></div>
            <div className={s.moon}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <div className={s.button} onClick={handleClick}>
                    <Link to="game" >Start Game</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;