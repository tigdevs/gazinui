import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GazinProvider } from '@tigdevs/gazinui'

ReactDOM.render((
  <GazinProvider>
    <App />
  </GazinProvider>
), document.getElementById('root'))
