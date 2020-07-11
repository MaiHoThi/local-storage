import React, { Component } from 'react';
import './style.css';
class Create extends Component {

    onAddProduct(event) {
        event.preventDefault();
        let name = event.target["name"].value;
        let price = event.target["price"].value;

        let product = {
            name: name,
            price: price
        }
        let products = JSON.parse(localStorage.getItem("products"));
        if (!products) {
            products = [];
        }

        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        console.log(products);
    }
    render() {
        return (

            <form onSubmit={this.onAddProduct} className="Create">
                <input type="text" name="name" />
                <input type="text" name="price" />
                <button>Add</button>
            </form>
        );
    }
}
export default Create;