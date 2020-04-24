import React, { useState } from 'react';
import './App.css';
import UserListContainer from './containers/UserListContainer.js';
import UserAddressesContainer from './containers/UserAddressesContainer.js';

const App = () => {

  const [selectedUserId, setSelectedUserId] = useState(null);

  const setSelectedUser = (userId) => {
    setSelectedUserId(userId)
  }

  return (
    <div className="App">
      <UserListContainer
        setSelectedUser={setSelectedUser}
      />
      <UserAddressesContainer selectedUserId={selectedUserId} />
    </div>
  );
}

export default App;
