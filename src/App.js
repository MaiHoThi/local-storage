import './App.css';
import Create from './components/Create';
import Cart from './components/Cart';
import Products from './components/Products';
import  React, {Component} from 'react';

class App extends Component{

  constructor(){
    super();
    this.state={
      menu:"products"
    }
   
    this.onAddProductClicked = this.onAddProductClicked.bind(this);
    this.onCartClicked = this.onCartClicked.bind(this);
    this.onCreateClicked = this.onCreateClicked.bind(this);


  }
  onCartClicked(){
    this.setState({
      menu:"cart"
    })
  }
  onAddProductClicked(){

    this.setState({
      menu:"product"
    })
  }
  onCreateClicked(){

    this.setState({
      menu:"add-product"
    })
  }
  render(){
  return (
  
    <div className="App">
      <button onClick={this.onAddProductClicked}>Products</button>
      <button onClick={this.onCartClicked}>Cart</button>
      <button onClick={this.onCreateClicked}>Create</button>
     
      {this.state.menu==="cart" ? <Cart/>:null}
      {this.state.menu==="product" ? <Products/>:null}
      {this.state.menu==="add-product" ? <Create/>:null}


 
    </div>
  );
}
}

export default App;
