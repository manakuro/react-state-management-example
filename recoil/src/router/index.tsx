import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './routes'

export const Router: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} {...props}>
            {r.component}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  )
}
