import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Provider} from 'react-redux'

import { store } from './redux/store.js'
import Counter from './Counter.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Counter/>
  </Provider>
  
)
