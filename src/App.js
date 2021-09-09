import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

// Layout
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route path="/" name="Home" component={TheLayout} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
