/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 19/02/2023 - 15:02:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import style from './index.module.css'
import Nav from '../../components/nav/Nav'
import New from './features/new/New';
import Slider from './features/swiper/Slider';
import Category from './features/categories/Category';
import Footer from '../../components/footer/Footer';


const Index = () => {

    useEffect(() => {
        document.title = "Rhymar world collectionz";
    }, [])

    return (
        <>
            <div className='topBackground'></div>
            <Nav />
            <div className={style.break}></div>
            <Slider/>
            <div className={style.break}></div>
            <New/>
            <div className={style.break}></div>
            <Category />
            <div className={style.break}></div>
            <div className={style.break}></div>
            <Footer />
        </>
    )
}

export default Index;

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(console.log);