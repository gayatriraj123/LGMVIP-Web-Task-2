import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    setUsers(data.data);
    setLoading(false);
  };

  return (
    <AppContainer>
      <Navbar fetchUsers={fetchUsers} />
      {loading ? <p>Loading...</p> : <UserGrid users={users} />}
    </AppContainer>
  );
}

export default App;
