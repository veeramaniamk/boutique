import React from "react";
import image18 from '../boutique-imag/image 18.png';
import image8 from '../boutique-imag/image 8.png';
import image7 from '../boutique-imag/image 7.png';
import image4 from '../boutique-imag/image 4.png';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Designerhome = () => {

  return (
    <section className="orders-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="orders-sec">
              <h4 className="product-over">Products Overview</h4>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="total-pending">
                    <li className="return-pen">Total</li>
                    <li className="return-pen">Pending</li>
                    <li className="return-pen">Delivered</li>
                    <li className="return-pen">Returned</li>
                    <li className="return-pen">Cancelled</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="total-pending">
                    <li className="product-num">268</li>
                    <li className="product-num">37</li>
                    <li className="product-num">157</li>
                    <li className="product-num">10</li>
                    <li className="product-num">4</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="orders-sec monthly-order">
              <h4 className="product-over">This Month Orders</h4>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="total-pending">
                    <li className="return-pen">Total</li>
                    <li className="return-pen">Pending</li>
                    <li className="return-pen">Delivered</li>
                    <li className="return-pen">Returned</li>
                    <li className="return-pen">Cancelled</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="total-pending">
                    <li className="product-num">29</li>
                    <li className="product-num">7</li>
                    <li className="product-num">21</li>
                    <li className="product-num">0</li>
                    <li className="product-num">5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-sm-12">
            <div className="aadingg-product">
              <button className="ad-producct" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                Add product +
              </button>

              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  <h3 className="duct-add">Add product</h3>

                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                 <form action="">
                    <input type="text" className="inp-add-prdut" placeholder="name" />
                    <input type="text" className="inp-add-prdut" placeholder="price" />
                    <input type="text" className="inp-add-prdut" placeholder="Material" />
                    <input type="text" className="inp-add-prdut" placeholder="Sleeve Style" />
                    <input type="text" className="inp-add-prdut" placeholder="Neck Style" />
                    <input type="text" className="inp-add-prdut" placeholder="Length" />
                    <input type="text" className="inp-add-prdut" placeholder="Care Instructions" />
                    <input type="text" className="inp-add-prdut" placeholder="Colors" />
                    <input type="text" className="inp-add-prdut" placeholder="Sizes" />
                    <input type="file" className="inp-add-prdut" accept="image/*" placeholder="Upload Image" />
                     <button className="product-submit">Submit</button>
                 </form>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: '10px' }}>
              {[
                { img: image18, title: 'Half Sleeve Saree Blouse', material: 'Silk Cotton', price: 150 },
                { img: image8, title: 'Half Sleeve Saree Blouse', material: 'Silk Cotton', price: 150 },
                { img: image7, title: 'Half Sleeve Saree Blouse', material: 'Silk Cotton', price: 150 },
                { img: image8, title: 'Half Sleeve Saree Blouse', material: 'Silk Cotton', price: 150 },
                { img: image8, title: 'Half Sleeve Saree Blouse', material: 'Silk Cotton', price: 150 },
                { img: image8, title: 'Half Sleeve Saree Blouse', material: 'Silk Cotton', price: 150 },
                { img: image8, title: 'Half Sleeve Saree Blouse', material: 'Silk Cotton', price: 150 },
                { img: image4, title: 'Half Sleeve Saree Blouse', material: 'Silk Cotton', price: 150 },
              ].map((item, index) => (
                <div className="col-lg-3 col-sm-6 col-but" key={index}>
                  <Link to="/userproductview" style={{ textDecoration: "none" }}>
                    <div className="card" style={{ width: '100%' }}>
                      <img src={item.img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h3 className="half-sle">{item.title}</h3>
                        <h4 className="material">Material: {item.material}</h4>
                        <h3 className="rate">₹ {item.price}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designerhome;
