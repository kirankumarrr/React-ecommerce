import React, { Component } from 'react';
import { connect } from "react-redux";

import WishList from 'common/SVG/WishList';
import Bag from 'common/SVG/Bag';

import './Header.scss'
import Loader from 'common/Loader';


class Header extends Component {

  render() {
    const { cart, cartTotal, wishList, spinner } = this.props
    return (
      <>
        {spinner ? <Loader /> : null}
        <div className='Header'>

          <h1 className="page-title">BRAND</h1>
          <aside className="header-bag">
            <div className="header-bag-item header-bag-count">
              <div className="header-bag-price">
                £{cartTotal}
              </div>
              <span className='bag-icon'><Bag /></span>
              <span className="bag-item-counter">{cart.length}</span>
            </div>
            <div className="header-bag-item header-bag-wishlist-count">
              <span className='wishList-icon'> <WishList /></span>

              <span className="bag-item-counter">{wishList.length}</span>
            </div>
          </aside >
        </div >
      </>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.catalog.cart,
  cartTotal: state.catalog.cartTotal,
  wishList: state.catalog.wishList,
  spinner: state.catalog.spinner
});

export default connect(
  mapStateToProps,
  {}
)(Header);
