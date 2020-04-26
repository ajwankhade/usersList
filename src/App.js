import React, { useState } from 'react';
import './App.scss';
import UserListContainer from './containers/UserListContainer.js';
import UserAddressesContainer from './containers/UserAddressesContainer.js';
import AppHeader from './components/appHeader';

const App = () => {

  const [selectedUser, setSelectedUser] = useState(null);

  const setUser = (userId, user = {}) => {
    setSelectedUser(user)
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="content">
        <UserListContainer
          selectedUser={selectedUser}
          setSelectedUser={setUser}
        />
        {
          selectedUser ?
            <UserAddressesContainer
              key={`user_${selectedUser.id}`}
              selectedUser={selectedUser}
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