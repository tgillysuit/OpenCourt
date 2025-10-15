import { useState } from 'react'

function Games(){
    const [games, setGames] = useState([]);
    const [formData, setFormData] = useState({
        game_name: "",
        location_id: ""
    });
    const [error, setError] = useState("");

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
        const res = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:3000/games`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })

        const data = await res.json();
        if (data.error) {
            setError("Invalid Input");
        }
        
        setFormData({game_name: "", location_id: ""});
        } catch (err) {
        console.error(err);
        }
    }

    const onGamesClick = async () => {
        try {
            const result = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:3000/games`);
            let data = await result.json();
            setGames(data);
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
            <h2>Games</h2>
            <button onClick={onGamesClick}>All Games</button>
            <ul>
                {games.map((game) => (
                    <li key={game.game_id}>{game.game_name} at location {game.location_id}</li>
                ))}
            </ul>
            <hr></hr>

            <h3>Add a Game</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Game Name:</label>
                <input 
                    type="text" 
                    name= "game_name"
                    value={formData.game_name}
                    onChange={handleChange}
                    onFocus={() => error && setError("")}
                />
                </div>

                <div>
                <label>Location ID:</label>
                <input 
                    type= "number" 
                    name= "location_id"
                    value={formData.location_id}
                    onChange={handleChange}
                    onFocus={() => error && setError("")}
                />
                </div>
                <em>{error}</em>
                <br />
                <button type="submit">Add Game</button>
            </form>
        </> 
    )
}

export default Games;