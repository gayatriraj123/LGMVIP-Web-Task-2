import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import "../App.css"

const GridContainer = styled.div`
  display: grid;
  
  ${'' /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */}
  gap: 20px;
  padding: 50px;
  background: #e1b2cb;
  
  ${'' /* display: grid; */}
  grid-template-columns: repeat(3, 1fr);
  ${'' /* gap: 1rem;
  padding: 2rem; */}


`;

const UserGrid = ({ users }) => {
  return (
    <GridContainer>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </GridContainer>
  );
};

export default UserGrid;
