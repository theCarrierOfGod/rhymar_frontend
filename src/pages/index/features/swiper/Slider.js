/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 19/02/2023 - 15:23:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Preloader from '../../../../Preloader';

const Slider = () => {

    const [sliders, setSliders] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            const url = `https://api.rhymarworld.org.ng/featured.php`;
            fetch(url)
                .then((res) => res.json())
                .then(res => {
                    if (res.total === 0) {
                        setIsLoading(false)

                    } else {
                        setSliders(res.data)
                        setIsLoading(false)
                    }
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 4000);
                })
                .catch(err => {
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 4000);
                })
    }, [])

    return (
        <>
            {isLoading ? (
                <>
                    <Preloader />
                </>
            ) : null}
            {
                (sliders.length !== 0) ? (
                    <>
                        <div className="container-fluid">
                            <div className="card noBorder noShadow">
                                <div className="card-header noBorder bgNone">
                                    <h3 style={{ textTransform: 'uppercase', textIndent: '5px', fontWeight: '600' }}>
                                        Top Selling Products
                                    </h3>
                                </div>
                                <div className="card-body noBorder">
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
                                                slidesPerGroup: 1,
                                            },
                                            640: {
                                                slidesPerView: 2,
                                                initialSlide: 2,
                                                slidesPerGroup: 2,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                                initialSlide: 3,
                                                slidesPerGroup: 3,
                                            },
                                            1024: {
                                                slidesPerView: 5,
                                                initialSlide: 5,
                                                slidesPerGroup: 5,
                                            },
                                        }}
                                    >
                                        <div className="swiper-slide">
                                            {sliders.map((sliders) => (
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
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    null
                )
            }
        </>
    )
}

export default Slider
