import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useState} from 'react'
import Data from '../component/Data'
import {NavLink} from 'react-router-dom'
import './Ourfood.css';
const Ourfood = () => {
    /* search funcnality*/

    const [detail,setDetail]=useState(Data)
    const onChangeHandle=(e)=>{
        if(e.target.value==""){
             window.location.reload(true)
             const temparr=detail
   
             setDetail(temparr)
             return
        }
   const searchresult=detail.filter(item=>item.name.toLowerCase().startsWith(e.target.value.toLowerCase()))
   setDetail(searchresult);
   }
  return (
   <>
  <div className="property">
  <div className="searches">
  <div className="logo"><i class="fa-solid fa-utensils fa-3x" style={{color:"white"}}></i>&nbsp;
  <h1><i>LET'S SHARE</i></h1></div>
  <div className="input-field"> <input onChange={onChangeHandle} className="search" placeholder='Search your choice' />
  </div>
 
  </div>
   
    <div className="row">
    {detail.map((detail)=>{

            return(
                <div className="column" key={detail._id}>
            <div className="single-product">
            
                <div className="card">


                    <div className="product-thumb">
                        <div className="product-tag">
                            best
                        </div>
                        <img src={detail.image} />
                    </div>

<div className="food-content">
    <h3>{detail.name}</h3>
    <div className="mark">
        <p>{detail.description}</p>
        
    </div>
    <div className="amount"><NavLink to='/order' style={{ textDecoration: 'none',color:"white"}}>Order Now</NavLink></div></div>
</div>

<div className="product-footer">
<div className="rating">
<span><ThumbUpIcon/></span>
</div>
<div className="price">
    <span>Price:{detail.price}.00₹</span>
</div>

<div className="star">
<p><StarRateIcon/>
<StarRateIcon/>
<StarRateIcon/>
<StarHalfIcon/></p>
</div>
</div>

              
            </div>
        </div>
            )
        })
    }
       
    </div>
   

    </div>

   
   </>



  )
}

export default  Ourfood