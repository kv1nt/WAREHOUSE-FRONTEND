import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import {  filterProducts, filterProductsFromExpensive } from '../../../store/products/actions';
import '../ProductFilter/productFilter.css';
import { ProductsState, Product } from '../../../store/products/types';


interface IProductFilterProps
{
    filterProducts: typeof filterProducts
    filterProductsFromExpensive: typeof filterProductsFromExpensive
    checked: boolean
    products: ProductsState
}

interface IProductFilterState
{
    checked: boolean;
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
        checked: false
    }
}


  handleFromChiperPriceClick = () => {
    this.props.filterProducts()
    this.setState({ checked: !this.state.checked });
  }

  handleFromExpensivePriceClick = () => {
    this.props.filterProductsFromExpensive()
    this.setState({ checked: !this.state.checked });
  }

    render(){
        const {products} = this.props;
        console.log(products);
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
                    <select>
                        {this.props.products.products.map((val: Product) => 
                            <option value={val.name}>{val.name}</option>
                        )}
                    </select>
                    <select>
                        {this.props.products.products.map((val: Product) => 
                            <option value={val.weight}>{val.weight}</option>
                        )}
                    </select>
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
        filterProducts, filterProductsFromExpensive
    }
  )(ProductFilter as any);
