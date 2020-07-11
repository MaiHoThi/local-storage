import  React, {Component} from 'react';
import './style.css';
class ProductItem extends Component{

    render()
    { 
        let {onClick} = this.props;
        return(
            <div className="ProductItem">
            <p>{this.props.item.name}</p>
            <p>{this.props.item.price}</p>

            {/* <button onClick={this.props.onItemClick}>Add to cart</button> */}
            <button onClick={onClick}>Add to cart</button>
            </div>
        );
    }
}
export default ProductItem;