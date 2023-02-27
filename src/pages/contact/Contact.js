/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 25/02/2023 - 22:46:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/02/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav';
import './contact.css';
import '../../App.css';
import Footer from '../../components/footer/Footer';

const Contact = () => {
    const [sending, setSending] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [subjectError, setSubjectError] = useState('')
    const [messageError, setMessageError] = useState('')

    useEffect(() => {
        document.title = "Contact Us | Rhymar world collectionz"
    }, [])


    const handleContact = (e) => {
        e.preventDefault();
        let go = 1;
        setSending(true)

        if (email === "") {
            setEmailError('Email cannot be empty');
            go = 0;
            setSending(false)
        }

        if (name === "") {
            setNameError('Name cannot be empty');
            go = 0;
            setSending(false)
        }

        if (subject === "") {
            setSubjectError('Subject cannot be empty');
            go = 0;
            setSending(false)
        }

        if (message === "") {
            setMessageError('Message cannot be empty');
            go = 0;
            setSending(false)
        }

        if (go === 1) {
            setSending(true)

            const data = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };

            fetch("https://www.api.rhymarworld.org.ng/contact", options)
                .then((res) => res.json())
                .then((res) => {
                    alert(res);
                    setSending(false)
                })
                .catch((err) => {
                    setSending(false)
                    alert(err);
                })
        }
    }

    return (
        <>
            <Nav />
            <div style={{ width: '100%', height: '35px' }} ></div>
            <div className='container-fluid'>
                <div className="row justify-content-center">
                    <div className="col-md-8" >
                        <div className='card noShadow noBorder transparent'>
                            <div className="card-header transparent">
                                <strong>
                                    CONTACT US
                                </strong>
                            </div>
                            <div className="card-body">
                                <pre className="transparent">
                                    You can send contact us via;
                                    <ul style={{ listStyle: 'circle' }}>
                                        <li>
                                            WhatsApp - 08050534510
                                        </li>
                                        <li>
                                            Telegram - @rhymarworld
                                        </li>
                                        <li>
                                            Email - Royy4sure@gmail.com
                                        </li>
                                        <li>
                                            Call - 08050534510
                                        </li>
                                    </ul>
                                    <p>
                                        OR SEND US A MESSAGE USING THE FORM BELOW
                                    </p>
                                </pre>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={handleContact}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="name" className='mt-3 mb-3'>
                                                Name
                                            </label>
                                            <input type="text" className="form-control" value={name} name="name" id="name" onChange={(e) => { setName(e.target.value); setNameError('') }} />
                                            <div className={!nameError ? 'invalid-feedback' : 'invalid-feedback d-block'}>
                                                {nameError}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="subject" className='mt-3 mb-3'>
                                                Subject
                                            </label>
                                            <input type="text" className="form-control" value={subject} name="subject" id="subject" onChange={(e) => { setSubject(e.target.value); setSubjectError('') }} />
                                            <div className={!subjectError ? 'invalid-feedback' : 'invalid-feedback d-block'}>
                                                {subjectError}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="email" className='mt-3 mb-3'>
                                                Email
                                            </label>
                                            <input type="email" className="form-control" value={email} name="email" id="email" onChange={(e) => { setEmail(e.target.value); setEmailError('') }} />
                                            <div className={!emailError ? 'invalid-feedback' : 'invalid-feedback d-block'}>
                                                {emailError}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="message" className='mt-3 mb-3'>
                                                Message
                                            </label>
                                            <textarea id="message" name="message" className='form-control' value={message} onChange={(e) => { setMessage(e.target.value); setMessageError('') }}></textarea>
                                            <div className={!messageError ? 'invalid-feedback' : 'invalid-feedback d-block'}>
                                                {messageError}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <button className='w-100 btn btn-primary mt-3'>
                                                {sending ? '<i className="fa fa-spinner fa-spin"></i> sending' : 'Send Message'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ width: '100%', height: '35px' }} ></div>
            <Footer />
        </>
    )
}

export default Contact