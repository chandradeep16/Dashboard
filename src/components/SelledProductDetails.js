import React from "react";
import { BsSearch } from "react-icons/bs";
import image1 from "../components/assets/img.jpeg";

function SelledProductDetails() {
  return (
    <div className="card">
      <div className="product-details">
        <div className="top-content">
          <div className="top-contentLeft">
            <div className="topText">Product Details</div>
          </div>
          <div className="top-contentRight">
            <div className="search-bar">
              <div className="search-icon">
                <BsSearch />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div>
            <div className="column1">
              <select id="period">
                <option value="last30Days">Last 30 days</option>
                <option value="last60Days">Last 60 days</option>
                <option value="last90Days">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        <div className="productDetailsContent">
          <div className="productDetailsRowHeaders productDetailsRowunderline">
            <div className="productName head">Product Name</div>
            <div className="column head">Stock</div>
            <div className="column head">Price</div>
            <div className="column head">Total Sales</div>
          </div>

          <div className="productDetailsRow">
            <div
              className="productName"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={image1}
                alt=""
                style={{
                  width: "60px",
                  height: "40px",
                  marginRight: "20px",
                  borderRadius: "5px",
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Absract 3d
                </div>
                <p
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="column">10</div>
            <div className="column">$50</div>
            <div className="column">100</div>
          </div>

          
          <div className="productDetailsRow">
            <div
              className="productName"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={image1}
                alt=""
                style={{
                  width: "60px",
                  height: "40px",
                  marginRight: "20px",
                  borderRadius: "5px",
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Absract 3d
                </div>
                <p
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="column">10</div>
            <div className="column">$50</div>
            <div className="column">100</div>
          </div>

          
          <div className="productDetailsRow">
            <div
              className="productName"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={image1}
                alt=""
                style={{
                  width: "60px",
                  height: "40px",
                  marginRight: "20px",
                  borderRadius: "5px",
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Absract 3d
                </div>
                <p
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="column">10</div>
            <div className="column">$50</div>
            <div className="column">100</div>
          </div>

          
          <div className="productDetailsRow">
            <div
              className="productName"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={image1}
                alt=""
                style={{
                  width: "60px",
                  height: "40px",
                  marginRight: "20px",
                  borderRadius: "5px",
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Absract 3d
                </div>
                <p
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="column">10</div>
            <div className="column">$50</div>
            <div className="column">100</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SelledProductDetails;
