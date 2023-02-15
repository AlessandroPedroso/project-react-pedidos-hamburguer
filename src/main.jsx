import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import GlobalStyles from './Styles/GlobalStyles';

import Route from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Route />
    <GlobalStyles/>
  </React.StrictMode>,
)
