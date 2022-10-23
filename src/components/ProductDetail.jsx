import React from 'react';
import { useParams } from 'react-router';
import DATA from '../Data';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState('Add to Cart')
    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id === proid.id);
    const product = proDetail[0];
    
    const dispatch = useDispatch();
    const handleCart = (product) => {
        if(cartBtn === 'Add to Cart') {
             dispatch(addItem(product));
            setCartBtn('Remove from Cart')
            console.log(proDetail[0]);
 } else if(cartBtn === 'Remove from Cart'){
     dispatch(delItem(product));
     setCartBtn('Add to Cart')
 }
    }
   
    return (
        <>
          <div className="container my-5 py-5">
             <div className="row">
                 <div className="col-md-6 d-flex justify-content-center mx-auto product">
                     <img src = {product.img} alt = {product.title} height = "400px"/>
                 </div>
                 <div className="col-md-6 d-flex flex-column justify-content-center ">
                     <h1 className = "display-5 fw-bold">{product.title}</h1>
                     <hr />
                     <h2 className = "my-4">${product.price}</h2>
                     <p claasname = "lead">{product.desc}</p>
                     <button onClick = {() => handleCart(product)} className = "btn btn-outline-primary">{cartBtn}</button>
                 </div>

             </div>
              </div>  
        </>
    )
    }

export default ProductDetail
