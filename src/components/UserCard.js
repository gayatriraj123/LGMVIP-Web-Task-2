import React from 'react';
import styled from 'styled-components';
import "../App.css"

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background:#be6594;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;

const UserCard = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.first_name} />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
    </Card>
  );
};

export default UserCard;
