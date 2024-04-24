import React, { useState, useEffect } from 'react';
import './App.css';
import './Components/product.css';
import Product from './Components/product';
import './Components/product.css';
import Bestseller from './Components/bestSeller';
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
     fetch('https://fakestoreapi.com/products?limit=10')
        .then((response) => response.json())
        .then((data) => {
           data[0]['style'] = 'RoundedCorners1';
           data[1]['style'] = 'RoundedCorners2';
           data[2]['style'] = 'RoundedCorners3';
           data[3]['style'] = 'RoundedCorners1';
           data[4]['style'] = 'RoundedCorners2';
           data[5]['style'] = 'RoundedCorners4';
           data[6]['style'] = 'RoundedCorners5';
           data[7]['style'] = 'RoundedCorners6';
           data[8]['style'] = 'RoundedCorners4';
           data[9]['style'] = 'RoundedCorners5';
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <>
    <Bestseller/>
    {posts.map((post) => { return ( <Product 
   className={'itemTitle1'}
   className1={'itemPrice'}
   className2={'itemDesc'}
   className3={'inStore'}
   className4={'inStoreN1'}
   post={post}
   />
   ); })} 
    
   </>
       );
}

export default App;
