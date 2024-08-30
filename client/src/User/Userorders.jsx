import React, { useState } from "react";
import image20 from "../boutique-imag/image 20.png"
import image21 from "../boutique-imag/image 21.png"
import image22 from "../boutique-imag/image 22.png"

const Orders = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="orders-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
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

          <div className="col-lg-8">
            <h4 className="order-try">Orders</h4>
            <div className="orders-tabs mt-3">
              {/* Tab Navigation */}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={`btn-tab-style ${
                      activeTab === "overview" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("overview")}
                  >
                    All
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn-tab-style ${
                      activeTab === "pending" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("pending")}
                  >
                    Pending
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn-tab-style ${
                      activeTab === "delivered" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("delivered")}
                  >
                    Delivered
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn-tab-style ${
                      activeTab === "returned" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("returned")}
                  >
                    Returned
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn-tab-style ${
                      activeTab === "cancelled" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("cancelled")}
                  >
                    Cancelled
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content mt-4 p-3 bg-light border rounded">
                {activeTab === "overview" && (
                  <div>
                        <div className="order-place">
                            <div className="row">
                                <div className="col-lg-9">
                                <h4 className="hakoba">Yellow hakoba cotton readymade blouse</h4>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">color : yellow</div>
                                    <div className="order-colr">sleeve:Half Sleeve</div>
                                    <div className="order-colr">Neck:V-Neck</div>
                                 </div>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">Order Placed on 14/06/2024 </div>
                                    <div className="order-colr">Will Delivery on 24/06/2024</div>
                                 </div>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">Ordered by Kalaiarasi </div>
                                    <div className="order-colr">Amount : 1600</div>
                                    <div className="order-colr">Status : <strong className="stat-pen">Pending</strong></div>
                                 </div>
                                </div>
                                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                <img src={image20} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="order-place">
                            <div className="row">
                                <div className="col-lg-9">
                                <h4 className="hakoba">Yellow hakoba cotton readymade blouse</h4>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">color : yellow</div>
                                    <div className="order-colr">sleeve:Half Sleeve</div>
                                    <div className="order-colr">Neck:V-Neck</div>
                                 </div>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">Order Placed on 14/06/2024 </div>
                                    <div className="order-colr">Will Delivery on 24/06/2024</div>
                                 </div>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">Ordered by Kalaiarasi </div>
                                    <div className="order-colr">Amount : 1600</div>
                                    <div className="order-colr">Status : <strong className="stat-pen">Completed</strong></div>
                                 </div>
                                </div>
                                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                <img src={image21} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="order-place">
                            <div className="row">
                                <div className="col-lg-9">
                                <h4 className="hakoba">Yellow hakoba cotton readymade blouse</h4>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">color : yellow</div>
                                    <div className="order-colr">sleeve:Half Sleeve</div>
                                    <div className="order-colr">Neck:V-Neck</div>
                                 </div>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">Order Placed on 14/06/2024 </div>
                                    <div className="order-colr">Will Delivery on 24/06/2024</div>
                                 </div>
                                 <div className="col-sle-nec">
                                    <div className="order-colr">Ordered by Kalaiarasi </div>
                                    <div className="order-colr">Amount : 1600</div>
                                    <div className="order-colr">Status : <strong className="stat-pen">Delivered</strong></div>
                                 </div>
                                </div>
                                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                <img src={image22} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                  </div>
                )}
                {activeTab === "pending" && (
                   <div>
                   <div className="order-place">
                       <div className="row">
                           <div className="col-lg-9">
                           <h4 className="hakoba">Yellow hakoba cotton readymade blouse</h4>
                            <div className="col-sle-nec">
                               <div className="order-colr">color : yellow</div>
                               <div className="order-colr">sleeve:Half Sleeve</div>
                               <div className="order-colr">Neck:V-Neck</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Order Placed on 14/06/2024 </div>
                               <div className="order-colr">Will Delivery on 24/06/2024</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Ordered by Kalaiarasi </div>
                               <div className="order-colr">Amount : 1600</div>
                               <div className="order-colr">Status : <strong className="stat-pen">Pending</strong></div>
                            </div>
                           </div>
                           <div className="col-lg-3 d-flex justify-content-center align-items-center">
                           <img src={image20} alt="" className="img-fluid" />
                           </div>
                       </div>
                   </div>
                   <div className="order-place">
                       <div className="row">
                           <div className="col-lg-9">
                           <h4 className="hakoba">Full Sleeve Handloom Chanderi Silk Golden Blouse With Zar</h4>
                            <div className="col-sle-nec">
                               <div className="order-colr">color : yellow</div>
                               <div className="order-colr">sleeve:Half Sleeve</div>
                               <div className="order-colr">Neck:V-Neck</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Order Placed on 14/06/2024 </div>
                               <div className="order-colr">Will Delivery on 24/06/2024</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Ordered by Kalaiarasi </div>
                               <div className="order-colr">Amount : 1600</div>
                               <div className="order-colr">Status : <strong className="stat-pen">Pending</strong></div>
                            </div>
                           </div>
                           <div className="col-lg-3 d-flex justify-content-center align-items-center">
                           <img src={image21} alt="" className="img-fluid" />
                           </div>
                       </div>
                   </div>
                   <div className="order-place">
                       <div className="row">
                           <div className="col-lg-9">
                           <h4 className="hakoba">Rang Siah Melange Blouse</h4>
                            <div className="col-sle-nec">
                               <div className="order-colr">color : yellow</div>
                               <div className="order-colr">sleeve:Half Sleeve</div>
                               <div className="order-colr">Neck:V-Neck</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Order Placed on 14/06/2024 </div>
                               <div className="order-colr">Will Delivery on 24/06/2024</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Ordered by Kalaiarasi </div>
                               <div className="order-colr">Amount : 1600</div>
                               <div className="order-colr">Status : <strong className="stat-pen">Pending</strong></div>
                            </div>
                           </div>
                           <div className="col-lg-3 d-flex justify-content-center align-items-center">
                           <img src={image22} alt="" className="img-fluid" />
                           </div>
                       </div>
                   </div>
             </div>
                )}
                {activeTab === "delivered" && (
                   <div>
                   <div className="order-place">
                       <div className="row">
                           <div className="col-lg-9">
                           <h4 className="hakoba">Yellow hakoba cotton readymade blouse</h4>
                            <div className="col-sle-nec">
                               <div className="order-colr">color : yellow</div>
                               <div className="order-colr">sleeve:Half Sleeve</div>
                               <div className="order-colr">Neck:V-Neck</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Order Placed on 14/06/2024 </div>
                               <div className="order-colr">Will Delivery on 24/06/2024</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Ordered by Kalaiarasi </div>
                               <div className="order-colr">Amount : 1600</div>
                               <div className="order-colr">Status : <strong className="stat-pen">Delivered</strong></div>
                            </div>
                           </div>
                           <div className="col-lg-3 d-flex justify-content-center align-items-center">
                           <img src={image20} alt="" className="img-fluid" />
                           </div>
                       </div>
                   </div>
                   <div className="order-place">
                       <div className="row">
                           <div className="col-lg-9">
                           <h4 className="hakoba">Full Sleeve Handloom Chanderi Silk Golden Blouse With Zar</h4>
                            <div className="col-sle-nec">
                               <div className="order-colr">color : yellow</div>
                               <div className="order-colr">sleeve:Half Sleeve</div>
                               <div className="order-colr">Neck:V-Neck</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Order Placed on 14/06/2024 </div>
                               <div className="order-colr">Will Delivery on 24/06/2024</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Ordered by Kalaiarasi </div>
                               <div className="order-colr">Amount : 1600</div>
                               <div className="order-colr">Status : <strong className="stat-pen">Delivered</strong></div>
                            </div>
                           </div>
                           <div className="col-lg-3 d-flex justify-content-center align-items-center">
                           <img src={image21} alt="" className="img-fluid" />
                           </div>
                       </div>
                   </div>
                   <div className="order-place">
                       <div className="row">
                           <div className="col-lg-9">
                           <h4 className="hakoba">Rang Siah Melange Blouse</h4>
                            <div className="col-sle-nec">
                               <div className="order-colr">color : yellow</div>
                               <div className="order-colr">sleeve:Half Sleeve</div>
                               <div className="order-colr">Neck:V-Neck</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Order Placed on 14/06/2024 </div>
                               <div className="order-colr">Will Delivery on 24/06/2024</div>
                            </div>
                            <div className="col-sle-nec">
                               <div className="order-colr">Ordered by Kalaiarasi </div>
                               <div className="order-colr">Amount : 1600</div>
                               <div className="order-colr">Status : <strong className="stat-pen">Delivered</strong></div>
                            </div>
                           </div>
                           <div className="col-lg-3 d-flex justify-content-center align-items-center">
                           <img src={image22} alt="" className="img-fluid" />
                           </div>
                       </div>
                   </div>
             </div>
                )}
                  {activeTab === "returned" && (
                  <div>
                  <div className="order-place">
                      <div className="row">
                          <div className="col-lg-9">
                          <h4 className="hakoba">Yellow hakoba cotton readymade blouse</h4>
                           <div className="col-sle-nec">
                              <div className="order-colr">color : yellow</div>
                              <div className="order-colr">sleeve:Half Sleeve</div>
                              <div className="order-colr">Neck:V-Neck</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Order Placed on 14/06/2024 </div>
                              <div className="order-colr">Will Delivery on 24/06/2024</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Ordered by Kalaiarasi </div>
                              <div className="order-colr">Amount : 1600</div>
                              <div className="order-colr">Status : <strong className="stat-pen">Returned</strong></div>
                           </div>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                          <img src={image20} alt="" className="img-fluid" />
                          </div>
                      </div>
                  </div>
                  <div className="order-place">
                      <div className="row">
                          <div className="col-lg-9">
                          <h4 className="hakoba">Full Sleeve Handloom Chanderi Silk Golden Blouse With Zar</h4>
                           <div className="col-sle-nec">
                              <div className="order-colr">color : yellow</div>
                              <div className="order-colr">sleeve:Half Sleeve</div>
                              <div className="order-colr">Neck:V-Neck</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Order Placed on 14/06/2024 </div>
                              <div className="order-colr">Will Delivery on 24/06/2024</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Ordered by Kalaiarasi </div>
                              <div className="order-colr">Amount : 1600</div>
                              <div className="order-colr">Status : <strong className="stat-pen">Returned</strong></div>
                           </div>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                          <img src={image21} alt="" className="img-fluid" />
                          </div>
                      </div>
                  </div>
                  <div className="order-place">
                      <div className="row">
                          <div className="col-lg-9">
                          <h4 className="hakoba">Rang Siah Melange Blouse</h4>
                           <div className="col-sle-nec">
                              <div className="order-colr">color : yellow</div>
                              <div className="order-colr">sleeve:Half Sleeve</div>
                              <div className="order-colr">Neck:V-Neck</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Order Placed on 14/06/2024 </div>
                              <div className="order-colr">Will Delivery on 24/06/2024</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Ordered by Kalaiarasi </div>
                              <div className="order-colr">Amount : 1600</div>
                              <div className="order-colr">Status : <strong className="stat-pen">Returned</strong></div>
                           </div>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                          <img src={image22} alt="" className="img-fluid" />
                          </div>
                      </div>
                  </div>
            </div>
                )}
                  {activeTab === "cancelled" && (
                  <div>
                  <div className="order-place">
                      <div className="row">
                          <div className="col-lg-9">
                          <h4 className="hakoba">Yellow hakoba cotton readymade blouse</h4>
                           <div className="col-sle-nec">
                              <div className="order-colr">color : yellow</div>
                              <div className="order-colr">sleeve:Half Sleeve</div>
                              <div className="order-colr">Neck:V-Neck</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Order Placed on 14/06/2024 </div>
                              <div className="order-colr">Will Delivery on 24/06/2024</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Ordered by Kalaiarasi </div>
                              <div className="order-colr">Amount : 1600</div>
                              <div className="order-colr">Status : <strong className="stat-pen">Cancelled</strong></div>
                           </div>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                          <img src={image20} alt="" className="img-fluid" />
                          </div>
                      </div>
                  </div>
                  <div className="order-place">
                      <div className="row">
                          <div className="col-lg-9">
                          <h4 className="hakoba">Full Sleeve Handloom Chanderi Silk Golden Blouse With Zar</h4>
                           <div className="col-sle-nec">
                              <div className="order-colr">color : yellow</div>
                              <div className="order-colr">sleeve:Half Sleeve</div>
                              <div className="order-colr">Neck:V-Neck</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Order Placed on 14/06/2024 </div>
                              <div className="order-colr">Will Delivery on 24/06/2024</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Ordered by Kalaiarasi </div>
                              <div className="order-colr">Amount : 1600</div>
                              <div className="order-colr">Status : <strong className="stat-pen">Cancelled</strong></div>
                           </div>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                          <img src={image21} alt="" className="img-fluid" />
                          </div>
                      </div>
                  </div>
                  <div className="order-place">
                      <div className="row">
                          <div className="col-lg-9">
                          <h4 className="hakoba">Rang Siah Melange Blouse</h4>
                           <div className="col-sle-nec">
                              <div className="order-colr">color : yellow</div>
                              <div className="order-colr">sleeve:Half Sleeve</div>
                              <div className="order-colr">Neck:V-Neck</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Order Placed on 14/06/2024 </div>
                              <div className="order-colr">Will Delivery on 24/06/2024</div>
                           </div>
                           <div className="col-sle-nec">
                              <div className="order-colr">Ordered by Kalaiarasi </div>
                              <div className="order-colr">Amount : 1600</div>
                              <div className="order-colr">Status : <strong className="stat-pen">Cancelled   </strong></div>
                           </div>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                          <img src={image22} alt="" className="img-fluid" />
                          </div>
                      </div>
                  </div>
            </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
