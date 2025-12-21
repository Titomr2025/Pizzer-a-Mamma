import './App.css'
// import Cart from './Componentes/Cart'
import Footer from './Componentes/Footer'
import Navbar from './Componentes/Navbar'
import Home from './Componentes/Home'
// import Login from './Componentes/Login'
// import Register from './Componentes/Register'
// import Pizza from './Componentes/Pizza'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Home />
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Cart /> */}
        {/* <Pizza /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
