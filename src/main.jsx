import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FormDataProvider } from './Context/FormGlobalContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <FormDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FormDataProvider>,
)
