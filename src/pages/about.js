import React from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'

const article = () => {
  return (
    <>
      <section className='terms___section p-2'>
        {/* ====================== BANNER START ========================= */}
        <section className='banner__section'>
          <div className='container-fluid position-relative p-lg-5 p-4'>
            <div className='w-100'>
              <Link href='/'>
                  <img src="/Logo.png" className='bannner___logo' alt="logo" />
              </Link>
            </div>
            <div className='w-100 d-flex align-items-center bannner___box justify-content-center'>
              <div className='text-center col-xxl-4 col-lg-6 col-12'>
                <h1 className='text-white display-1 main___banner___title'>About</h1>
                <p className=' text-white mt-lg-4 mt-2 main___banner___p'>E-Legal: AI Legal Doc Simplifier</p>
              </div>
            </div>
            <img src="/article.png" className='banner__img' alt="image" />
          </div>
        </section>
        {/* ====================== BANNER END ========================= */}

        {/* ====================== TEXT CONTENT START ========================= */}
        <section className='text___content___section'>
          <div className='container'>
            <div className='row justify-content-center mt-lg-0 mt-4 mb-lg-5 mb-3'>
              <p className='text-gry text-center'>Updated on February 20, 2023</p>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  E-Legal is an innovative AI-powered platform that simplifies legal jargon and makes contracts easy to understand. With E-Legal, you can review different types of contracts, including employment, separation, settlement, release, severance, purchase, rental, or service agreements.
                </p>
                <p>
                  Are you struggling to understand complex legal terminology? Do you worry about the risks of signing a contract without fully comprehending the terms and conditions? If so, E-Legal is the solution you've been seeking.
                </p>
                <p>
                  Our proprietary AI solution simplifies complicated legal terms and conditions, breaking them into languages anyone can easily understand. This empowers users to make informed decisions and negotiate favorable terms before signing legal documents.
                </p>
                <p>

                  At E-Legal, we recognize that legal jargon can be difficult to navigate, particularly for those who are not legal experts. We aim to convert these complex terms and phrases into simple, easy-to-understand language everyone can comprehend. Our AI technology simplifies the legal language, reducing the risk of misunderstandings and legal disputes.
                </p>
                <p>

                  By utilizing E-Legal to review your contracts, you can save time and money by ensuring that you fully comprehend the terms of the agreement before signing. You'll also gain confidence and peace of mind by knowing that you're making an informed and sound decision.

                </p>
                <p>
                  We aim to make legal agreements accessible and comprehensible to everyone, regardless of their legal background or experience. E-Legal guarantees that you understand the terms, conditions, and obligations before signing any document, eliminating the possibility of legal disputes arising from misunderstandings or confusion.
                </p>
                <p>
                  We continuously work to enhance our technology and expand our services, so be sure to check back frequently for updates and new features. Whether you're a business owner, employee, or consumer, E-Legal is here to simplify your legal process.
                </p>
                <h1 className='fw-bold mb-4'>Contact Us</h1>
                <a href='mailto: help@e-legal.ai' className='mb-0 d-block text-decoration-none text-dark'>Support: help@e-legal.ai</a>
                <a href='mailto: hello@e-legal.ai' className='mb-0 d-block text-decoration-none text-dark'>Inquiry & Press: hello@e-legal.ai</a>
              </div>
            </div>
          </div>
        </section>
        {/* ====================== TEXT CONTENT END ========================= */}

        {/* ====================== FOOTER START ========================= */}
        <Footer />
        {/* ====================== FOOTER END ========================= */}


      </section>
    </>
  )
}

export default article