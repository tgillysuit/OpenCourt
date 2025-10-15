// import './App.css'
import './Temp.css'
import Games from './components/Games'
import Locations from './components/Locations'
import Users from './components/Users'



function App() {

  return (
    <>
      <h1>Open Court</h1>

      <section className="users-section">
        <Users />
      </section>

      <section className="locations-section">
        <Locations />
      </section>

      <section className="games-section">
        <Games />
      </section>

      
      
    </>
  )
}

export default App
