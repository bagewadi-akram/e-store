import React from 'react'
import   './Footer.css'

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-gray">
          <div className="footer-custom">
            <div className="footer-lists">
              <div className="footer-list-wrap">
                <a href="#">
                  <img
                    className="footerlogo"
                    src="https://www.dreamhost.com/assets/domains/logo.store.color-b8b6423a038c3ba1b637f437c7b861bd7001bdffb7ecc9c4f39e12203e4122f7.svg"
                    alt=""
                  />
                </a>
                <h6 className="ftr-hdr">Toll Free</h6>
                <ul className="ftr-links-sub">
                  <li>800-952-5592</li>
                </ul>
              </div>
              {/* <!--/.footer-list-wrap--> */}
              <div className="footer-list-wrap">
                <h6 className="ftr-hdr">Customer Service</h6>
                <ul className="ftr-links-sub">
                  <li>
                    <a href="/help/talktous.html" rel="nofollow">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/help/placingorders.html" rel="nofollow">
                      Ordering
                    </a>
                  </li>
                  <li>
                    <a href="/help/shipping.html" rel="nofollow">
                      Shipping &amp; Delivery
                    </a>
                  </li>
                  <li>
                    <a href="/help/shippingreturns.html" rel="nofollow">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="/help/international-shipping.html" rel="nofollow">
                      International Orders
                    </a>
                  </li>
                  <li>
                    <a href="/~/egift-cards/" rel="nofollow">
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a href="/help/faq.html" rel="nofollow">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-list-wrap">
                <h6 className="ftr-hdr">About store.com</h6>
                <ul className="ftr-links-sub">
                  <li>
                    <a
                      href="/asp/aboutus/default-asp/_/posters.htm"
                      rel="nofollow"
                    >
                      Our Company
                    </a>
                  </li>
                  <li>
                    <a href="http://corporate.art.com/careers" rel="nofollow">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/asp/landing/artistrising" rel="nofollow">
                      Artist Rising
                    </a>
                  </li>
                  <li>
                    <a href="/~/art-for-business" rel="nofollow">
                      Business &amp; Trade Sales
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://affiliates.art.com/index.aspx"
                      rel="nofollow"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a href="/catalog" rel="nofollow">
                      <strong>Shop Our Catalog</strong>
                    </a>
                  </li>
                  <li>
                    <a href="http://blog.art.com" rel="nofollow">
                      ART.COM BLOG
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--/.footer-lists--> */}
            <div className="footer-email">
              <h6 className="ftr-hdr">
                Sign up for exclusive offers and inspiration
              </h6>
              <div id="ftr-email" className="ftr-email-form">
                <form
                  id="ftrEmailForm"
                  method="post"
                  action="http://em.art.com/pub/rf"
                >
                  <div className="error">
                    Please enter a valid email address
                  </div>
                  <input
                    type="text"
                    name="email_address_"
                    id="ftrEmailInput"
                    className="input"
                    placeholder="Enter email address"
                  />

                  <input
                    type="submit"
                    className="buttonfooter"
                    value="SUBMIT"
                  />
                  <input type="hidden" name="country_iso2" value="" />
                  <input type="hidden" name="language_iso2" value="en" />
                  <input type="hidden" name="site_domain" value="art.com" />
                  <input
                    type="hidden"
                    name="email_acq_source"
                    value="01-000001"
                  />
                  <input
                    type="hidden"
                    name="email_acq_date"
                    value=""
                    id="ftr-email-date"
                  />
                  <input type="hidden" name="brand_id" value="ART" />
                  <input
                    type="hidden"
                    name="_ri_"
                    value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk"
                  />
                </form>
              </div>
              {/* <!--/.ftr-email-form--> */}
              <div className="ftr-email-privacy-policy"></div>
            </div>

            {/* <!--/.footer-email--> */}
            <div className="footer-social">
              <h6 className="ftr-hdr">Follow Us</h6>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com"
                    title="Facebook"
                  >
                    <img
                      width="24"
                      height="24"
                      alt="Like us on Facebook"
                      src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://plus.google.com"
                    title="Google+"
                  >
                    <img
                      width="24"
                      height="24"
                      alt="Follow us on Google+"
                      src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com" target="_blank">
                    <img
                      width="24"
                      height="24"
                      alt="Follow us on Pinterest"
                      src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"
                    />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="http://instagram.com">
                    <img
                      width="24"
                      height="24"
                      alt="Follow us on Instagram"
                      src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    title="Twitter"
                  >
                    <img
                      width="67"
                      alt="Follow us on Twitter"
                      src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--/.footer-social--> */}
            <div className="footer-legal">
              <p>
                &copy; store.com Inc. All Rights Reserved. |
                <a href="/help/privacy-policy.html" rel="nofollow">
                   Privacy Policy |
                </a>
                <a href="/help/terms-of-use.html" rel="nofollow">
                  Terms of Use |
                </a>
                <a href="/help/terms-of-sale.html" rel="nofollow">
                  Terms of Sale
                </a>
              </p>
              <p>
                Store.com, You+Store, and Photos [to] Store are trademarks or
                registered trademarks of store.com Inc.
              </p>
              <p>
                Various aspects of this website are covered by issued INDIAN
                patent No. 7,973,796 and other pending patent applications.
              </p>
            </div>
            {/* <!--/.footer-legal--> */}
           
            {/* <!--/.footer-payment--> */}
          </div>
          {/* <!--/.footer-custom--> */}
        </div>
        {/* <!--/.footer-gray--> */}
      </footer>
    </div>
  );
}

export default Footer