import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Footer2 from "@/components/Footer2";
import { client } from "../../contentful.js";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const entries = await client.getEntries({
    content_type: "blogs",
  });


  return {
    props: {
      entries: entries.items,
    },
  };



}

const names = [];

const Articles = ({ entries }) => {
  const router = useRouter();
  const {id} = router.query;
  const myIndex = {id}?.id;
  

  return (
    <>
      {/* <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/nordicrose.png" className="nordic__logo" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto poppins">
                <li className="nav-item">
                  <a
                    className="nav-link text-dark text-uppercase active poppins fw-500"
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark poppins fw-500 text-uppercase"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark poppins fw-500 text-uppercase"
                    href="#"
                  >
                    Links
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark poppins fw-500 text-uppercase"
                    href="#"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className="my-0 text-dark" />
      </header> */}
      <section>
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-8 pt-lg-5 pt-2">
              <h1 className="fw-bold text-center display-5 text-black">
                {/* A few words about this blog <br className="d-lg-block d-none" />
                platform, Ghost, and how this
                <br className="d-lg-block d-none" /> site was made */}
                         {/* {entries.map((entry) => (
                  <div key={entry.sys.id}>
                    <h2>{entry.fields.title}</h2>
                    <p>{entry.fields.body}</p>
                    {console.log(entries[{id}.id].fields.title)}
                  </div>
                ))} */}
                {/* {console.log(myIndex)} */}
                {/* {console.log(entries[myIndex]?.fields?.title)} */}
                {entries[myIndex]?.fields?.title} 
          
              </h1>
              <p className="text-center fs-5 mt-4">
                {/* Why Ghost (& Figma) instead of Medium, WordPress or
                <br className="d-lg-block d-none" /> other options? */}
                     {entries[myIndex]?.fields?.dropText} 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="terms___section ">
        {/* ====================== BANNER START ========================= */}
        <div className="">
          <div className="d-flex justify-content-center mt-5">
            <img src={entries[myIndex]?.fields?.heroImageUrl}  className="w-100" style={{height:'700px'}}  alt="" />
          </div>
        </div>

        {/* ====================== BANNER END ========================= */}

        {/* ====================== TEXT CONTENT START ========================= */}
        <section className="text___content___section">
          <div className="container">
            <div className="row justify-content-center mt-lg-0 mt-4 mb-lg-0 mb-0">
              <div className=" col-lg-6 pt-lg-5 pt-2 col-12">
                <hr
                  className="py-1"
                  style={{ height: "2px !important", opacity: "1" }}
                />

                <div className="d-lg-none d-block">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src="/nina.png"
                        className="rounded-circle img-fluid"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="fs-6 fw-bolder mb-1">MIKA MATIKAINEN</p>
                      <p className="mb-0">Apr 15,2020 4 min read</p>
                    </div>
                  </div>
                  <div className="fb__box mt-4 mb-3">
                    <div className="row mx-0 ">
                      <div
                        className="col-4 d-flex justify-content-center align-items-center py-3 fs-4"
                        style={{ borderRight: "1px solid #ccc" }}
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </div>
                      <div
                        className="col-4 d-flex justify-content-center align-items-center py-3 fs-4"
                        style={{ borderRight: "1px solid #ccc" }}
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                      <div className="col-4 d-flex justify-content-center align-items-center py-3 fs-4">
                        <i className="fa-brands fa-whatsapp"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="my-5">
                {entries[myIndex]?.fields?.intro} 
                </p>
                <p className="mb-5 fw-bold">
                {entries[myIndex]?.fields?.pullQuote} 
                </p>
                {entries.map((entry) => (
                  <div key={entry.sys.id}>
                  
                    {/* {console.log(entry.fields.articleBody.content[0].content[0].value)} */}
          
            {/* {entry.fields.articleBody.content[0].content[0].value} */}

{/* {
      entries.map((entry) => (
        <div key={entry.sys.id}>
          
          
          { entry.fields.articleBody.content.slice(0, 6).map((item, index) => {
        return <p key={index}>{item.content[0].value}</p>;
        
      })}
        </div>
      ))
} */}
  {entries[myIndex]?.fields?.articleBody?.content.slice(0, 6).map((item, index) => {
        return <p key={index}>{item.content[0].value}</p>;
        
      })} 
                  
                  </div>
                ))}
                
                {/* <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                  In eu dui molestie, molestie lectus eu, semper lectus.
                </p>
                <h3 className="text-black fw-bolder">Next on the pipeline</h3>
                <p>
                  Duis eu velit tempus erat egestas efficitur. In hac habitasse
                  platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                  Aenean pharetra quis lacus at viverra. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos.
                </p>
                <p className="">
                  Morbi efficitur auctor metus, id mollis lorem pellentesque id.
                  Nullam posuere maximus dui et fringilla.
                </p> */}
              </div>
            </div>
            {/* <div className="row justify-content-center mt-lg-0 mt-4 mb-lg-0 mb-0">

            </div> */}
            <div className="row justify-content-center">
              <div className="col-12">
              <div style={{width:"100%"}} className="d-lg-none d-block">
             <div style={{width:"100%" ,height:"100%"}}>
                <img src= {entries[myIndex]?.fields?.bannerAd}  className="img-fluid" alt="" /> 
                
              </div>
             </div>
              </div>
            </div>
            <div className="row  mt-lg-0 mt-4 mb-lg-5 mb-0">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
              {/* {
      entries.map((entry) => (
        <div key={entry.sys.id}>
          
          
          { entry.fields.articleBody.content.slice(6, 50).map((item, index) => {
        return <p key={index}>{item.content[0].value}</p>;
        
      })}
        </div>
      ))
} */}
         {entries[myIndex]?.fields?.articleBody?.content.slice(6, 50).map((item, index) => {
        return <p key={index}>{item.content[0].value}</p>;
        
      })} 
                {/* <p className="mt-4">
                  Aenean pharetra quis lacus at viverra. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Aliquam quis posuere ligula.
                </p>
                <p>
                  In eu dui molestie, molestie lectus eu, semper lectus. Proin
                  at justo lacinia, auctor nisl et, consequat ante. Donec sit
                  amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem
                  pellentesque id. Nullam posuere maximus dui et fringilla.
                  Nulla non volutpat leo.
                </p>
                <p>A list looks like this:</p>
                <ul className="ms-0 ps-lg-3">
                  <li>First item in the list</li>
                  <li>
                    Second item in the list lorem ipsum dolor sit amet nunc
                    felis dolor lorem ipsum sit amet
                  </li>
                  <li>Third item in the list</li>
                </ul>
                <p className=" my-4">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                </p>
                <p>
                  Thanks for reading, <br className="d-lg-block d-none" />
                  Mika
                </p> */}
                <div className="fb__box py-4 d-lg-block d-none">
                  <div className="row mx-0">
                    <div className="col-lg-6">
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <i className="fa-brands fa-facebook"></i>
                        <div className="fw-bold">Share on Facebook</div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <i className="fa-brands fa-twitter"></i>
                        <div className="fw-bold">Share on Twitter</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-lg-none d-block">
                  <p className="small text-black mt-4 mb-0 fw-bold">Share:</p>
                  <div className="fb__box mt-0 mb-3">
                    <div className="row mx-0 ">
                      <div
                        className="col-4 d-flex justify-content-center align-items-center py-3 fs-4"
                        style={{ borderRight: "1px solid #ccc" }}
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </div>
                      <div
                        className="col-4 d-flex justify-content-center align-items-center py-3 fs-4"
                        style={{ borderRight: "1px solid #ccc" }}
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                      <div className="col-4 d-flex justify-content-center align-items-center py-3 fs-4">
                        <i className="fa-brands fa-whatsapp"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4 fw-bold">
                  Tags:{" "}
                  <span className="text-decoration-underline">
                  {/* {entries.map((entry) => (
                  <span key={entry.sys.id}>
                    {entry?.fields?.tag}
                    
                    
                  </span>
                ))} */}
                         {entries[myIndex]?.fields?.tag} 
                  </span>
                </div>
                <hr />
                <div className="d-lg-none d-block">
                  <div className="d-flex gap-3 align-items-start">
                    <div className="w-100">
                      <img
                        src="/nina.png"
                        className="rounded-circle w-100"
                        
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="fs-6  mb-1">
                        <span className="fw-bolder">MIKA MATIKAINEN </span>
                        is a Design Founder & Advisor, Berlin School of Creative
                        Leadership Executive MBA participant, Zippie advisor,
                        Wolt
                      </p>
                    </div>
                  </div>
                  <p>
                  co-founder, and Nordic Rose stakeholder. 
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
             <div style={{width:"100%",height:"600px"}} className="d-lg-block d-none">
             <div style={{transform:"rotate(90deg)",transformOrigin:"center",width:"100%" ,height:"100%"}}>
                <img src= {entries[myIndex]?.fields?.bannerAd}  className="videoad" alt="" /> 
                
              </div>
             </div>
              </div>
            </div>
          </div>
          <div className="mt-lg-5 mt-0 pt-5">
            <div className="d-flex align-items-center">
              <span className="w-100 d-flex vl"></span>
              <img src="/eye.png" className="img-fluid" alt="" />
              <span className="w-100 d-flex vl"></span>
            </div>
          </div>
          <div className="container px-0 px-lg-3">
            <h2 className="mt-4 fw-bolder text-center text-black">
              What to read next?
            </h2>

            <div className="row mt-4 mx-0" style={{ gap: "20px 0px" }}>
              <div className="col-lg-4">
              <Link href="Articles?id=0" className="text-reset text-decoration-none">
                    <img src={entries[1].fields.heroImageUrl} alt="" className="w-100" />
                    <p className="fs-4 text-center fw-600 px-3 mt-4">
                
                {entries[1].fields.title}
          
                    </p>

                    </Link>
              </div>
              <div className="col-lg-4">
              <Link href="Articles?id=0" className="text-reset text-decoration-none">
                    <img src={entries[0].fields.heroImageUrl} alt="" className="w-100" />
                    <p className="fs-4 text-center fw-600 px-3 mt-4">
                
                {entries[0].fields.title}
          
                    </p>

                    </Link>
              </div>
              <div className="col-lg-4">
              <Link href="Articles?id=0" className="text-reset text-decoration-none">
                    <img src={entries[2]?.fields?.heroImageUrl} alt="" className="w-100" />
                    <p className="fs-4 text-center fw-600 px-3 mt-4">
                
                {entries[2]?.fields?.title}
          
                    </p>

                    </Link>
              </div>
              <div className="col-lg-4">
              <Link href="Articles?id=0" className="text-reset text-decoration-none">
                    <img src={entries[3]?.fields?.heroImageUrl} alt="" className="w-100" />
                    <p className="fs-4 text-center fw-600 px-3 mt-4">
                
                {entries[3]?.fields?.title}
          
                    </p>

                    </Link>
              </div>
              <div className="col-lg-4">
              <Link href="Articles?id=0" className="text-reset text-decoration-none">
                    <img src={entries[4]?.fields?.heroImageUrl} alt="" className="w-100" />
                    <p className="fs-4 text-center fw-600 px-3 mt-4">
                
                {entries[4]?.fields?.title}
          
                    </p>

                    </Link>
              </div>
              <div className="col-lg-4">
              <Link href="Articles?id=0" className="text-reset text-decoration-none">
                    <img src={entries[5]?.fields?.heroImageUrl} alt="" className="w-100" />
                    <p className="fs-4 text-center fw-600 px-3 mt-4">
                
                {entries[5]?.fields?.title}
          
                    </p>

                    </Link>
              </div>
            </div>
            <div className="row mx-0 mt-5 justify-content-center">
              <div className="col-lg-8 px-0 px-lg-3">
                <div className="signup__box p-5 mb-5">
                  <h1 className="text-center fw-bold text-black">
                    Sign up for the newsletter
                  </h1>
                  <p className="text-center fs-4 fw-500 mt-3">
                    If you want relevant updates occasionally, sign up for the
                    private newsletter. Your email is never shared.
                  </p>

                  <div
                    className="d-flex  justify-content-between ps-3 align-items-center mt-5 mb-4"
                    style={{ border: "2px solid #000" }}
                  >
                    <div>
                      <input
                        type="text"
                        className="bg-transparent fs__3 w-100 border-0 text-dark small"
                        placeholder="Enter your email..."
                      />
                    </div>
                    <div>
                      <div className="bg-black text-white text-center fs-6 fs__3 py-2 px-4 text-uppercase fw-bolder" style={{whiteSpace:'nowrap'}}>
                        
                        Sign Up
                      </div>
                    </div>
                  </div>
                </div>
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
  );
};

export default Articles;
