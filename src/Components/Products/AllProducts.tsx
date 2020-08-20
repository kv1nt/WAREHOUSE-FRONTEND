import React from 'react';
import '../Products/allProducts.css';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import {  getProducts } from '../../store/products/actions';
import { ProductsState, Product } from '../../store/products/types';


interface ProductsProps {
    getProducts: typeof getProducts
    products: ProductsState
  }

interface ProductsLocState {
    id: any,
    color: string,
    type: string,
    price: any,
    name: string,
    description: string,
    weight: any
  }

class AllProducts extends React.Component<ProductsProps, ProductsLocState> {
    constructor(props:ProductsProps){
        super(props)
        this.state ={
            id: '',
            color: '',
            type: '',
            price: '',
            name: '',
            description: '',
            weight: ''
        }
      }

 async componentDidMount(){
    this.props.getProducts()
  }      
    
    render(){
        const {products} = this.props;
        return (
            <>
            <div className="exists-locations-list ">
                {products.products.map((product: Product, index: number)=>
                 (<div className="location-breadcrumb" key={index+1}>
                    <div className="title">{product.name}</div>
                    <div className="item-param">Цена: {product.price}</div>
                    <div className="item-param">Вес: {product.weight}</div>
                    <div className="item-param">Вкус: {product.color}</div>
                    <div className="item-param">Тип: {product.type}</div>
                    <div className="item-param">Описание: {product.description}</div>
                </div>)
                 )}
            </div>
            </>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    products: state.products
});
    
export default connect(
    mapStateToProps,
    {
        getProducts
    }
    )(AllProducts as any);



