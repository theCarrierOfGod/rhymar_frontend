/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 25/02/2023 - 22:47:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import logo from '../../images/logo.png';

const Nav = () => {

    const location = useLocation();
    const [navbar, setNavbar] = useState(false);
    const [menu, setMenu] = useState(false);
    const [miniSearch, setMiniSearch] = useState(false);
    const [query, setQuery] = useState();
    const [cartvisible, setCartVisible] = useState(false);
    const [walletvisible, setWalletVisible] = useState(false);
    const [cats, setCats] = useState(false);
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        fetch("https://www.api.rhymarworld.org.ng/category/")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setCategories(res.category)
            })
    }

    useEffect(() => {
            setMenu(false);
            setWalletVisible(false);
            setCartVisible(false);
            setCats(false);
            getCategories();
    }, [location.pathname])

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            if (menu) {
                setNavbar(true);
            } else if (cartvisible) {
                setNavbar(true)
            } else if (walletvisible) {
                setNavbar(true)
            } else {
                setNavbar(false);
            }
        }
    }

    window.addEventListener('scroll', changeBackground);

    const toogleMenu = () => {
        if (menu) {
            setMenu(false)
            setNavbar(false);
        } else {
            setMenu(true)
            setNavbar(true);
        }
    }

    const showCats = () => {
        if (cats) {
            setCats(false)
        } else {
            setCats(true)
        }
    }

    const toogleSearch = () => {
        if (miniSearch === false) {
            setMiniSearch(true);
        } else {
            setMiniSearch(false);
        }
    }

    const handleQuery = (event) => {
        setQuery(event.target.value);
    }

    const clearQuery = () => {
        setQuery('')
    }

    return (
        <>
            <div className=''>
                <div className={miniSearch ? "d-block" : "d-none"} style={{ width: '100%', height: '60px' }}></div>
                <nav className={miniSearch ? "navbar active is-fixed-top mt-0" : "d-none"}>
                    <div className="mr-4">
                        <Link to="" className="d-block" onClick={toogleSearch}>
                            <span className="material-symbols-outlined" style={{ padding: '11px' }} >
                                arrow_back_ios
                            </span>
                        </Link>
                    </div>
                    <div className="search-input" style={{ width: '85%' }}>
                        <input
                            type="text"
                            name="query"
                            placeholder="Search categories, products and accounts"
                            onChange={handleQuery}
                            value={query}
                        />
                    </div>
                </nav>
                <nav className={`${miniSearch ? "is-really-hidden" : null} ${navbar ? "navbar is-fixed-top mt-0 p-0" : "navbar is-transparent mt-0 p-0 text-white"}`} role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img src={logo} width="40" height="40" alt="alt" />
                            <span className="navbar-title">Rhymar</span>
                        </Link>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu show1023 is-transparent">
                        <div id="navbar-search" className="navbar- main-search show1023 hid599">
                            <div className="search-box bit-rounded bordered reho-border">
                                <div className="search-icon is-hoverable">
                                    <span className="material-symbols-outlined ft-20">
                                        search
                                    </span>
                                </div>
                                <div className="search-input">
                                    <input
                                        type="text"
                                        name="query"
                                        placeholder="Search categories, products and accounts"
                                        onChange={handleQuery}
                                        value={query}
                                    />
                                </div>
                                <div className="search-cancel is-delete is-hoverable">
                                    <span className={query ? "material-symbols-outlined ft-20 text-danger" : "material-symbols-outlined ft-20 boxed-close"} onClick={clearQuery}>
                                        {query ? "close" : "/"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <Link to="/" className="navbar-item hid1023">
                                <small>
                                    Home
                                </small>
                            </Link>

                            <div className="navbar-item has-dropdown is-hoverable hid1023">
                                <span className="navbar-link is-arrowless" title="Categories">
                                    <span className="material-symbols-outlined" style={{ color: 'blue' }}>
                                        category
                                    </span>
                                    &nbsp;
                                    <small>
                                        Categories
                                    </small>
                                </span>

                                <div className="navbar-dropdown">
                                    {categories.map((categories) => (
                                        <>
                                            <Link key={categories.id} to={`/category/${categories.title}`} className="navbar-item" >
                                                <span>
                                                    {categories.text}
                                                </span>
                                            </Link>
                                        </>
                                    ))}
                                </div>
                            </div>

                            <span className="navbar-item navbar-icon show599 is-hoverable" onClick={toogleSearch}>
                                <span className="material-symbols-outlined" style={{ color: "black" }}>
                                    search
                                </span>
                            </span>

                            <Link to="/contact-us" className="navbar-item hid1023">
                                <span className="material-symbols-outlined" style={{ color: 'black' }}>
                                    phone_in_talk
                                </span>
                                <small>
                                    Contact Us
                                </small>
                            </Link>

                            <span
                                onClick={toogleMenu}
                                className="nav-burger navbar-item is-hoverable">
                                <span className="material-symbols-outlined">
                                    {menu ? "close" : "menu"}
                                </span>
                            </span>
                        </div>
                    </div>
                </nav>
                <div className={menu ? "topSpace" : "d-none"}></div>
                <div className={menu ? "d-block tabletMenu" : "d-none"}>
                    <div className="menuContent">
                        <ul className="nav">
                            <li className={`menu-item link ${cats ? 'd-none' : 'd-block'}`}>
                                <Link to="/" className="menu-link active" >
                                    <span className="material-symbols-outlined" style={{ color: 'green' }}>
                                        home
                                    </span>
                                    Home
                                </Link>
                            </li>
                            <li className={`menu-item`}>
                                <Link to="" className="menu-link" onClick={showCats}>
                                    <span className="material-symbols-outlined" style={{ color: 'red' }}>
                                        {cats ? "chevron_left" : "category"}
                                    </span>
                                    <span className="menu-name">
                                        Categories
                                    </span>
                                    <span className="material-symbols-outlined">
                                        {cats ? "" : "chevron_right"}
                                    </span>
                                </Link>
                            </li>
                            <div className={`${cats ? 'd-block topBorder' : 'd-none'}`}>
                                {categories.map((categories) => (
                                    <>
                                        <Link key={categories.id} to={`/category/${categories.title}`} className="menu-drop-item" >
                                            {categories.text}
                                        </Link>
                                    </>
                                ))}
                            </div>
                            <li className={`menu-item link ${cats ? 'd-none' : 'd-block'}`}>
                                <Link to="/contact-us" className="menu-link active" >
                                    <span className="material-symbols-outlined" style={{ color: 'orangered' }}>
                                        phone_in_talk
                                    </span>
                                    Contact Us
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Nav