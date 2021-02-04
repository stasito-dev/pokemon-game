import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import Footer from './components/Footer/Footer';
import MenuHeader from './components/MenuHeader';
import GamePage from './routes/Game';
import HomePage from './routes/Home';

import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/')
  console.log('####: match', match)
  return (
    <Switch>
      <Route path="/404" render={() => (
        <h1>404 Not Found</h1>
      )} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, {
            [s.isHomePage]: match.isExact
          })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" render={() => (
                <h1>This is Page ABOUT!</h1>
              )} />
              <Route render={() => (
                <Redirect to="/404" />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>

    </Switch>
  )
}

export default App;