import s from '../../components/Header/Header.module.css'

const GamePage = ({onChangePage}) => {
    const handleClick = (onClickButton) => {
        console.log('####: <App /> component!');
        onChangePage && onChangePage('app');
    }

    return (
        <div>
            <p>
                This is Game Page!!!
            </p>
            <a href="#home" className={s.button} onClick={handleClick} >Return to HomePage</a>
        </div>
    );
}

export default GamePage;