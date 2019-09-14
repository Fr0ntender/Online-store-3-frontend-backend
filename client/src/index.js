import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { GlobalStyle } from './styles/global.style'
import RouteHandler from './router/'
import store from './store/'

import { 
    prodUrl,
    devUrl,
    devPort
} from './etc/config.json'

const apiPrefix = process.env.NODE_ENV === 'development' ? `${devUrl}:${devPort}`
: prodUrl

const client = new ApolloClient({
    uri: `${apiPrefix}/graphql`
})


const App = () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <GlobalStyle themeColor={true} />
            <RouteHandler />
        </Provider>
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))