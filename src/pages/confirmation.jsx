import Link from 'next/link'
import React from 'react'

const AiAnalyzing = () => {
    return (
        <>
            <section className='checkout__section__header'>
                <div className="container-fluid">
                    <div className="d-flex mx-3 bg-white my-3 py-2 gap-lg-3 gap-2 align-items-center">
                        <div className='d-flex align-items-center'>
                            <Link href="/">
                                <img src="/logo-black.png" alt="logo" />
                            </Link>
                            <img src="/arrow-right.png" className='arrow___right' alt="arrow" />
                        </div>
                        <ul className='mb-0 ul___checkout d-flex align-items-center list-unstyled'>
                            <li><a href="#">Document_name.pdf</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='top___loading___bar'>
                <div className='top___loading'>

                </div>
            </div>
            <section className='analyzing___section'>
                <div className='container'>
                    <div className='row py-5 justify-content-center'>
                        <div className='col-lg-6'>
                            <h1 className='text-center fw-bold'>
                                AI is analyzing...
                            </h1>
                            <p className='text-gry2 ai___p text-center mt-lg-0 mt-3'>
                                Our AI is festidioulsy processing your document. This may take up to 15 minutes.
                                You can take a break and check your email. Or while you wait, check out our <a href='/faq' className='fw-bold text-gry2 text-decoration-none'>FAQ</a>
                            </p>
                        </div>
                        <div className='w-100 d-flex align-items-center justify-content-center mt-lg-5 py-5'>
                            <img src="/ball.png" className='img-fluid' alt="image" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AiAnalyzing