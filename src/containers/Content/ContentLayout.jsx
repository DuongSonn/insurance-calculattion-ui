import React, { Suspense } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

export default function ContentLayout(props) {
    return (
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            {props.routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <div className="site-layout-content">
                      <route.component {...props} />
                    </div>
                  )} />
              )
            })}
          </Switch>
        </Suspense>
    )
}
