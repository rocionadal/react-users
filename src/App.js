import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      name: 'Rocio Nadal',
      age: '22',
    },
  ]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => [
      { name: userName, age: userAge, id: Math.random().toString() },
      ...prevUsersList,
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
