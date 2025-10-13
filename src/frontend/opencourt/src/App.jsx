import './App.css'
import { useState } from 'react'



function App() {

  console.log(import.meta.env.VITE_FRONTEND_IP)

  // state
  const [games, setGames] = useState();

  // handle game button click
  const onGamesClick = async () => {
    try {
      const result = await fetch(`http://${import.meta.env.VITE_FRONTEND_IP}:3000/games`); //TODO: .env variable here
      const data = await result.json();
      
      setGames(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Open Court</h1>
      <h2>Add a Game</h2>
      <button onClick={onGamesClick}>All Games</button>
      <pre>{JSON.stringify(games, null, 2)}</pre>
      <form>
        <input type="text" name="gameId" value="Add Game Here" />
        <button type="submit">Add Game</button>
      </form>
    </>
  )
}

export default App
