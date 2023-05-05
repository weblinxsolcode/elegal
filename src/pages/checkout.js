import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

const Checkout = () => {
    return (
        <>
            <section className='checkout__section__header'>
                <div className="container-fluid">
                    <div className="d-flex mx-3 bg-white my-4 gap-3 align-items-center flex-wrap">
                        <div className='d-flex align-items-center'>
                            <Link href="/">
                                <img src="/logo-black.png" alt="logo" />
                            </Link>
                            <img src="/arrow-right.png" className='arrow___right' alt="arrow" />
                        </div>
                        <ul className='mb-0 ul___checkout d-flex align-items-center list-unstyled'>
                            <li><a href="#">Document_name.pdf <img src="/arrow-right.png" alt="" /></a></li>
                            <li><a href="#">Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='checkout__section pb-2'>
                <div className='container-fluid px-lg-5'>
                    <div className='row py-5 gap-5 justify-content-center'>
                        <div className="col-xl-8 col">
                            <h1 className='fw-bold'>Checkout</h1>
                            <p className='text-gry mb-5 checkout___p'>please make a payment so our AI could start analyze your file as soon as possible ;)</p>
                            <p className='fs-5 fw-bold'>Tell us your email, to get your final document</p>
                            <div className='w-100'>
                                <form action="#" className='tell__us__form'>
                                    <div className='form-group'>
                                        <label htmlFor="FirstName">First name</label>
                                        <input type="text" id='FirstName' placeholder='Name' />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="Email">Email</label>
                                        <input type="email" id='Email' placeholder='example@gmail.com' />
                                    </div>
                                    <div className='form-group'>
                                        <Link href="/confirmation">
                                        <button className='btn__submit__arrow'>
                                            <img src="/Arrow-Right2.png" alt="arrow" />
                                        </button>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                            <div className='strip___payment'> 
                                <div>Stripe Payment Integration </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-md-4'>
                            <div className='checkout___card'>
                                <div className='checkout___card___img'>
                                    <img src="/card2.png" alt="card" />
                                </div>
                                <div className='checkout___card___price'>
                                    <span>$30.00</span>
                                </div>
                                <div className='checkout___card___dsc'>
                                    <span>1 simplified document</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* ================= FOOTER START ================== */}
                <Footer/>
            {/* ================= FOOTER END ================== */}
            </section>
        </>
    )
}

export default Checkout