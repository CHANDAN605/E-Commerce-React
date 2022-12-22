import { useState } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'
import AppHeader from './Components/Header'
import PageContent from './Components/PageContent'
import AppFooter from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
