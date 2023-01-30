import React from "react";
import "./index.css";
import axios from "axios";
import {Link} from "react-router-dom";

function MainPageComponent() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get("http://localhost:8080/products")
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (products, index) {
            return (
              <div className="product-card">
                <Link className="product-link" to={`/products/${products.id}`}>
                  <div>
                    <img className="product-img" src={products.imageUrl} />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{products.name}</span>
                    <span className="product-price">{products.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{products.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default MainPageComponent;
