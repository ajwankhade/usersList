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
        {
          selectedUserId ?
            <UserAddressesContainer
              key={`user_${selectedUserId}`}
              selectedUser={selectedUser}
              selectedUserId={selectedUserId}
            />
            :
            <div style={{ width: '100%' }}>
              <h2 style={{ color: '#666', textAlign: 'center' }}>
                No user selected
				      </h2>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
