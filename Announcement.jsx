import React from 'react'
import styled from "styled-components"

const Container=styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
justify-content:center;
font-size:14px;
font-weight:500;



`
const Announcement = () => {
  return (
    <div>
      <Container>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vero doloribus blanditiis.</Container>
    </div>
  )
}

export default Announcement
