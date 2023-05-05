import React, { useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Footer2 from "@/components/Footer2";
import { client } from "../../contentful.js";
import Pagination from "./Pagination.jsx";

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
const news = ({ entries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = entries.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(entries)

  const items = currentItems.map((item,index) => (
    <div className="col-lg-6" key={item.id}>
      <Link href={"Articles?id="+index} className="text-reset text-decoration-none">
        <img src={item.fields.heroImageUrl} alt="" className="w-100" />
        <p className="fs-4 text-center fw-600 px-3 mt-4">
          {item.fields.title}
          {console.log(entries)}
        </p>
      </Link>
    </div>
  ));
  
  return (
    <>
      {/* <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src="/nordicrose.png" className="nordic__logo" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto poppins">
                <li class="nav-item">
                  <a
                    class="nav-link text-dark text-uppercase active poppins fw-500"
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-dark poppins fw-500 text-uppercase"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-dark poppins fw-500 text-uppercase"
                    href="#"
                  >
                    Links
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-dark poppins fw-500 text-uppercase"
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
      <section className="terms___section ">
        {/* ====================== BANNER START ========================= */}
        <div className="container">
          <div className="d-flex justify-content-center mt-5">
            <img
              src="/news__section.png"
              className="img-fluid mx-auto"
              alt=""
            />
          </div>
        </div>

        {/* ====================== BANNER END ========================= */}

        {/* ====================== TEXT CONTENT START ========================= */}
        <section className="text___content___section">
          <div className="container">
            <div className="row justify-content-center mt-lg-0 mt-4 mb-lg-5 mb-0">
              <div className=" col-lg-8 pt-lg-5 pt-2 col-12">
                <h1 className="fw-bold text-center display-5 text-black">
                  A few words about this blog{" "}
                  <br className="d-lg-block d-none" /> platform, Ghost, and how
                  this <br className="d-lg-block d-none" /> site was made
                </h1>
                <p className="text-center fs-5 mt-4">
                  Why Ghost (& Figma) instead of Medium, WordPress or{" "}
                  <br className="d-lg-block d-none" /> other options?
                </p>
                <hr
                  className="py-1"
                  style={{ height: "2px !important", opacity: "1" }}
                />
                <h1 className="text-center fw-700 mt-5 text-black">
                  All articles
                </h1>
                <div className="row mx-0 mt-5" style={{ gap: "20px 0px" }}>
                  {items}
                  {/* 
                  <div className="col-lg-6">
                    <Link href="Articles?id=0" className="text-reset text-decoration-none">
                    <img src={entries[1].fields.heroImageUrl} alt="" className="w-100" />
                    <p className="fs-4 text-center fw-600 px-3 mt-4">
                
                {entries[1].fields.title}
                {console.log(entries)}
          
                    </p>

                    </Link>

                  </div>
                  <div className="col-lg-6">
                    <Link href="Articles?id=1" className="text-reset text-decoration-none">
                    <img src={entries[0].fields.heroImageUrl} alt="" className="w-100" />
                    <p className="fs-4 text-center fw-600 px-3 mt-4">
                    {entries[0].fields.title}
                    </p>

                    </Link>
                  </div> */}
                </div>
                <div className="d-flex justify-content-center mt-4">
                 <Pagination
                   currentPage={currentPage}
                   totalPages={Math.ceil(entries.length / itemsPerPage)}
                   onPageChange={handlePageChange}
                 />
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

export default news;
