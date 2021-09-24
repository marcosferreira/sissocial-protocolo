import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
    </Switch>
  </BrowserRouter>
);
