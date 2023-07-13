import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// importing redux store
import store from './stores/store'
// Provider 
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App />
</Provider>

)