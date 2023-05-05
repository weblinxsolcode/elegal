import React from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'

const article3 = () => {
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
            <div className='w-100 d-flex align-items-lg-center align-items-end bannner___box justify-content-center'>
              <div className='text-center col-xxl-8 col-lg-6 col-12'>
                <h1 className='text-white display-6 article___banner___title1'>Need Legal Advice? Before You Sign the Dotted Line, Here's What You Should Know</h1>
                <p className=' text-white mt-lg-4 mt-2 main___banner___p'>Published On: April 11th, 2023</p>
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
                      Are you about to sign a contract? Have you read and understood every single word in it? Contracts are legally binding, and it is crucial to understand what you sign before you sign. From severance packages, service agreements, and leases to employment contracts, there are many types of contracts that adults will come across in their lifetime. Negotiation is possible, but only if you clearly understand the terms and conditions. A competent lawyer can help negotiate terms for you, but you should empower yourself to understand the terms and conditions yourself. Don't get caught signing something you'll regret later. 
                  </p>
                  <p>
                  You shouldn't have to hire a lawyer to understand what you're signing. If you often find yourself lost in legal jargon, look no further than E-Legal AI: Legal Doc Simplifier. E-Legal is the ultimate solution for anyone struggling with reading and understanding contracts. Using advanced AI technology, E-Legal AI simplifies legal language into words anyone can understand, even a 5th grader. E-Legal AI can handle anything from employment contracts to rental agreements, and it's cost-effective, too. E-Legal AI will produce a simplified version for $30 per contract, up to 20 pages for you to read. Think about all the legal headaches you can avoid. And remember, the only way to get a better contract is to understand the original contract.
                  </p>
                  <p>
                      Everyone should understand what they are signing. Gone are the days of blindly signing contracts. With E-Legal AI, you can minimize regrets and legal hassles. Get clarity on what you're signing before you sign. As a first-time customer, you get $10 off your first document.  Try E-Legal AI now and enjoy the peace of mind that comes with knowing exactly what you're signing up for.
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

export default article3