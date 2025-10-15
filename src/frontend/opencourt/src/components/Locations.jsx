import { useState } from 'react'

function Locations(){
    const [locations, setLocations] = useState([]);
    const [formData, setFormData] = useState({
        location_name: "",
        address: ""
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
            const res = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:3000/locations`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
        })

        const data = await res.json();
            if (data.error) {
                setError("Invalid Input");
        }

        setFormData({location_name: "", address: ""});
        } catch (err) {
            console.error(err);
        }
    }
  
    const onLocationsClick = async () => {
        try {
            const result = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:3000/locations`);
            let data = await result.json();
            setLocations(data);
        } catch (error) {
            console.log(error)
        }
    }
  
    return(
        <>
            <h2>Locations</h2>
            <button onClick={onLocationsClick}>All Locations</button>
            <ul>
                {locations.map((location)  => (
                    <li key={location.location_id}><b>#{location.location_id}</b> {location.location_name}, {location.address}</li>
                ))}
            </ul>
            <hr></hr>

            <h3>Add a Location</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Location Name:</label>
                <input 
                    type="text" 
                    name="location_name"
                    value={formData.location_name}
                    onChange={handleChange}
                    onFocus={() => error && setError("")}
                />
                </div>

                <div>
                <label>Address:</label>
                <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onFocus={() => error && setError("")}
                />
                </div>
                <em>{error}</em>
                <br />
                <button type="submit">Add Location</button>
            </form>
        </> 
      )
  }

export default Locations;