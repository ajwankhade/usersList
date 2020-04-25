import React, { useState } from 'react';
import './App.scss';
import UserListContainer from './containers/UserListContainer.js';
import UserAddressesContainer from './containers/UserAddressesContainer.js';
import AppHeader from './components/appHeader';

const App = () => {

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const setUser = (userId, user = {}) => {
    setSelectedUserId(userId)
    setSelectedUser(user)
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="content">
        <UserListContainer
          selectedUserId={selectedUserId}
          setSelectedUser={setUser}
        />
        <UserAddressesContainer
          selectedUser={selectedUser}
          selectedUserId={selectedUserId}
        />
      </div>
    </div>
  );
}

export default App;
