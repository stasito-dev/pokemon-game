import {Link} from 'react-router-dom';

import s from '../../components/Header/Header.module.css'

const GamePage = () => {
    const handleClick = (onClickButton) => {
        console.log('####: <App /> component!');
        // onChangePage && onChangePage('app');
    }

    return (
        <div>
            <p>
                This is Game Page!!!
            </p>
            <Link to="home" className={s.button} onClick={handleClick} >Return to HomePage</Link>
        </div>
    );
}

export default GamePage;