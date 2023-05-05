import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

const termsofuse = () => {
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
              <div className='text-center col-xxl-5 col-lg-6 col-12'>
                <h1 className='text-white display-1 main___banner___title'>Terms of Use</h1>
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
                  <span className='fw-bold'>Terms & Conditions for the use of E-Legal.</span> <br />
                </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Welcome to E-Legal:</span> <br />
                  AI Contract Simplifier. By using our service, you agree to the following terms and conditions:
                </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Use of Service:</span> <br />
                  E-Legal is an AI-powered tool that simplifies contract legal jargon. You may use E-Legal to review any type of contract, such as employment, separation, settlement, release, severance, purchase, rental, or service agreements. E-Legal is not a substitute for legal advice; we do not provide legal advice or representation.
                </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Accuracy of Information:</span> <br />
                  E-Legal uses AI technology to simplify legal jargon, but we cannot guarantee the accuracy or completeness of the information provided. You are responsible for reviewing the contract and ensuring you understand the terms before signing. E-Legal is not liable for any errors or omissions in the information provided.
                </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Privacy:</span> <br />
                  E-Legal takes your privacy seriously. We do not share your personal information with third parties without your consent. We may collect data on your use of the service to improve our AI technology, but this data will be anonymized and aggregated.
                </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Data Retention Policy:</span> <br />
                  E-Legal does not retain any documents uploaded by users for long-term use. Once the transaction is completed, all documents will be purged from the system. E-Legal takes data privacy and security seriously and ensures that all personal information and documents are handled in accordance with applicable laws and regulations. Users are responsible for maintaining their copies of any documents uploaded to the platform. E-Legal shall not be held liable for any loss or damage resulting from the deletion of any documents uploaded by users."
                </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'> Intellectual Property:</span> <br />
                  E-Legal owns all intellectual property rights in the service, including the AI technology used to simplify legal jargon. You may not copy, modify, distribute, or sell any part of the service without our written consent.
                 </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Limitation of Liability:</span> <br />
                  E-Legal is not liable for any damages arising from your use of the service, including but not limited to direct, indirect, incidental, or consequential damages. This limitation of liability applies to the fullest extent permitted by law.
                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Indemnification:</span> <br />
                  You agree to indemnify and hold E-Legal harmless from any claims, damages, or expenses arising from your service use, including but not limited to legal fees.
                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Governing Law:</span> <br />
                  These terms and conditions are governed by the laws of California, without regard to its conflict of laws provisions.
                  </p>
              </div>
              <div className='txt___content___p col-lg-7 col-12'>
                <p>
                  <span className='fw-bold'>Changes to the terms and conditions:</span> <br />
                  E-Legal reserves the right to modify or update these terms and conditions at any time. You must review these terms periodically to stay informed of any changes.
                  </p>
                  <p>By using E-Legal, you agree to the terms and conditions outlined above.</p>
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

export default termsofuse