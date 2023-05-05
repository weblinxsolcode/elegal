import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

const privacypolicy = () => {
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
              <div className='text-center col-xxl-5 col-lg-7 col-12'>
                <h1 className='text-white display-1 main___banner___title'>Privacy Policy</h1>
                <p className=' text-white mt-lg-4 mt-2 main___banner___p'>Need something cleared up? Here are our most frequently asked questions.</p>
              </div>
            </div>
            <img src="/terms.png" className='banner__img' alt="image" />
          </div>
        </section>
        {/* ====================== BANNER END ========================= */}

        {/* ====================== TEXT CONTENT START ========================= */}
        <section className='text___content___section'>
          <div className='container'>
            <div className='row justify-content-center mt-lg-0 mt-4 mb-lg-5 mb-4'>
              <p className='text-gry text-center'>Updated on February 20, 2023</p>
              <div className='txt___content___p col-lg-7 col-12'>
                  <p>
                    <span className='fw-bold'>Privacy Policy.</span> <br/> This Privacy Policy outlines how E-Legal ("we," "us," or "our") collects, uses, and protects personal information provided by users ("you" or "your") while using our website and services.
                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                  <p>
                    <span className='fw-bold'>Information We Collect</span> <br/>
                    When you use our services, we collect personal information such as name, email address, and payment information. We also collect the documents you upload to our website, which may include sensitive information such as employment, separation, settlement, release, severance, purchase, rental, service, and entertainment agreements.
                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                  <p>
                    <span className='fw-bold'>How We Use Your Information</span> <br/>
                    We use your personal information to provide our services, process payments and communicate with you about your account. We may also use your documents to train learning models.
                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                  <p>
                    <span className='fw-bold'>How We Protect Your Information</span> 
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security measures like encryption and firewalls to protect your information.
                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                  <p>
                    <span className='fw-bold'>Retention of Your Information</span> <br/>
                    We do not save any documents for the time it takes to deliver your finished document to your email successfully. After your transaction is complete, we delete all documents from our system.

                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                  <p>
                    <span className='fw-bold'>Disclosure of Your Information</span> <br/>
                    We do not sell, trade, or rent your personal information to third parties. We may disclose your information to our service providers who assist us in providing our services to you.

                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                  <p>
                    <span className='fw-bold'>Changes to Our Privacy Policy</span> <br/>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                  <p>
                    <span className='fw-bold'>Contact Us</span> <br/>
                    If you have any questions or concerns about our Privacy Policy, please get in touch with us at <a href="mailto:help@e-legal.ai" className='text-decoration-none text-dark'>help@e-legal.ai.</a>
                  </p>
              </div>
            </div>
          </div>
        </section>
        {/* ====================== TEXT CONTENT END ========================= */}

        {/* ====================== FOOTER START ========================= */}
          <Footer/>
        {/* ====================== FOOTER END ========================= */}
        

      </section>
    </>
  )
}

export default privacypolicy