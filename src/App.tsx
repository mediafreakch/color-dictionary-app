import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Manager as ProductManager } from './products'
import { ColorDictionaryContainer } from './color-dictionary'

const App: React.FC = () => {
  return (
    <div className="App">
      <header></header>
      <main>
        <ColorDictionaryContainer />
        <ProductManager />
      </main>
    </div>
  )
}

export default App
