import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import {store} from './redux/store'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from "@material-tailwind/react";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

        <ThemeProvider>
          <App />
        </ThemeProvider>

    </Provider>
  </React.StrictMode>,
)
