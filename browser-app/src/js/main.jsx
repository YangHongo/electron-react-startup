import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import AppContainer from './containers/AppContainer'

import configureMainStore from './stores/configMainStore'

const store = configureMainStore()

class Main extends Component {
    render() {
        return (
            <div>Main</div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div>Contact</div>
        )
    }
}

render(
    <Provider store={store}>
        <HashRouter>
            {/* this works for browserRouter
            <div>
                {window.location.pathname.includes('main_page.html') && <Redirect to="/" />}
            </div> */}
            <AppContainer>
                <Switch>
                    <Route exact path='/'><Main /></Route>
                    <Route path='/contact'><Contact /></Route>
                </Switch>
            </AppContainer>
        </HashRouter>
    </Provider>,

    document.getElementById('react-root')
)