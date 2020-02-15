import React, {useState} from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {
  const usersData = [
    { id: 1, name: "Omi", username: "Omsi2011" },
    { id: 2, name: "SungOh", username: "Sungster2015" },
    { id: 3, name: "Sohee", username: "Cheonsa17" }
  ];

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
