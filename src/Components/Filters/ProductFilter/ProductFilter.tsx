import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import {  filterProducts, filterProductsFromExpensive, getProductByParams, getProducts } from '../../../store/products/actions';
import '../ProductFilter/productFilter.css';
import { ProductsState, Product } from '../../../store/products/types';


interface IProductFilterProps
{
    getProducts: typeof getProducts
    filterProducts: typeof filterProducts
    filterProductsFromExpensive: typeof filterProductsFromExpensive
    getProductByParams: typeof getProductByParams
    checked: boolean
    products: ProductsState
    onChange:  React.FormEvent<HTMLInputElement>
    
}

interface IProductFilterState
{
    checked?: boolean;
    value?: string
    tmNamesList: string[]
    product?:  any
    id?: string,
    type?: string,
    price?: string,
    name?: string,
    weight?: string

}


export class ProductFilter extends React.Component<IProductFilterProps, IProductFilterState> {
constructor(props: IProductFilterProps)
{
    super(props)
    this.state ={
        id: '',
        type: '',
        price: '',
        name: '',
        weight: '',
        checked: false,
        value: '',
        tmNamesList:[],
        product: {name: '', price: '', weight:''}
    }
}

     componentDidMount (){

    }

  handleFromChiperPriceClick = () => {
    this.props.filterProducts()
    this.setState({ checked: !this.state.checked });
  }

  handleFromExpensivePriceClick = () => {
    this.props.filterProductsFromExpensive()
    this.setState({ checked: !this.state.checked });
  }

  changeName =  (event: any) => {
    this.setState({name: event.target.value})
  }

  changeWeihgt =  (event: any) => {
    this.setState({weight: event.target.value})
  }

  changePrice =  (event: any) => {
    this.setState({price: event.target.value})
  }

  search = () =>{
      this.setState({product: 
        {
         id: null,
         name: this.state.name,
         price: this.state.price, 
         weight: this.state.weight,
         description: '',
         type: '',
         color: ''
        }})
    this.props.getProductByParams(this.state.product);
  }

  resetSettings = () =>{
      this.props.getProducts();
  }

    render(){
        const {product} = this.state;
        console.log(product)
        return(
            <div className="product-filter-container">
                <div className="checkbox-input">
                    <input type="checkbox"  onChange={this.handleFromChiperPriceClick}/>
                        <label>От дорогих к дешевым</label>
                </div>
                <div className="checkbox-input">
                <input type="checkbox"  onChange={this.handleFromExpensivePriceClick}/>
                    <label>От дешевых к дорогим</label>
                </div> 
                <label>Производитель: </label>
                    <select onChange={(e) =>this.changeName(e)}>
                        {this.props.products.products.map((val: Product) => 
                            <option value={val.name}>{val.name}</option>
                        )}
                    </select>
                    <label>Вес: </label>
                    <select onChange={(e) =>this.changeWeihgt(e)}>
                        {this.props.products.products.map((val: Product) => 
                            <option value={val.weight}>{val.weight}</option>
                        )}
                    </select>
                    <label>Цена: </label>
                    <select onChange={(e) =>this.changePrice(e)}>
                        {this.props.products.products.map((val: Product) => 
                            <option value={val.price}>{val.price}</option>
                        )}
                    </select>
                    <button className="add-company-btn" onClick={() => this.search()}>Поиск</button>
                    <button className="add-company-btn" onClick={() => this.resetSettings()}>Сброс настроек</button>
            </div>
            
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    products: state.products
  });
  
  export default connect(
    mapStateToProps,
    {
        filterProducts, filterProductsFromExpensive,
        getProductByParams, getProducts
    }
  )(ProductFilter as any);
