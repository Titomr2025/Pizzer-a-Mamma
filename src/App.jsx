import './App.css'
import Cart from './Componentes/Cart'
import Footer from './Componentes/Footer'
import Navbar from './Componentes/Navbar'
// import Home from './Componentes/Home'
// import Login from './Componentes/Login'
// import Register from './Componentes/Register'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart />
      <Footer />
    </div>
  )
}

export default App
