import React from "react";
import "./Home.css";
import "./bootstrap.css";
import "./Button.css";
import Product from "./Product";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SavingsIcon from "@mui/icons-material/Savings";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Main banner  */}
      <img
        className="hero-img fulwid"
        src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      {/* Text above the banner  */}
      <div className="hero-text flx-col aln-itm-cent fulwid">
        <h1>Shop top brands from 40% to 60% off end of season sale</h1>
        <p>(Extra 10% off on credit cards)</p>
        <button className="button">Explore now</button>
      </div>
      {/* Container with Products */}
      <div className="flx-row just-around pdlr-5">
       
          <Product
            id="Tokyo Takies #987215"
            title="Women Bodycon "
            price={649.98}
            image="https://rukminim1.flixcart.com/image/620/744/xif0q/dress/l/0/c/s-318tk9007-selvia-original-imaggpy5aywehhgh.jpeg?q=50"
          />
        
          <Product
            id="Levi's #029332"
            title="Casual Blazer Women"
            price={256.2}
            image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14230964/2021/9/29/9143cf83-f19a-47ba-934d-d0b9a81a3ee41632918349391-all-about-you-Women-Blazers-4251632918348782-5.jpg"
          />
       

        <Product
          id="Omph! #109332"
          title="Women Ruffled Yellow Dress"
          price={159.08}
          image="https://rukminim1.flixcart.com/image/620/744/xif0q/dress/y/j/w/l-md138-oomph-original-imafygwq9ny6fzmf-bb.jpeg?q=50"
        />


      </div>
      <div className="flx-row just-around pdlr-5">
        <Product
          id="Killer #987215"
          title="Casual Ballon Sleeve Top Women"
          price={649.98}
          image="https://rukminim1.flixcart.com/image/832/832/kzblocw0/blazer/w/b/w/m-kbz-1017-killer-original-imagbcxakzwcbwt9.jpeg?q=70"
        />
        
        <Product
          id="Funday Fashion #029332"
          title="Casual Bell Sleeve Printed Women Top"
          price={256.2}
          image="https://rukminim1.flixcart.com/image/832/832/kc0u7bk0/shirt/j/0/e/m-pk19sh09g-surhi-original-imaft8vgvrdgepn8.jpeg?q=70"
        />
      </div>
      {/* Main Section With sale banner and Products */}
      <div className="flx-row just-around">
        <div className="flx-col aln-itm-cent sale-content">
          <h1>Find Out the latest sale price upto 50% off</h1>
          <p>(Extra 10% off on credit cards)</p>
          <Product
            id="Boult #4392321"
            title="Bould Audio Earbuds"
            price={1094.98}
            image="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16297728/2022/4/13/b56ef37d-a27b-448e-8246-b9db2691020d1649841271619-BOULT-AUDIO-Xpods-True-Wireless-Earbuds---Black-145164984127-1.jpg"
          />
          <h3>Fast, Free Delivery 🚚 </h3>

          <div className="flx-row just-around fulwid pdlr-5 data-content">
            <span className="flx-col aln-itm-cent">
              <TravelExploreIcon />
              <p>Exclusive deals </p>
            </span>
            <span className="flx-col aln-itm-cent">
              <SavingsIcon />
              <p>Rx savings </p>
            </span>
            <span className="flx-col aln-itm-cent">
              <AnalyticsIcon />
              <p> Convenient options</p>
            </span>
          </div>
        </div>
        {/* </div> */}
        <div className="flx-col just-around aln-itm-cent">
          <div className="flx-row just-around">
            <Link to="/productopen">
              <Product
                id="Apple #apl65732"
                title="Apple Airpods 2nd gen With charging case"
                price={1094.98}
                image="https://rukminim1.flixcart.com/image/612/612/kpinwy80/headphone/x/r/e/mmef2hn-a-apple-original-imag3qe9hphsevrt.jpeg?q=70"
              />
            </Link>
            <Product
              id="Noise #vs102"
              title="Noise Buds with 24hrs playback"
              price={1094.98}
              image="https://rukminim1.flixcart.com/image/612/612/l1dwknk0/headphone/o/y/c/-original-imagcymax2nfhagu.jpeg?q=70"
            />
          </div>
          <div className="flx-row just-around">
            <Product
              id="#Mivi #5432121"
              title="MiVi DuoPods F30"
              price={1094.98}
              image="https://rukminim1.flixcart.com/image/612/612/l1dwknk0/headphone/o/y/c/-original-imagcymax2nfhagu.jpeg?q=70"
            />
            <Product
              id="boAt #13109"
              title="boAt AirDopes PRO with 11mm driver"
              price={1094.98}
              image="https://rukminim1.flixcart.com/image/612/612/l572ufk0/headphone/j/w/p/-original-imagfxg3rxzezzag.jpeg?q=70"
            />
          </div>
        </div>
      </div>
      {/* More content (Products) */}
      <div className="flx-col">
        <div className="flx-row just-around pdlr-10 ">
          <Product
            id="Levi's"
            title="Men Regular fit Causal shirt"
            price={1094.98}
            image="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14851420/2021/11/23/30968caf-0503-4a22-997d-33f05caaca871637646715399-Levis-Men-Sweatshirts-9661637646714865-5.jpg"
          />
          <Product
            id="HighLander"
            title="White Sweatshirts Slim fit "
            price={1094.98}
            image="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16680942/2022/1/4/0e28a307-2949-450d-ad1e-6727fdddac9e1641296062653HIGHLANDERMenWhiteHoodedSweatshirt1.jpg"
          />
          <Product
            id="Roadster"
            title="Men Regular Fit Causal Shirt"
            price={1094.98}
            image="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2038071/2019/4/9/76fb9a0d-3fb0-4491-8e08-bc7f276bb24c1554799992965-Roadster-Men-Black--White-Slim-Fit-Solid-Casual-Shirt-322155-5.jpg"
          />
          <Product
            id="Here $ Now"
            title="Green Pure Cotton Slim Fit Casual"
            price={1094.98}
            image="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15353184/2021/9/21/47dc58ec-f3f9-4ac2-8a21-56d667a08f311632219389586-HERENOW-Men-Shirts-1531632219389042-6.jpg"
          />
        </div>
        <div className="flx-row just-around pdlr-10 top-mrgin--20">
          <Product
            id="Iqraar #876104"
            title="Women Fit & Flare Maroon"
            price={1094.98}
            image="https://rukminim1.flixcart.com/image/620/744/kixgtjk0-0/dress/9/x/j/l-1iqgwnwne-iqraar-original-imafyhwv9kwqax7t.jpeg?q=50"
          />
          <Product
            id="Hiva Trendz #921863"
            title="Women Ribbed Pink Dress "
            price={1094.98}
            image="https://rukminim1.flixcart.com/image/620/744/xif0q/dress/7/f/c/xs-a1204-sheetal-associates-original-imag9xt9czmjmzrz-bb.jpeg?q=50"
          />
          <Product
            id="Rudraaksha #019332"
            title="Curved LED Gaming Monitor"
            price={1094.98}
            image="https://rukminim1.flixcart.com/image/620/744/xif0q/dress/l/5/f/s-1300-zanies-original-imaggshmkz7rmbg5.jpeg?q=50"
          />
        </div>
        <div className="flx-row just-around pdlr-10 top-mrgin--20">
          <Product
            id="Nivea"
            title="Freash Natural Deodrant"
            price={656}
            image="https://rukminim1.flixcart.com/image/612/612/xif0q/deodorant/4/1/m/-original-imaggqzz2k4zrr4x.jpeg?q=70"
          />
          <Product
            id="Dream Girl"
            title="La French Perfume Eau De Parfum"
            price={399}
            image="https://rukminim1.flixcart.com/image/612/612/ko382a80/perfume/y/1/k/100-dream-girl-perfume-with-long-lasting-premium-fragances-eau-original-imag2mhyw9h6stpf.jpeg?q=70"
          />
          <Product
            id="The Man Company"
            title="Sky Premuim fragrance Perfect For ALL"
            price={975}
            image="https://rukminim1.flixcart.com/image/612/612/xif0q/perfume/d/0/d/60-edp-for-men-sky-premium-fragrance-perfect-for-everyday-use-original-imaggkqakancjbpk.jpeg?q=70"
          />
          <Product
            id="Al Hisan  "
            title="La French Al Hisan Perfume Eau De Parfum "
            price={489}
            image="https://rukminim1.flixcart.com/image/612/612/kzegk280/perfume/7/u/o/100-al-hisan-perfume-eau-de-parfum-blended-with-oud-and-french-original-imagbf4cfwjs7pz9.jpeg?q=70"
          />
        </div>
      </div>
      {/* Data content Key features   */}
      <h1 className="p-10">
        Shop your First Product Now and get get 10% flat off, Free Delivery 🚚{" "}
      </h1>
      <br />
      <div className="flx-row just-around data-content features">
        <span className="flx-col aln-itm-cent">
          <PaymentsIcon />
          <h3>100% Secure Payments 💰 </h3>
          <p className="text top-mrgin--20">
            Payment Protection, Easy return policy
          </p>
        </span>
        <span className="flx-col aln-itm-cent">
          <SavingsIcon />
          <h3>Savings.🏦</h3>
          <p className="top-mrgin--20">Get assured cashback on every Product</p>
        </span>
        <span className="flx-col aln-itm-cent">
          <TravelExploreIcon />
          <h3>Exclusive deals 🎉</h3>
          <p className="top-mrgin--20">Find daily new Deals on best price</p>
        </span>
        <span className="flx-col aln-itm-cent">
          <SupportAgentIcon />
          <h3>24/ Support 🙎</h3>
          <p className="top-mrgin--20">Browse our FAQ's or Submit your query</p>
        </span>
      </div>
      <div className="flx-row just-around pdlr-5">
        <Product
          id="Levi's #987215"
          title="Casual Ballon Sleeve Top Women"
          price={649.98}
          image="https://rukminim1.flixcart.com/image/620/744/xif0q/top/y/n/9/s-a0174-0000-yellow-levi-s-original-imag8eajhrzyjxbz-bb.jpeg?q=50"
        />
        <Product
          id="LeoTude #109332"
          title="No Print Women Round Neck T-Shirt"
          price={159.08}
          image="https://rukminim1.flixcart.com/image/620/744/l4yi7bk0/t-shirt/o/1/4/s-grl-fs49-red-battale-leotude-original-imagfqu6zafgywgh.jpeg?q=50"
        />
        <Product
          id="Funday Fashion #029332"
          title="Casual Bell Sleeve Printed Women Top"
          price={256.2}
          image="https://rukminim1.flixcart.com/image/620/744/xif0q/top/o/f/d/m-top-netleaf-original-imagh7ypmc6nmrat.jpeg?q=50"
        />
        <Product
          id="Tokyo Takies #437621"
          title="Casual Puff Sleeve Solid Women Black Top"
          price={313}
          image="https://rukminim1.flixcart.com/image/620/744/kxaq7ww0/top/x/j/j/xs-tttp005559-tokyo-talkies-original-imag9s8kmg86wh4f.jpeg?q=50"
        />
      </div>{" "}
      <div className="flx-row just-around pdlr-5">
        <Product
          id="Levi's #987215"
          title="Casual Ballon Sleeve Top Women"
          price={649.98}
          image="https://rukminim1.flixcart.com/image/620/744/xif0q/top/y/n/9/s-a0174-0000-yellow-levi-s-original-imag8eajhrzyjxbz-bb.jpeg?q=50"
        />
        <Product
          id="LeoTude #109332"
          title="No Print Women Round Neck T-Shirt"
          price={159.08}
          image="https://rukminim1.flixcart.com/image/620/744/l4yi7bk0/t-shirt/o/1/4/s-grl-fs49-red-battale-leotude-original-imagfqu6zafgywgh.jpeg?q=50"
        />
        <Product
          id="Funday Fashion #029332"
          title="Casual Bell Sleeve Printed Women Top"
          price={256.2}
          image="https://rukminim1.flixcart.com/image/620/744/xif0q/top/o/f/d/m-top-netleaf-original-imagh7ypmc6nmrat.jpeg?q=50"
        />
        <Product
          id="Tokyo Takies #437621"
          title="Casual Puff Sleeve Solid Women Black Top"
          price={313}
          image="https://rukminim1.flixcart.com/image/620/744/kxaq7ww0/top/x/j/j/xs-tttp005559-tokyo-talkies-original-imag9s8kmg86wh4f.jpeg?q=50"
        />
      </div>
    </div>
  );
}

export default Home;
