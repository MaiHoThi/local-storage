import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {

    constructor(){
        super()
        this.products = JSON.parse(localStorage.getItem("products"));
        if (!this.products) {
            this.products = [];
        }
    }

    onItemClick(item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            if (!cart) {
                cart = [];
            }
            // kiem tra item exist?
            let oldItem = cart.find((element) => element.name === item.name);//element.id==item.id

            if (oldItem) {
                oldItem.quantity += 1;//Tăng số lượng quantity đã có trong cart 
            } else {
                item.quantity = 1;//Khởi tạo một biến quantity cho item
                cart.push(item);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        }
    }

    render() {

        return (

            <div>
                {this.products.map((item) =>
                 <ProductItem
                    item={item}
                    onClick={this.onItemClick(item)}
                    />)}
            </div>
        );

    }

}
export default Products;