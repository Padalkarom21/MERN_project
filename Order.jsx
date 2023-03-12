import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import styled from 'styled-components';
const Container=styled.div`
 background-color:lightgrey;
padding:5px;
`
const Button=styled.div`
 padding:15px;
 background-color:green;
 color:white;
 margin: 100px auto;
 width:10%;
 border-radius:10px;
 word-spacing:5px;
  `
  const Description=styled.p`
  padding:15px;
  font-family:roboto;
  font-size:20px
  
  `
  const Image=styled.img`
  
  margin:auto 50px;
  `
  
const Order = () => {
  return (
    <>
       <Container>
       <h1>Hydrabadi Biryani</h1>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi sequi eveniet labore voluptates! Modi aliquid ab aperiam voluptatem voluptatibus itaque velit architecto quasi? Earum doloremque adipisci quas velit quod beatae quam obcaecati amet!</Description>
        <Image src="https://www.shutterstock.com/image-photo/dum-handi-chicken-biryani-prepared-600w-2000023562.jpg"/>
        <StarRateIcon/>
<StarRateIcon/>
<StarRateIcon/>
<StarHalfIcon/>
        <Button>Order Now</Button>
      </Container>
    </>
  )
}

export default Order