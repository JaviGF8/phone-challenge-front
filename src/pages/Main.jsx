import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import PhonesPage from '../containers/phones';
import PhoneInfoPage from '../containers/phoneinfo';

const Main = () => (
  <main>
    <div className="fadein">
      <h1 className="center-text">Phone Challenge</h1>
      <Switch>
        <Route exact component={PhoneInfoPage} path="/phone" />
        <Route component={PhonesPage} />
      </Switch>
    </div>
  </main>
);

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
