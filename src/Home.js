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
        <Link to="/item">
          <button className="button">Explore now</button>
        </Link>
      </div>
      {/* Container with Products */}
      <div className="flx-row just-around pdlr-5">
        <Product
          id="MABISH by Sonal Jain #437621"
          title="Printed Cape Top with Draped Skirt"
          price={2009}
          image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19691544/2022/9/15/e31b71e8-e772-427d-9177-76c4eb8fa3941663245916928DressesDIVYANKWomenDressesDIVYANKWomenLoungeShortsLeadingLad4.jpg"
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
              <AnalyticsIcon fontSize="large" />
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
        <h1 className="flx-row aln-itm-cent just-around">
          Find out more offer on fesitve brand{" "}
          <button className="btn blue">View all</button>
        </h1>
        <div className="flx-row just-around pdlr-10">
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
        <h1 className="flx-row aln-itm-cent just-around">
          Find out our Latest collection on perfumes{" "}
          <button className="btn blue">View all</button>
        </h1>

        <div className="flx-row just-around pdlr-10 top-mrgin--20">
          <Product
            id="Nivea"
            title="Freash Natural Deodrant"
            price={656}
            image="https://rukminim1.flixcart.com/image/612/612/xif0q/deodorant/4/1/m/-original-imaggqzz2k4zrr4x.jpeg?q=70"
          />
          <Product
            id="MINISO "
            title="EDT Long Lasting Everyday Wear Fragrance (Dream Musk) "
            price={399}
            image="https://rukminim1.flixcart.com/image/612/612/kdeum4w0/combo-kit/k/e/p/neck-deo150-ml-neck-50-ml-perfume-neck-patel-original-imafubnfbzjnbjbs.jpeg?q=70"
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

      <br />
      <h1 className="flx-row aln-itm-cent just-around">
        Exclusive Party Wear On Flat 10% Off{" "}
        <button className="btn blue">Veiw all</button>
      </h1>

      <div className="flx-row just-around pdlr-5">
        <Product
          id="SCORPIUS #987215"
          title="Women Red Self-Design Co-Ord Set"
          price={649.98}
          image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18360196/2022/5/21/9896db9b-4685-4a34-ab41-d01c1ef4b7b91653119426349Co-Ords6.jpg"
        />
        <Product
          id="KASSUALLY #109332"
          title="Women White Embellished Top with Skirt Co-Ords Set"
          price={159.08}
          image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/20496090/2022/10/21/d92ac443-eebe-4ec3-9971-103750fb12951666369607342ClothingSet7.jpg"
        />
        <Product
          id="Sera  #029332"
          title="Women Blue & Red Printed Co-ords Set"
          price={256.2}
          image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17784326/2022/4/6/b29f0e56-d6d7-405a-915a-1106927a43c91649256433629Co-Ords6.jpg"
        />
        <Product
          id="MABISH by Sonal Jain #437621"
          title="Printed Cape Top with Draped Skirt"
          price={2009}
          image="https://i.etsystatic.com/25808989/r/il/7b0036/4222215667/il_794xN.4222215667_etmc.jpg"
        />
      </div>
      <div className="flx-row just-around pdlr-5">
        <Product
          id="Levi's #987215"
          title="Casual Ballon Sleeve Top Women"
          price={649.98}
          image="https://rukminim1.flixcart.com/image/832/832/kksmikw0/top/u/g/e/l-qe12002-quintessentials-original-imagyfjgrq3m9ayh.jpeg?q=70"
        />
        <Product
          id="LeoTude #109332"
          title="No Print Women Round Neck T-Shirt"
          price={159.08}
          image="https://rukminim1.flixcart.com/image/832/832/l3os4280/top/w/c/4/m-casual-solid-womens-crop-tops-sahana-style-original-imager3jg5mz4py7.jpeg?q=70"
        />
        <Product
          id="Funday Fashion #029332"
          title="Casual Bell Sleeve Printed Women Top"
          price={256.2}
          image="https://rukminim1.flixcart.com/image/832/832/kctf0cw0/top/f/p/p/s-t0779-chimpaaanzee-original-imaftug4zghswc3k.jpeg?q=70"
        />
        <Product
          id="Tokyo Takies #437621"
          title="Casual Puff Sleeve Solid Women Black Top"
          price={313}
          image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14025824/2021/9/21/c94b852a-b399-43a7-996d-de2cf8b6b4f21632209125692-VENI-VIDI-VICI-Olive-Ruched-Coordinate-Dress-278163220912529-1.jpg"
        />
      </div>
      <div className="flx-row aln-itm-cent just-around">
        <div className="flx-col ">
          <div className="flx-row aln-itm-cent just-bet">
            <span className="flx-col aln-itm-cent p-10">
              <TravelExploreIcon fontSize="large" />
              <h3>Exclusive deals 🎉</h3>
              <p className="top-mrgin--20">
                Find daily new Deals on best price
              </p>
            </span>
            <span className="flx-col aln-itm-cent p-10">
              <SavingsIcon fontSize="large" />
              <h3>Savings.🏦</h3>
              <p className="top-mrgin--20">
                Get assured cashback on every Product
              </p>
            </span>
          </div>
          <div className="flx-row aln-itm-cent just-bet">
            <span className="flx-col aln-itm-cent p-10">
              <SupportAgentIcon fontSize="large" />
              <h3>24/ Support 🙎</h3>
              <p className="top-mrgin--20">
                Browse our FAQ's or Submit your query
              </p>
            </span>
            <span className="flx-col aln-itm-cent p-10">
              <PaymentsIcon fontSize="large" />
              <h3>100% Secure Payments 💰 </h3>
              <p className="text top-mrgin--20">
                Payment Protection, Easy return policy
              </p>
            </span>
          </div>
        </div>
        <div className="features">
          <h1 className="p-10">
            Shop your First Product Now and get get 10% flat off, Free Delivery
            🚚
          </h1>
        </div>
      </div>
      <div className="pos-rel">
        <img
          className=""
          alt=""
          src="https://images.pexels.com/photos/5625036/pexels-photo-5625036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height="250px"
          width="50%"
        />
        <span className="pos-abs textonbanner flx-col aln-itm-cent">
          <h1 className="">Fashion Bazar</h1>
          <p className="top-mrgin--20">4Lakh+ Style's</p>
          <p className="top-mrgin--20">Under low Price </p>
        </span>
        <img
          className=""
          alt=""
          src="https://images.pexels.com/photos/5872355/pexels-photo-5872355.jpeg?auto=compress&cs=tinysrgb&w=600"
          height="250px"
          width="50%"
        />
        <img
          className="pos-abs iconhurry"
          alt=""
          src="https://www.farmcollectivewine.com/assets/images/products/badges/thumb/Hurry-PLIYJF.png"
        />
        <button className="pos-abs buttonhurry"> Explore More </button>
      </div>
      <div>
        <div className="wrapflex">
          <h1>Shop By Categories 🛍</h1>
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://cdn.pixabay.com/photo/2022/05/21/09/19/women-7211064__340.jpg"
              alt=""
            />
            <div className="pos-abs">
              <h4> Causal Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://images.pexels.com/photos/2876621/pexels-photo-2876621.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="pos-abs">
              <h4> Sports Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://cdn.pixabay.com/photo/2022/08/07/12/39/women-7370510__340.jpg"
              alt=""
            />
            <div className="pos-abs">
              <h4> Western Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="pos-abs">
              <h4> Lounge Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://images.pexels.com/photos/1253370/pexels-photo-1253370.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="pos-abs">
              <h4> Ethnic Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://www.sassymamahk.com/wp-content/uploads/2022/03/plus-sized-womens-clothing-hong-kong-style-768x597.jpg"
              alt=""
            />
            <div className="pos-abs">
              <h4> Plus Size Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://media.istockphoto.com/id/1173450465/photo/young-creative-people-in-modern-office-group-of-young-business-people-hipster-team-are.jpg?b=1&s=170667a&w=0&k=20&c=zCwuykySVn-Kly_eWUXq2ZT7ZH78KNcyOaCF-2k4wSk="
              alt=""
            />
            <div className="pos-abs">
              <h4> Work Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFTZpzyErtEO0cOkfz7pOFoZp_I24ud0_-A&usqp=CAU"
              alt=""
            />
            <div className="pos-abs">
              <h4> Sleep Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://article.images.consumerreports.org/image/upload/w_652,f_auto,q_auto,ar_16:9,c_lfill/v1631643430/prod/content/dam/CRO-Images-2021/Electronics/09Sept/CR-Tech-Inlinehero-best-earbuds-0921"
              alt=""
            />
            <div className="pos-abs">
              <h4> Earbuds </h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://optiko.ca/wp-content/uploads/2020/09/optometrist-ne-calgary-1.jpg"
              alt=""
            />
            <div className="pos-abs">
              <h4> Eye Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://images.pexels.com/photos/5693381/pexels-photo-5693381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="pos-abs">
              <h4> Kids Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://sheerluxe.com/sites/sheerluxe/files/styles/hero_lg/public/articles/2022/10/sl211022-lululemon-landscape-hero_0.jpg.webp?itok=cKQj6Fol"
              alt=""
            />
            <div className="pos-abs">
              <h4> Active Wear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>{" "}
          <div className="cate flx-col aln-itm-cent">
            <img
              className="pos-rel"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQO9Rk3ggPxJYQxUbGSJXDchBb7magOa-bRg&usqp=CAU"
              alt=""
            />
            <div className="pos-abs">
              <h4> FootWear</h4>
              <h3 className="top-mrgin--20">Upto 40 - 50% Off</h3>
              <p className="top-mrgin--20">
                <strong>+</strong>For Her
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
