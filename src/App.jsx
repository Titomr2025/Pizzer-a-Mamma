function App() {
  return (
    <div>
       <h1 style={{ color: 'red', fontSize: '2rem', textAlign: 'center', padding: '2rem' }}>
         GITHUB PAGES TEST - Si ves esto funciona
       </h1>
       <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f0f0f0' }}>
         <h2>Formulario de Login</h2>
         <form>
           <div>
             <label>Email:</label>
             <input type="email" placeholder="test@test.com" />
           </div>
           <br />
           <div>
             <label>Password:</label>
             <input type="password" placeholder="password" />
           </div>
           <br />
           <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
             ENVIAR
           </button>
         </form>
       </div>
    </div>
  )
}

export default App
