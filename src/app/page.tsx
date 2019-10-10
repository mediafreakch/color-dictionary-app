import React from 'react'
import Typography from '@material-ui/core/Typography'

import ProductManager from '../products'
import DictionaryManager from '../color-dictionary'

import logo from './logo.png'
import './page.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="Logo" />
        <Typography variant="subtitle1" gutterBottom>
          Color Dictionary
        </Typography>
      </header>
      <main className="main">
        <div className="content">
          <DictionaryManager />
          <ProductManager />
        </div>
      </main>
    </div>
  )
}

export default App
