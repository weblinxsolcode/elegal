import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

const Faq = () => {
  return (
    <>
      <div className="container-fluid p-2">
         {/* ====================== BANNER START ========================= */}
        <section className='banner__section'>
          <div className='container-fluid position-relative p-lg-5 p-4'>
            <div className='w-100'>
              <Link href='/'>
                <img src="/Logo.png" className='bannner___logo' alt="logo" />
              </Link>
            </div>
            <div className='w-100 d-flex align-items-center bannner___box2 justify-content-start'>
              <div className='text-start col-xxl-5 col-lg-6 col-12'>
                <h1 className='text-white display-1 main___banner___title main___banner___title2'>Top questions <br /> asked</h1>
                <p className='fs-5 text-white mt-lg-4 mt-2 main___banner___p'>Need something cleared up? Here are our most frequently asked questions.</p>
              </div>
            </div>
            <img src="/banner.png" className='banner__img2' alt="image" />
          </div>
        </section>
        {/* ====================== BANNER END ========================= */}

        <div className="d-flex justify-content-center mt-5 mb-5 pt-lg-5 pb-lg-4">
          <div className="d-flex gap-2 form-control p-2 width__input mt-5  col-lg-7 col-12" style={{borderRadius:"10px"}}>
            <div>
              <i className="fa-solid fa-search"></i>
            </div>
            <div>
              <input type="text" className="bg-transparent border-0 shadow-none" placeholder="Type your question here" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mx-0">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <div class="accordion w-100 mb-5" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How does E-Legal's AI technology simplify legal jargon?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        E-Legal's AI technology analyzes the legal language of
                        the contract and translates it into plain English so
                        that users can understand the terms clearly before
                        signing.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can E-Legal review all types of contracts?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Yes, E-Legal's AI technology can review any type of
                        contract, including employment, separation, settlement,
                        release, severance, purchase, rental, or service
                        agreements. It can identify and highlight any key
                        clauses or terms that may be unclear, confusing, or
                        require further clarification.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is E-Legal's AI technology legally binding?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        No, E-Legal's AI technology is not legally binding.
                        However, it can be an extremely useful tool when
                        reviewing contracts. By simplifying legal jargon and
                        complex terms, it can help users more easily understand
                        the content of a contract. But while E-Legal's AI
                        technology can help users identify potential legal
                        issues, it is essential to seek professional legal
                        advice before signing any contract to ensure that all
                        legal requirements are met and that the contract is fair
                        and reasonable. In fact, seeking legal advice is
                        especially important in cases where the contract
                        involves a significant amount of money or has long-term
                        implications. So while E-Legal's AI technology can be a
                        helpful resource, it should not be relied on as a
                        substitute for professional legal advice.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                       Does E-Legal provide legal advice?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      No, E-Legal does not provide legal advice. It's important to consult with a qualified attorney to ensure that you receive proper legal assistance for your specific situation. 
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                       How can using E-Legal save time and money?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      By using E-Legal to simplify legal jargon, users can save time by not having to research legal terms or hire a lawyer to review the contract. Additionally, E-Legal can help prevent legal disputes, which can be very costly.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Q: Does E-Legal replace the need for a lawyer?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      No, E-Legal is not a substitute for legal advice from a qualified attorney. However, it can assist you in understanding the terms of the contract and help you communicate more effectively with your lawyer.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSeven">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                 Can E-Legal prevent legal disputes from occurring?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      While E-Legal cannot prevent legal disputes from occurring, it can reduce the risk of legal disputes by ensuring that parties fully understand the terms of a contract before signing it.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEight">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                  I'm short on time, how quickly can E-Legal review a contract?
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                      E-Legal can review contracts within minutes, giving users fast access to simplified legal jargon and terms, and allowing them to make informed decisions about the contracts they are presented with.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingNine">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                   Which document formats are accepted by E-Legal AI Contract Simplifier?
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                 
The E-Legal AI Contract Simplifier accepts PDF, TXT, and docx formats. However, please DO NOT upload scanned documents. Our AI cannot read them. If your document contains scanned portions, it will not be simplified. Don’t worry, though, we’re working on an update to allow scanned documents to be simplified. Follow us on social media (@e_legalai) to stay updated with the latest developments.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTen">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                         How long does processing my document with E-Legal AI Contract Simplifier take?
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
              
 Processing can take up to 15 minutes. After uploading your document, providing your email, and checking out, you can close your browser. We'll send you an email with your simplified document. If you didn't receive it, please check your spam folder. If it's still not there, kindly email us at 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Faq;
