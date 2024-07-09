import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #41183a;
  padding: 10px 20px;
  color: white;
`;

const BrandName = styled.h1`
  font-size: 1.5em;
`;

const Button = styled.button`
  background: #b067a3;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    background: white;
    color:black;
  }
`;

const Navbar = ({ fetchUsers }) => {
  return (
    <NavbarContainer>
      <BrandName>Lets Grow More</BrandName>
      <Button onClick={fetchUsers}>Get Users</Button>
    </NavbarContainer>
  );
};

export default Navbar;
