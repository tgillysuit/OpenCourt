import { useState } from 'react'
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

function Games(){
    const [games, setGames] = useState([]);

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

            <Container maxWidth="sm" sx={{ mt: 6 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Available Events
                </Typography>

                {games.length === 0 ? (
                    <Typography variant="body1" align="center">
                    No events yet. Create one!
                    </Typography>
                ) : (
                    <List>
                        {games.map((game, index) => (
                            <ListItem key={index} divider>
                                <ListItemText primary={`${game.game_name} at location ${game.location_id}`} />
                            </ListItem>
                            
                        ))}
                    </List>
                )}
            </Container>
        </> 
    )
}

export default Games;