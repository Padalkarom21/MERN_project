import React from 'react'
import styled from 'styled-components'
import { Mashur } from './Data'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import './Mashur.css';
const Mashurproduct = () => {
  const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
 
  min-width: 280px;
  height: 350px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Title=styled.h1`
margin-left:10px;

`
        return (
         <>
         
           
                {
                    Mashur.map((items)=>(
                      <>
                      <Container>
                      
                      <Image src={items.image}/>
                      <Info>
                      <Icon><ShoppingCart/></Icon>
                      <Icon><FavoriteIcon /></Icon>
                      <Icon><SearchIcon /></Icon>
                      </Info>
                      <Title>{items.name}</Title>
                     
                      </Container>
                        </>
                    ))
                }
               
           
         </>
        );
      };
      
 


export default Mashurproduct













