/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 12/02/2023 - 17:22:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import Aos from 'aos';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './providers/auth/Auth';
import Preloader from './Preloader';

const LazyIndex = React.lazy(() => import('./pages/index/Index'));
const LazyCategory = React.lazy(() => import('./pages/category/Category'));
const LazyProduct = React.lazy(() => import('./pages/products/Products'));
const Lazy404 = React.lazy(() => import('./pages/404/P404'));
const LazyContact = React.lazy(() => import('./pages/contact/Contact'));


const App = () => {

    const { pathname } = useLocation();
    const [online, setOnline] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    const checkOnlineStatus = async () => {
        try {
            const online = await fetch(`https://www.api.rhymarworld.org.ng/new.php`);
            return online.status >= 200 && online.status < 300; // either true or false
        } catch (err) {
            return false; // definitely offline
        }
    };

    useEffect(() => {
        setInterval(async () => {
            const onlines = await checkOnlineStatus();
            if (!onlines) {
                setOnline(false)
            } else {
                setOnline(true);
            }
        }, 6000);
    }, [])



    return (
        <>
            <div className={online ? 'd-none' : 'offNoti'} id="status">
                Your are currently offline.
                {online}
            </div>
            <div className='body'>
                <AuthProvider>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <React.Suspense fallback={<Preloader />}>
                                        <LazyIndex />
                                    </React.Suspense>
                                </>
                            }
                        />

                        <Route
                            exact
                            path="category/:category"
                            element={
                                <>
                                    <React.Suspense fallback={<Preloader />}>
                                        <LazyCategory />
                                    </React.Suspense>
                                </>
                            }
                        />

                        <Route
                            exact
                            path="products/:product_id"
                            element={
                                <>
                                    <React.Suspense fallback={<Preloader />}>
                                        <LazyProduct />
                                    </React.Suspense>
                                </>
                            }
                        />

                        <Route
                            exact
                            path="contact-us"
                            element={
                                <>
                                    <React.Suspense fallback={<Preloader />}>
                                        <LazyContact />
                                    </React.Suspense>
                                </>
                            }
                        />

                        {/* Error 404 */}
                        <Route
                            exact
                            path="*"
                            element={
                                <>
                                    <React.Suspense fallback={<Preloader />}>
                                        <Lazy404 />
                                    </React.Suspense>
                                </>
                            }
                        />
                    </Routes>
                </AuthProvider>
            </div>
        </>
    )
}

export default App