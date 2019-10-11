import React, { Component } from 'react'
import productLogo from 'assets/images/activity_image.jpeg';
import WishList from 'common/SVG/WishList';
export default class CatalogProducts extends Component {


    addToCartEvent = (product, final_price, uuid) => {
        const { addToCart, disableAddToCartBtn } = this.props
        addToCart(product, final_price)
        disableAddToCartBtn(uuid)
    }
    addToWishListEvent = (product, uuid) => {
        const { addToWishList, disableaddToWishList } = this.props
        addToWishList(product)
        disableaddToWishList(uuid)
    }
    render() {
        const { currentProducts, cart } = this.props
        return (
            <div className="catalog-container clearfix">
                <ul className="product-list clearfix">
                    {
                        currentProducts.map((product, index) => {
                            const indexPro = index + product.uuid;
                            const discountPrice = product.dicount;
                            const retail_price = product.retail_price.value;
                            const final_price = discountPrice > 0 ? retail_price - discountPrice : retail_price
                            return (
                                <li className="product-list-item" key={indexPro}>
                                    <article className="product" itemScope itemType="http://schema.org/Product">
                                        <figure className="product-image-wrapper">
                                            <img className="product-image" src={productLogo} alt="Product"
                                                itemProp="image" />
                                            {!product.addToWishList ?
                                                (<button
                                                    onClick={() => this.addToWishListEvent(product, product.uuid)}
                                                    className='product-wishlist-button button button-round button-wishlist'>
                                                    <span className='wishList-icon'> <WishList /></span>
                                                </button>) :
                                                (<button
                                                    className='product-wishlist-button button button-round button-wishlist btn-added-wishList'>
                                                    <span className='wishList-icon'> <WishList /></span>
                                                </button>)}

                                        </figure>
                                        <div className="product-details">
                                            <h1 className="product-title" itemProp="brand">{product.title}</h1>
                                            <p className="product-subtitle" itemProp="description">{product.description}</p>
                                            <div className="product-price" itemScope itemType="http://schema.org/Offer"> {

                                                discountPrice > 0 ? (
                                                    <>
                                                        <span className="product-price-strike">£{retail_price}</span>
                                                        <span className="product-price-discounted" itemProp="price">£{final_price}</span>
                                                    </>
                                                ) : (

                                                        <span className="product-price" itemProp="price">£{final_price}</span>

                                                    )
                                            }

                                            </div>
                                            {
                                                !product.addToCart ? (<button
                                                    onClick={() => this.addToCartEvent(product, final_price, product.uuid)}
                                                    className='product-add-to-cart button button-primary'
                                                >Add to Cart</button>) : (<button
                                                    className='product-add-to-cart button button-primary button-in-cart'
                                                >In Cart</button>)
                                            }

                                        </div>
                                    </article>
                                </li>
                            )
                        })
                    }
                </ul>

            </div >
        )
    }
}
