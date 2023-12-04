import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`


import { BrowserRouter } from 'react-router-dom';
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>

        <Auth0Provider
          domain='dev-jooh2eplg1s7cuq0.us.auth0.com'
          clientId='xlmCylckvrMsdjuRbVUvxzvnyQwNsEJK'
          authorizationParams={{redirect_uri:window.location.origin}}
        >
        <App />
        </Auth0Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)