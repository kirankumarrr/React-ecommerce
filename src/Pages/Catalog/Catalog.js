import React, { Component } from 'react'

import './Catalog.scss'

import { connect } from "react-redux";
import { fetchCatalogProducts, addToCart, addToWishList } from 'store/catalog/action'
import Pagination from 'common/Pagination/Pagination';
import CatalogProducts from './CatalogProducts';

class Catalog extends Component {


    constructor(props) {
        super(props);
        this.state = {
            products: [],
            currentPage: 1,
            postsPerPage: 6,

        }
    }
    componentDidMount() {
        const { fetchCatalogProducts } = this.props
        fetchCatalogProducts(6, 0)
    }
    componentDidUpdate(prevProps) {
        const { catalogPoducts } = this.props
        if (prevProps.catalogPoducts !== catalogPoducts) {
            this.setState({ products: catalogPoducts })
        }
    }
    //get paginateCurrentData 
    paginateCurrentData = currentPage => this.setState({ currentPage })
    //arrow next page
    nextPage = () => {
        this.setState((prevState) => ({
            currentPage: prevState.currentPage + 1
        }));
    }
    //arrow prev page 
    prePage = () => {
        this.setState((prevState) => ({
            currentPage: prevState.currentPage - 1
        }));
    }

    //Disabling Add to Cart Btn Once its added to Cart
    disableAddToCartBtn = (euid) => {
        this.settingState(euid, 'addToCart')
    }
    //Disabling WishList Selecting Once
    disableaddToWishList = (euid) => {
        this.settingState(euid, 'addToWishList')
    }

    settingState = (euid, newKey) => {
        const { products } = this.state
        const productsIn = Object.assign([], products)
        productsIn.forEach(pro => {
            if (pro.uuid === euid) {
                pro[newKey] = true
                debugger
            }
        })
        this.setState({ products: productsIn })
    }
    genrateProducts = () => {
        //Get current Products
        const { postsPerPage, products, currentPage } = this.state
        const { addToCart, cart, addToWishList } = this.props;
        const indexOfLastPage = currentPage * postsPerPage;
        const indexOfFirstPage = indexOfLastPage - postsPerPage
        const currentProducts = products.slice(indexOfFirstPage, indexOfLastPage)

        if (currentProducts && currentProducts.length > 0) {
            return (
                <CatalogProducts
                    currentProducts={currentProducts}
                    addToCart={addToCart}
                    cart={cart}
                    disableAddToCartBtn={this.disableAddToCartBtn}
                    addToWishList={addToWishList}
                    disableaddToWishList={this.disableaddToWishList}
                />
            )
        }

    }

    render() {
        const { postsPerPage, products, currentPage } = this.state
        return (
            <><main className="catalog-page clearfix">
                {this.genrateProducts()}

            </main >
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPost={products.length}
                    paginateCurrentData={this.paginateCurrentData}
                    // paginatePerData={paginatePerData}
                    currentPage={currentPage}
                    nextPage={this.nextPage}
                    prePage={this.prePage}
                // indexOfLastPage={indexOfLastPage}
                // indexOfFirstPage={indexOfFirstPage}
                /></>
        )
    }
}


const mapStateToProps = state => ({
    catalogPoducts: state.catalog.catalogPoducts,
    cart: state.catalog.cart,
    spinner: state.catalog.spinner
});

export default connect(
    mapStateToProps,
    { fetchCatalogProducts, addToCart, addToWishList }
)(Catalog);