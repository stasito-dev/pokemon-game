import s from './Header.module.css'

const Header = ({ title, descr, onClickButton }) => {
    const handleClick = () => {
        console.log('####: <Header /> component!');
        onClickButton && onClickButton('game');
    }
    
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <a href="#game" className={s.button} onClick={handleClick}>Start Game</a>
            </div>
        </header>
    )
}

export default Header;