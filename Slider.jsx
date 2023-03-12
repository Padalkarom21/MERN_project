
import{useState} from 'react'
import styled from "styled-components";
import sliderItems from './Data';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
const Container = styled.div`
  width: 100%;
  
  display: flex;
  position: relative;
  overflow: hidden;
  
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
 margin-top:130px;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
 
  display: flex;
  transition: all 1.5s ease;
  transform:translateX(${props=>props.slideIndex* -100}vw);
  
`;

const Slide = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  background:lightgrey;
  margin-top:30px;
  
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-top:25px;
  border-radius:10px;
  margin-left:15px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
    const [slideIndex,setslideIndex]=useState(0)
  const handleClick=(direction)=>{
if(direction==="left"){
setslideIndex(slideIndex>0?slideIndex-1:4)
}else{
    setslideIndex(slideIndex<4? slideIndex+1:0)
}
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
sliderItems.map((item)=>(
    <Slide >
            <ImgContainer>
              <Image src={item.image} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.name}</Title>
              <Desc>{item.description}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;