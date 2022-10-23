import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = ({onclick}) => {
    const state = useSelector((state)=> state.addItems)
    console.log(state)
    return (
        <div onClick = {onclick} className="btn-carts">
          <Link to = "/cart" className = "btn-cart" > 
          Cart
          <span className = "fa fa-shopping-cart "></span>
            ({state.length})
              
              </Link>  
        </div>
    )
}

export default CartBtn
