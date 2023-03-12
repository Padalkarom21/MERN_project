import React from 'react'
import styled from "styled-components";
const Categoryitem = ({item}) => {
    const Container=styled.div`
    flex:1;
   margin:10px;
   height:70vh;
   position:relative;
   
    `
    const Image=styled.img`
    width:50vh;
    height:100%;
    object-fit:cover;
   
    `
    const Title=styled.h1`
    color:white;
    margin-bottom:20px;
    `
    const Info=styled.div`
     position:absolute;
     top:0;
     left:0;
     width:100%;
     height:100%;
     display:flex;
     align-items:center;
     justify-content:center;
     flex-direction:column;
     
    `
    const Button=styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:grey;
    `
  return (
    
      <Container>
        <Image src={item.image}/>
        <Info>
            <Title>{item.name}</Title>
            <Button>Shop Now</Button>
            
        </Info>
      </Container>
   
  )
}

export default Categoryitem
