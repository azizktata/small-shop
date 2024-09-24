import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import kitchen1 from "../../assets/kitchen1.jpg";
import { productss } from "../Products/Products";
import ProductCard from "../Products/ProductCard";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaUserFriendsSolid } from "react-icons/lia";

export default function Home() {
  const productElements = productss
    .filter((p) => p.id < 5)
    .map((product) => <ProductCard key={product.id} product={product} />);

  const images = ["carousel-img", "carousel-img2"];
  const [currentImage, setCurrentImage] = React.useState(
    images[Math.floor(Math.random() * images.length)]
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(
        (currentImage) =>
          (currentImage = images[Math.floor(Math.random() * images.length)])
      );
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="home-container">
      <div className="home-main">
        <div className={`carousel ${currentImage}`}>
          <h1 className="hero-title">Shop the Best.</h1>
          <p className="hero-content">Get the best deals on our products</p>
          <button className="btn shop-btn primary-btn ">
            {" "}
            <Link to="/products">Shop now</Link>{" "}
          </button>
        </div>

        <div className="categories">
          <div className="category category-img">
            {/* <img src="https://via.placeholder.com/150" alt="category" /> */}
            <div className="category-content">
              <p>must have</p>
              <h4>Chairs</h4>
              <button className="btn shop-btn primary-btn">Shop now</button>
            </div>
          </div>
          <div className="category category-img2">
            {/* <img src="https://via.placeholder.com/150" alt="category" /> */}
            <div className="category-content">
              <p>must have</p>
              <h4>Decorations</h4>
              <button className="btn shop-btn primary-btn">Shop now</button>
            </div>
          </div>
          <div className="category category-img3">
            {/* <img src="https://via.placeholder.com/150" alt="category" /> */}
            <div className="category-content">
              <p>must have</p>
              <h4>Tables</h4>
              <button className="btn shop-btn primary-btn">Shop now</button>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="service">
            <div className="icon">
              <MdOutlineLocalShipping />
            </div>
            <div className="service-content">
              <h4 className="service-title">Free sipping</h4>
              <p>Get free shipping on orders of $100 or more</p>
            </div>
          </div>
          <div className="service">
            <div className="icon">
              <RiCustomerService2Line />
            </div>
            <div className="service-content">
              <h4 className="service-title">Customer service</h4>
              <p>A question? Please contact us at 123-456-7890</p>
            </div>
          </div>
          <div className="service">
            <div className="icon">
              <LiaUserFriendsSolid />
            </div>
            <div className="service-content">
              <h4 className="service-title">Refer a friend</h4>
              <p>Refer a friend and get 15% off each other</p>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <h3 className="about-title">About Us.</h3>
            <p className="about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </p>
            <button className="btn btn-secondary about-btn">Our Story</button>
          </div>

          <div className="about-images">
            <img src={kitchen1} alt="about" loading="lazy" />
          </div>
        </div>
      </div>

      {/* <div className="collections">
        <h3 className="collection-title">Discover the Kitchen collection.</h3>
        <div className="category collection-category">
          <img src={image} alt="" />
          <div className="category-content">
            <button className="btn shop-btn secondary-btn">Shop now</button>
          </div>
        </div>
        <div className="category-elements">
          <div className="el">
            <ProductCard product={productss[0]} newImage={kitchen1} />
          </div>
          <div className="el">
            <ProductCard product={productss[1]} newImage={kitchen2} />
          </div>
        </div>
      </div> */}
      <div className="products">
        <h3 className="products-title">Our Products.</h3>
        {productElements}
        <Link className="show-more" to="products">
          <button className="btn show-btn primary-btn">Show More</button>
        </Link>
      </div>
    </div>
  );
}
