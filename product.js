import React from 'react'
import './product.css';

const Product = (props) => {
  
   return <> 
   <div>
    <div id={props.post.style}>  
    <div>
            <div id='roundSame'>
            <text className={props.className}>{props.post.title}</text>
            <div><text className={props.className1}>{props.post.price}$</text></div>
            <text className={props.className2}>{props.post.description} </text>
            <div><text className={props.className3}>In Store</text></div>
            <div><text className={props.className4}>{props.post.count}200</text></div>
            </div>
        </div>
    </div>
    
  </div>
</>
  }


export default Product