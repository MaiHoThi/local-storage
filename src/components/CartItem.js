import  React, {Component} from 'react';
import './style.css';
class CartItem extends Component{
    render()
    {
        return(
            <div className="ProductItem">
            <p>{this.props.item.name}</p>
            <p>{this.props.item.price}</p>
            <p>{this.props.item.quantity}</p>
            <button onClick={this.props.onDeleteClick}>Delete</button>
            </div>
        );
    }
}
export default CartItem;