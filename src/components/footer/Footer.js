import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.jpg';

const Footer = () => {

    const [email, setEmail] = useState('');
    const [sub, setSub] = useState(false);

    const handleSubscribe = () => {
        if(email === "") {

        } else {
            setSub(true);
            fetch()
        }
    }
    return (
        <>
            <footer className="footer bg-white">
                <div className="container">
                    <div class="columns">
                        <div class="column is-4">
                            <div className='box noBorder'>
                                <article class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src={Logo} alt="Rhymar World" style={{ borderRadius: '5px' }} />
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>Rhymar World Collectionz</strong>
                                                <br />
                                                <br />
                                            </p>
                                        </div>
                                        <nav class="level is-mobile">
                                            <div class="level-left">
                                                <span class="level-item">
                                                    <span class="icon is-small"><i class="fa fa-telegram"></i></span>
                                                    @rhymarworld
                                                </span>
                                            </div>
                                        </nav>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="column is-4">
                            <div className='box noBorder '>
                                <p>
                                    <strong>Subscribe to our Newsletter</strong>
                                    <br />
                                    <br />
                                </p>
                                <div class="field has-addons" style={{ justifyContent: 'center' }}>
                                    <p class="control">
                                        <input class="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="o***********@****.***" />
                                    </p>
                                    <p class="control">
                                        <button class="button is-info" onClick={handleSubscribe}>
                                            {sub ? (<i className='fa fa-spinner fa-spin'></i>) : "Subscribe"}
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="column is-4">
                            <div className='box noBorder '>
                                <p>
                                    <strong>Join us on</strong>
                                    <br />
                                    <br />
                                </p>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <Link to="" class="level-item m-3">
                                            <span class="icon is-small"><i class="fa fa-2x fa-telegram"></i></span>
                                        </Link>
                                        <Link to="" class="level-item m-3">
                                            <span class="icon is-small"><i class="fa fa-2x fa-facebook"></i></span>
                                        </Link>
                                        <Link to="" class="level-item m-3">
                                            <span class="icon is-small"><i class="fa fa-2x fa-whatsapp"></i></span>
                                        </Link>
                                        <Link to="mailto:royy4sure@gmail.com" class="level-item m-3">
                                            <span class="icon is-small"><i class="fa fa-2x fa-google"></i></span>
                                        </Link>
                                        <Link to="" class="level-item m-3">
                                            <span class="icon is-small"><i class="fa fa-2x fa-twitter"></i></span>
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='bg-dark' style={{ position: "absolute", bottom: '0', left: '0', textAlign: 'center', width: '100vw', padding: '20px 10px', color: 'white !important' }}>
                    <div className="content has-text-centered">
                        <small style={{ color: "white"}}>
                            Copyright &copy; 2023 RhymarWorldCollectionz | 
                            <Link to="">
                                Designed by JayGlobal
                            </Link>
                        </small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer