import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer__section">
       
        <div className="container-fluid">
          <div className="d-flex flex-wrap footer__row my-3 mx-0  justify-content-between">
            <div className="col-lg-9 d-flex  gap-3 align-items-center flex-wrap">
              <div>
                <Link href="/">
                  <img src="/Logo.png" className="footer___logo" alt="logo" />
                </Link>
              </div>
              <div>
                <span className="copy__right">© 2023 E-legal, Inc.</span>
              </div>
              <div>
                <ul className="footer__ul flex-wrap">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/Blogs">Blogs</Link>
                  </li>
                  {/* <li>
                    <Link href="/checkout">Checkout</Link>
                  </li> */}
                  <li>
                    <Link href="/termsofuse">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="privacypolicy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col d-flex justify-content-lg-end justify-content-center">
              <ul className="social__icons mt-xl-0 mt-3 d-flex list-unstyled gap-xl-4 gap-3 flex-wrap">
                <li>
                  <a
                    href="https://www.tiktok.com/@e_legalai?lang=en"
                    target="_blank"
                  >
                    <img src="/tiktok.png" alt="tiktok" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/e-legalai/?viewAsMember=true"
                    target="_blank"
                  >
                    <img src="/linkedin.png" alt="Linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/e_legalai/"
                    target="_blank"
                  >
                    <img src="/instagram.png" alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/elegalai" target="_blank">
                    <img src="/facebook.png" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/E_LegalAI" target="_blank">
                    <img src="/twitter.png" alt="twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
