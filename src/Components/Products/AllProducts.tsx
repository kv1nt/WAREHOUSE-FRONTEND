import React from 'react';
import '../Products/allProducts.css';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import {  getProducts } from '../../store/products/actions';
import { ProductsState, Product } from '../../store/products/types';
import { getProductsPhotos } from '../../store/productImage/actions';
import { ProductImage } from '../../store/productImage/types';


interface ProductsProps {
    getProducts: typeof getProducts
    getProductsPhotos: typeof getProductsPhotos
    productImage: ProductImage[]
    products: ProductsState
  }

interface ProductsLocState {
    id: any,
    color: string,
    type: string,
    price: any,
    name: string,
    description: string,
    weight: any,
    productImage: ProductImage[]
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
            weight: '',
            productImage: []
        }
      }

 async componentDidMount(){
    this.props.getProducts();
   var photos = await this.props.getProductsPhotos() as unknown as any[];
   console.log(photos)
        this.setState({productImage:photos})
    
  }      
    
    render(){
        const {products} = this.props;
        const {productImage} = this.state;
         console.log(productImage)
        return (
            <>
            <div className="exists-locations-list ">
                {products.products.length !== 0 ? products.products.map((product: Product, index: number)=>
                 (<div className="location-breadcrumb" key={index+1}>
                     {this.state.productImage.map((productImage: ProductImage, index: number)=>(
                        //  product.id === productImage.id ?
                         <img src={productImage.content} alt="Logo"  /> 
                     ))}
                    <div className="title">{product.name}</div>
                    <div className="item-param">Цена: {product.price}</div>
                    <div className="item-param">Вес: {product.weight}</div>
                    <div className="item-param">Вкус: {product.color}</div>
                    <div className="item-param">Тип: {product.type}</div>
                    <div className="item-param">Описание: {product.description}</div>
                </div>)
                 ) :
                 <div className="location-breadcrumb">
                    <div className="title">Нет совпадений ... </div> 
                 </div>
                 }
            </div>
            </>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    products: state.products,
    productImage: state.productPhotos
});
    
export default connect(
    mapStateToProps,
    {
        getProducts, getProductsPhotos
    }
    )(AllProducts as any);



