import Counter from './Counter'
import Products from './Products'
import Form from './Form'
import Home from './Home'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'

function App() {
  
  // A partir du return j'affiche le JSX 
  // -> Le JS qui ressemble à du HTML pour nous faciliter la vie
  return (

    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
