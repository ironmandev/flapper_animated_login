import React, { useRef } from 'react'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import routes from './routes'

function App(props: { state?: object }) {
  const transitionElement = useRef(null)
  const history = useHistory()
  const location = useLocation()
  if (location.pathname === '/') history.push('login', props.state)

  return (
    <>
      {routes.map(({ path, Component }) => {
        return (
          <Route key={path} path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={0}
                nodeRef={transitionElement}
                classNames={{
                  appear: 'animate__flipInY',
                  appearActive: 'animate__animated animate__slow',
                  enter: 'animate__animated animate__flipInY animate__slow',
                  enterDone: 'animate__animated animate__flipInY animate__slow'
                }}
                unmountOnExit
                appear
              >
                <div ref={transitionElement}>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        )
      })}
    </>
  )
}

export default App
