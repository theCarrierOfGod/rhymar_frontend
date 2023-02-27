/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 19/02/2023 - 14:35:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Preloader from '../../Preloader';
import Nav from '../../components/nav/Nav'
import { BeatLoader } from 'react-spinners';
import Footer from '../../components/footer/Footer';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Products = () => {
    const { pathname } = useLocation();
    const { product_id } = useParams();
    const [products, setProducts] = useState([]);
    const [states, setStates] = useState([]);
    const [lgas, setLgas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [cats, setCats] = useState([]);

    const getCategory = (product_id) => {
        fetch("https://www.api.rhymarworld.org.ng/products/specific/?uid=" + product_id)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res.product)
                setIsLoading(false)
                getMyCategory(res.product[0].category, 12, 0)
                document.title = res.product[0].name.toUpperCase() + " | Rhymar world collectionz"
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    const getMyCategory = (category, limit, offset) => {
        fetch("https://www.api.rhymarworld.org.ng/category/specific/?category=" + category + "&limit=" + limit + "&offset=" + offset)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res.count === 0) {
                    setCats([]);
                    setIsLoading(false)
                } else {
                    setCats(res.products)
                    setIsLoading(false)
                }
                return true;
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    const getStates = () => {
        fetch("https://www.api.rhymarworld.org.ng/states/")
            .then((res) => res.json())
            .then((res) => {
                setStates(res.states)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
            getCategory(product_id);
            getStates();
    }, [pathname]);

    const addToCart = () => {
        window.open(
            `https://api.whatsapp.com/send?phone=2348139673222&text=Hi%2C%20I%20want%20to%20purchase%20${products[0].name}%20from%20your%20online%20store%20with%20uid%20${products[0].product_id}.`,
            '_blank'
        );
    }

    const getLGA = (event) => {
        let state_id = event.target.value;
        fetch("https://www.api.rhymarworld.org.ng/states/lga/?state_id=" + state_id)
            .then((res) => res.json())
            .then((res) => {
                setLgas(res.lgas)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
            })
    }

    return (
        <>
            {isLoading ? (
                <>
                    <Preloader />
                </>
            ) : (
                <>
                    <Nav />
                    <div className='container-fluid'>
                        <div className="row mt-3 p-2">
                            <div className="col-md-8 mt-3">
                                <div class="card text-left noBorder">
                                    <div class="card-body">
                                        <div className='row'>
                                            <div className='col-sm-5 col-12'>
                                                <img src={products[0].image} alt="" />
                                            </div>
                                            <div className='col-sm-7 col-12'>
                                                <h1 style={{ fontFamily: "monospace", textTransform: "uppercase" }}>
                                                    <strong>
                                                        {products[0].name}
                                                    </strong>
                                                </h1>
                                                <small>
                                                    Brand: {products[0].brand}
                                                </small> <br />
                                                <hr style={{ backgroundColor: "grey", margin: "10px 0" }}></hr>
                                                <h1>
                                                    <strong style={{ fontSize: '20px' }}>
                                                        &#8358;{products[0].real_price}
                                                    </strong> <br />
                                                    <small style={{ textDecoration: "line-through", color: "#75757a" }}>
                                                        &#8358;{products[0].dummy_price}
                                                    </small> <br />
                                                    <small>
                                                        {(products[0].quantity === 0) ? "Out of stock" : "In stock"}
                                                    </small> <br /><br /> <br />
                                                    <div className='purchaseButton mt-3'>
                                                        {(products[0].quantity === 0) ? (
                                                            <>
                                                                <button className='btn btn-rhymar w-100 text-center' disabled="disabled">
                                                                    <span className='material-symbols-outlined'>
                                                                        shopping_cart
                                                                    </span>
                                                                    &nbsp; &nbsp;
                                                                    <span className='f-28'>
                                                                        Buy Now
                                                                    </span>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button onClick={addToCart} className='btn btn-rhymar w-100 text-center'>
                                                                    <span className='material-symbols-outlined'>
                                                                        shopping_cart
                                                                    </span>
                                                                    &nbsp; &nbsp;
                                                                    <span className='f-28'>
                                                                        Buy Now
                                                                    </span>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card text-left noBorder mt-3">
                                    <div className="card-header noBorder">
                                        Product Details
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            {products[0].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div class="card text-left noBorder">
                                    <div className="card-header noBorder">
                                        DELIVERY  AND RETURNS
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            Choose your Location
                                        </h4>
                                        <form className='mt-3'>
                                            <div class="form-group mt-2">
                                                <select class="form-control" name="" id="" onChange={getLGA}>
                                                    {
                                                        (states.length !== 0) ?
                                                            (

                                                                (states.map((state) => (
                                                                    <>
                                                                        <option key={state._id} value={state._id}>
                                                                            {state.name}
                                                                        </option>
                                                                    </>
                                                                )))
                                                            )
                                                            :
                                                            null
                                                    }
                                                </select>
                                            </div>
                                            <div class="form-group mt-3">
                                                <select class="form-control" name="" id="">
                                                    {
                                                        (lgas.length !== 0) ?
                                                            (

                                                                (lgas.map((lga) => (
                                                                    <>
                                                                        <option value={lga._id}>
                                                                            {lga.name}
                                                                        </option>
                                                                    </>
                                                                )))
                                                            )
                                                            :
                                                            null
                                                    }
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3 p-2'>
                            <div className='col-md-12'>
                                <div className="card-header">
                                    Similar Products
                                </div>
                                <div className="card-body noBorder">
                                    {(cats.length !== '0') ? (
                                        <>
                                            <Swiper
                                                modules={[Navigation, A11y, Autoplay]}
                                                spaceBetween={10}
                                                slidesPerView={0}
                                                slidesPerGroupAuto={true}
                                                navigation={false}
                                                loop={true}
                                                parallax={true}
                                                autoplay={{
                                                    delay: 5000,
                                                    pauseOnMouseEnter: true,
                                                    disableOnInteraction: false
                                                }}
                                                breakpoints={{
                                                    // when window width is >= 320px
                                                    320: {
                                                        slidesPerView: 1,
                                                    },
                                                    640: {
                                                        slidesPerView: 2,
                                                        initialSlide: 2,
                                                    },
                                                    768: {
                                                        slidesPerView: 3,
                                                        initialSlide: 3,
                                                    },
                                                    1024: {
                                                        slidesPerView: 5,
                                                        initialSlide: 5,
                                                    },
                                                }}
                                            >
                                                <div className="swiper-slide">
                                                    {cats.map((sliders) => (
                                                        <SwiperSlide key={sliders.id}>
                                                            <Link to={`/products/${sliders.product_id}`} className="card text-white noBorder noShadow hoverShadow">
                                                                <img className="card-img-top noBorder" src={sliders.image} alt="" style={{ height: '200px' }} />
                                                                <div className="card-body noBorder text-dark">
                                                                    <h4 className="card-title">
                                                                        <small>
                                                                            <strong>
                                                                                {sliders.name}
                                                                            </strong>
                                                                        </small>
                                                                    </h4>
                                                                    <p className="card-text">
                                                                        <small>
                                                                            <strong>
                                                                                &#8358;{sliders.real_price}
                                                                            </strong>
                                                                        </small> <br />
                                                                        <small style={{ textDecoration: 'line-through', color: 'grey', fontSize: '11px' }}>
                                                                            &#8358;{sliders.dummy_price}
                                                                        </small>
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        </SwiperSlide>
                                                    ))}
                                                </div>
                                            </Swiper>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}

export default Products