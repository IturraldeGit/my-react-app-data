import { useState, useEffect } from "react"

const UserList = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error()));

    }, []);

    return (
        <div>
            <h2>User List</h2>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default UserList;