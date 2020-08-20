import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import {  filterProducts, filterProductsFromExpensive, getProductByName, getProducts } from '../../../store/products/actions';
import '../ProductFilter/productFilter.css';
import { ProductsState, Product } from '../../../store/products/types';
import { compose } from 'redux';


interface IProductFilterProps
{
    getProducts: typeof getProducts
    filterProducts: typeof filterProducts
    filterProductsFromExpensive: typeof filterProductsFromExpensive
    getProductByName: typeof getProductByName
    checked: boolean
    products: ProductsState
    onChange:  React.FormEvent<HTMLInputElement>
}

interface IProductFilterState
{
    checked: boolean;
    value: string
    tmNamesList: string[]
}


export class ProductFilter extends React.Component<IProductFilterProps, any> {
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
        tmNamesList:[]
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

     changeName = async (event: any) => {
    let res  = await this.props.getProductByName(event.target.value);
     console.log(res.bind(this));
  }

  resetSettings = () =>{
      this.props.getProducts();
  }

    render(){
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
                    <select>
                        {this.props.products.products.map((val: Product) => 
                            <option value={val.weight}>{val.weight}</option>
                        )}
                    </select>
                    
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
        getProductByName, getProducts
    }
  )(ProductFilter as any);
