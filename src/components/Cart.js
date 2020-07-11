import React, { Component } from 'react'; 

import CartItem from './CartItem';

class Cart extends Component {

    constructor(props){
        super(props);
        this.state={
            carts: JSON.parse(localStorage.getItem("cart"))
        }
       //console.log(this.state.cart);
    }

    onDeleteClick(index) {
        return(event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.splice(index, 1);
            localStorage.setItem("cart",JSON.stringify(cart));
            console.log(cart);
    }
}


    render() {

        return (

            <div>
                {this.state.carts.map((item,index) =>
                 <CartItem key={index} 
                 item={item}
                 onDeleteClick = {this.onDeleteClick(index)}
                   />)}
            </div>
        );

    }

}
export default Cart;