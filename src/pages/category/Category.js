/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 25/02/2023 - 22:47:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import Preloader from '../../Preloader'
import style from './category.module.css'

const Category = () => {

    let { category } = useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(30);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const getCategory = (category, limit, offset) => {
        fetch("https://www.api.rhymarworld.org.ng/category/specific/?category=" + category + "&limit=" + limit + "&offset=" + offset)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res.count === 0) {
                    setProducts([]);
                    setIsLoading(false)
                } else {
                    setProducts(res.products)
                    setIsLoading(false)
                }
                return true;
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
            document.title = category.toUpperCase() + " | Rhymar world collectionz"
            getCategory(category, limit, offset);
    }, [category]);

    return (
        <>
            {isLoading ?
                <Preloader />
                :
                (
                    <>
                        <Nav />
                        <div className={style.break}></div>
                        <div>
                            <div className="container-fluid">
                                <div class="card is-transparent noBorder noShadow pb-3">
                                    <div className='card-header' style={{ textTransform: 'uppercase' }}>
                                        {category}
                                    </div>
                                    <div class="row justify-content-center p-3 noShadow noBorder">
                                        {products.map((product) => (
                                            <div className='col-10 col-sm-6 col-md-4 p-3' key={product.id}>
                                                <div className="card text-white noBorder noShadow hoverShadow">
                                                    <img className="card-img-top noBorder" src={product.image} alt="" style={{ height: '200px' }} />
                                                    <div className="card-body noBorder text-dark">
                                                        <Link to={`/products/${product.product_id}`} className="productText">
                                                            <h4 className="card-title">
                                                                <small>
                                                                    <strong>
                                                                        {product.name}
                                                                    </strong>
                                                                </small>
                                                            </h4>
                                                            <p className="card-text">
                                                                <small>
                                                                    <strong>
                                                                        &#8358;{product.real_price}
                                                                    </strong>
                                                                </small> <br />
                                                                <small style={{ textDecoration: 'line-through', color: 'grey', fontSize: '11px' }}>
                                                                    &#8358;{product.dummy_price}
                                                                </small>
                                                            </p>
                                                        </Link>

                                                        <div className='purchaseButton'>
                                                            <Link className='btn btn-success w-100' to={`https://api.whatsapp.com/send?phone=2348139673222&text=Hi%2C%20I%20want%20to%20purchase%20${product.name}%20from%20your%20online%20store%20with%20uid%20${product.uid}.`} target="_blank">
                                                                Buy Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Category