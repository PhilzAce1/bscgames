import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CoinFlip from './pages/CoinFlip';
import Faq from './pages/Faq';
// import Home from './pages/Home';
import RollDice from './pages/RollDice';
import TwoDice from './pages/TwoDice';
import Demo from './pages/Demo';
import ConditionalDesignLib from './components/ConditionalDesignLib';
function App() {
  return (
    <ConditionalDesignLib>
      <Switch>
        <Route exact path="/" component={Demo} />
        <Route path="/coinflip" component={CoinFlip} />
        <Route path="/rolldice" component={RollDice} />
        <Route path="/faq" component={Faq} />
        <Route path="/twodice" component={TwoDice} />
        <Route path="/demo" component={Demo} />
      </Switch>
    </ConditionalDesignLib>
  );
}

export default App;
