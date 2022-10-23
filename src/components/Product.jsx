import React from 'react';
import  DATA  from '../Data';
import { Link } from 'react-router-dom';

import {motion} from 'framer-motion';
import { pageAnimation} from "./Animation"
const Product = () => {

    const cardItem = (item) => {
        return(
            <div class="card my-5 py-4" key = {item.id} style={{width: "18rem", border: "1px solid transparent", "border-radius": "10px"}}>
                <motion.div exit = "exit" variants={pageAnimation} initial ="hidden" animate = "show">
                <img src= {item.img} class="card-img-top" alt= {item.title}/>
                <div class ="card-body text-center">
                <h5 class ="card-title">{item.title}</h5>
                <p className ="lead">${item.price}</p>
                <Link to= {`/products/${item.id}`} class ="btn btn-outline-primary">Buy Now</Link>
                </div>
            </motion.div>
            </div>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                      <h1>Products</h1>
                        <hr/>
                        <div className='sideNotes'>
                      <h5>Flash sales</h5>
                      <h5>Free Delivery</h5>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row justify-content-around">
                 {DATA.map(item => (
                     cardItem(item)
                 ))}
                </div>
            </div>
        </div>
    )
}

export default Product
