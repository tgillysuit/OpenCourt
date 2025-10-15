import { useState } from 'react'

function Users(){
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        user_name: ""
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
        const res = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:3000/users`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })

        const data = await res.json();
        setFormData({user_name: ""});
        } catch (err) {
        console.error(err);
        }
        
    }

    const onUsersClick = async () => {
        try {
            const result = await fetch(`http://${import.meta.env.VITE_SERVER_HOST}:3000/users`);
            let data = await result.json();
            setUsers(data);
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
            <h2>Users!!</h2>
            <button onClick={onUsersClick}>All Users</button>
            <ul>
                {users.map((user) => (
                    <li key={user.user_id}>{user.user_name}</li>
                ))}
            </ul>
            <hr></hr>

            <h3>Add a User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>User Name:</label>
                <input 
                    type="text" 
                    name= "user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                />
                </div>
            
                <button type="submit">Add User</button>
            </form>
        </>
    )
}

export default Users;