/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const pathname = useLocation();
    // const userLoggedIn = window.localStorage.getItem("username");
    // const [user, setUser] = useState(userLoggedIn);
    // const [userArray, setUserArray] = useState([]);
    // const [cartArray, setCartArray] = useState();
    // const [cartLength, setCartLength] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);
    // const [nightMode, setNightMode] = useState(false);
    // const [balance, setBalance] = useState(0);
    // const [myOffers, setMyOffers] = useState([]);

    // const checkLogin = () => {
    //     if (!userLoggedIn) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(false);
    })

    // useEffect(() => {
    //     let span = new Date().getTime();
    //     let time = window.localStorage.getItem('time');

    //     // // Five minutes
    //     // if ((span - time) > (5 * 60000 )) {
    //     //     console.log("Logged out after five minutes");
    //     //     logout()
    //     // }

    //     // // One hour
    //     // if ((span - time) > (1 * 3600000 )) {
    //     //     logout()
    //     // }

    //     // Twenty-four hours
    //     if ((span - time) > 86400000) {
    //         console.log("Logged out after 24 hours");
    //         logout()
    //     }
    //     return console.log('Auth use effect');
    // }, [])

    // const refresh = () => {
    //     setTimeout(function () {
    //         window.location.reload();
    //     }, 5000);
    // }

    // const redirect = (location) => {
    //     setTimeout(function (location) {
    //         window.location.replace(location);
    //     }, 5000);
    // }

    // const login = (username) => {
    //     setUser(username)
    //     setIsLoggedIn(true);
    //     window.localStorage.setItem('time', new Date().getTime());
    //     window.localStorage.setItem('username', username);
    //     window.location.href = "/account";
    // }

    // const logout = () => {
    //     setUser(null);
    //     setIsLoggedIn(false);
    //     setUserArray([])
    //     window.localStorage.removeItem('username');
    //     window.localStorage.removeItem('time');
    // }

    // const userData = () => {
    //     fetch(`https://api.rehomax.com/api/v1/user_data?api_token=aedimvoenbevcunoijinanoernoimijoinenvuinncozIjecvniuzndk&username=${user}`)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             if (response.code === '00') {
    //                 setUserArray(response.user[0]);
    //                 setBalance(response.user[0].balance)
    //             } else {
    //                 setUserArray([])
    //             }
    //         })
    // }

    // const cartData = () => {
    //     fetch(`https://api.rehomax.com/api/v1/cart_data?api_token=aedimvoenbevcunoijinanoernoimijoinenvuinncozIjecvniuzndk&username=${user}`)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             if (response.code === '00') {
    //                 setCartArray(response.cart);
    //                 setCartLength(response.thelength);
    //                 setCartTotal(response.total);
    //             } else {
    //                 setCartArray([])
    //             }
    //         })
    // }

    // const changeMode = () => {
    //     if(nightMode === true) {
    //         setNightMode(false);
    //         console.log(nightMode);
    //     } else {
    //         setNightMode(true);
    //         console.log(nightMode);
    //     }
    // }

    // const getOffers = (product) => {
    //     fetch(`https://api.rehomax.com/api/v1/getoffers?api_token=aedimvoenbevcunoijinanoernoimijoinenvuinncozIjecvniuzndk&product=${product}`)
    //     .then((response) => response.json())
    //     .then((response) => {
    //         if (response.code === '00') {
    //             setMyOffers(response.offers);
    //         } else {
    //             setMyOffers([])
    //         }
    //     })
    // }

    return (
        // <AuthContext.Provider value={{ user, isLoggedIn, myOffers, getOffers, cartTotal, balance, userArray, changeMode, nightMode, cartArray, refresh, redirect, login, logout, userData, cartData, cartLength }}>
        //     {children}
        // </AuthContext.Provider>
        <AuthContext.Provider value={{ pathname, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}