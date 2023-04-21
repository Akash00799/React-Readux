import React from "react";

function Home(props) {
  console.warn("Home", props);
  return (
    <div>
      <h1>Home component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png"
            alt="img"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "i phone 11" })
            }
          >
            Add to cart
          </button>
          <button className="remove-cart-btn" onClick={() => props.removeToCartHandler()}>
            Remove to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
