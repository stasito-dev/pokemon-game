import { useState } from 'react'
import GamePage from './routes/Game';
import HomePage from './routes/Home';

const App = () => {
  const [page, setPage] = useState('app');

  const handleChangePage = (page) => {
    console.log('####: <Main />');
    setPage(page);
  }

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage}/>;
    case "game":
      return <GamePage onChangePage={handleChangePage}/>;
    default:
      return <HomePage onChangePage={handleChangePage}/>;

  }
}

export default App;