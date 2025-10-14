import { useState } from 'react'

function Games(){
    const [games, setGames] = useState([]);
    const [formData, setFormData] = useState({
        game_name: "",
        location_id: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
        const res = await fetch(`http://${import.meta.env.VITE_FRONTEND_IP}:3000/games`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })

        const data = await res.json();
        setFormData({game_name: "", location_id: ""});
        } catch (err) {
        console.error(err);
        }
        
    }

    // handle game button click 
    // TODO: Do something with this
    const onGamesClick = async () => {
        try {
        const result = await fetch(`http://${import.meta.env.VITE_FRONTEND_IP}:3000/games`);
        let data = await result.json();
        // data = JSON.stringify(data);
        setGames(data);
        } catch (error) {
        console.log(error)
        }
    }

    return(
        <>
            <h1>Games!!</h1>
            <button onClick={onGamesClick}>All Games</button>
            {/* <p>{games}</p> */}
            {console.log(games)}
            <ul>
                {games.map((game) => (
                    <li key={game.game_id}>{game.game_name} at location {game.location_id}</li>
                ))}
            </ul>
            <hr></hr>

            <h2>Add a Game</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Game Name:</label>
                <input 
                    type="text" 
                    name= "game_name"
                    value={formData.game_name}
                    onChange={handleChange}
                />
                </div>

                <div>
                <label>Location ID:</label>
                <input 
                    type= "number" 
                    name= "location_id"
                    value={formData.location_id}
                    onChange={handleChange}
                />
                </div>
            
                <button type="submit">Add Game</button>
            </form>
        </>
        
    )
}

export default Games;