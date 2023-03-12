
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

import Mashurproduct from './Mashurproduct';

import Footer from './Footer';
import Slider from './Slider';
import Donation from './Donation';
const Container = styled.div`
  height: 150px;
  background-color:purple;

  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
 
`;

const SearchContainer = styled.div`
  
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
 
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family:times new  roman;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-family:times new  roman;
  paddding:10px;
  font-weight:800;
  &:hover{
   background-color:grey;
   paddding:15px;
  }
  
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo><i>LET'S SHARE</i></Logo>
        </Center>
        <Right>
          <MenuItem><NavLink to='/reg' style={{ textDecoration: 'none',color:"black"}} >REGISTER</NavLink></MenuItem>
          <MenuItem><NavLink to='/log' style={{ textDecoration: 'none',color:"black"}} >SIGN IN</NavLink></MenuItem>
          <MenuItem><NavLink to='/about' style={{ textDecoration: 'none',color:"black"}} >About</NavLink></MenuItem>
          <MenuItem><NavLink to='/menu' style={{ textDecoration: 'none',color:"black"}} >MENU</NavLink></MenuItem>
          <MenuItem><ShoppingCartIcon /></MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    <Slider/>
    <Mashurproduct />
    <Footer/>
    </Container>
  );
};

export default Navbar;