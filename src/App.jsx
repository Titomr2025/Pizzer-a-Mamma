import './App.css'
import Navbar from './Componentes/Navbar'
import Home from './Componentes/Home'
import Footer from './Componentes/Footer'
import Register from './Componentes/Register'
import Login from './Componentes/Login'

function App() {

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
       <Navbar />
       <div style={{ flex: 1, padding: '2rem 0' }}>
         {/* <Home /> */}
         {/* <Register /> */}
         <Login />
       </div>
       <Footer />
    </div>
  )
}

export default App
