import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from 'src/components/Home'

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

const routes = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
  },
] as const

export type Routes = typeof routes[number]['path']
