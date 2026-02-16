import Counter from './Counter'
import Products from './Products'
import './App.css'

function App() {
  
  // A partir du return j'affiche le JSX 
  // -> Le JS qui ressemble à du HTML pour nous faciliter la vie
  return (
    <>

      <h1 className="big-text">Page d'accueil</h1>

      <Counter />

      <Products />
    
    </>

  )
}

export default App
