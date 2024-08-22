import React from "react";
import totaluserslog from "../Images/totaluserslog.png";
import designerlog from "../Images/designerlog.png";
import customerslog from "../Images/customerslog.png"; // Ensure this path is correct
import profile from "../Images/Profile.png"; 
import image20 from "../boutique-imag/image 20.png"
import image21 from "../boutique-imag/image 21.png"
import image22 from "../boutique-imag/image 22.png"

const Admindashboard = () => {
  return (
    <section className="dashboard-sect">
      <div className="container">

        <div className="row">
          <div className="col-lg-4">
            <div className="row lougudr">
              <div className="col-8">
                <h4 className="toter">Total Users</h4>
                <h2 className="tot-num">847</h2>
              </div>
              <div className="col-4">
                <img src={totaluserslog} alt="Total Users" className="img-fluid totaluser" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row lougudr">
              <div className="col-8">
                <h4 className="toter">Designers</h4>
                <h2 className="tot-num">847</h2>
              </div>
              <div className="col-4">
                <img src={designerlog} alt="Total Users" className="img-fluid totaluser" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row lougudr">
              <div className="col-8">
                <h4 className="toter">Customers</h4>
                <h2 className="tot-num">847</h2>
              </div>
              <div className="col-4">
                <img src={customerslog} alt="Total Users" className="img-fluid totaluser" />
              </div>
            </div>
          </div>
        </div>

        <div className="row cent-design">
          <div className="col-4 design-lla">
            <div className="re-cen-design">
           <div><h5 className="recent-design">Recent Designers</h5></div> 
           <div><h5 className="all-se">See all </h5></div> 
            </div> 
            <div className="profile-redesi">
            <div><img width={45} src={profile} alt="" /></div> 
            <div className="nam-design">
              <h5 className="kalai-name">Kalaiarasi</h5>
               <h6 className="desi-rol">Lead Designer</h6>
            </div> 
            </div>
            <div className="profile-redesi">
            <div><img width={45} src={profile} alt="" /></div> 
            <div className="nam-design">
              <h5 className="kalai-name">Priya</h5>
               <h6 className="desi-rol">Fashion Stylist</h6>
            </div> 
            </div>
            <div className="profile-redesi">
            <div><img width={45} src={profile} alt="" /></div> 
            <div className="nam-design">
              <h5 className="kalai-name">Karthick</h5>
               <h6 className="desi-rol">Sales Associate</h6>
            </div> 
            </div>
            <div className="profile-redesi">
            <div><img width={45} src={profile} alt="" /></div> 
            <div className="nam-design">
              <h5 className="kalai-name">Sri Ram</h5>
               <h6 className="desi-rol">Designer</h6>
            </div> 
            </div>
          </div>
          <div className="col-4 design-lla">
            <div className="re-cen-design">
           <div><h5 className="recent-design">Recent Users</h5></div> 
           <div><h5 className="all-se">See all </h5></div> 
            </div> 
            <div className="profile-redesi">
            <div><img width={45} src={profile} alt="" /></div> 
            <div className="nam-design">
              <h5 className="kalai-name">Preetha</h5>
               <h6 className="desi-rol">10 Orders</h6>
            </div> 
            </div>
            <div className="profile-redesi">
            <div><img width={45} src={profile} alt="" /></div> 
            <div className="nam-design">
              <h5 className="kalai-name">Suresh Kumar</h5>
               <h6 className="desi-rol">6 Orders</h6>
            </div> 
            </div>
            <div className="profile-redesi">
            <div><img width={45} src={profile} alt="" /></div> 
            <div className="nam-design">
              <h5 className="kalai-name">Manikandan</h5>
               <h6 className="desi-rol">1 Order</h6>
            </div> 
            </div>
            <div className="profile-redesi">
            <div><img width={45} src={profile} alt="" /></div> 
            <div className="nam-design">
              <h5 className="kalai-name">Raghav</h5>
               <h6 className="desi-rol">5 Order</h6>
            </div> 
            </div>
          </div>
        </div>

<h4 className="ord-up">Upcoming Orders</h4>

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
    </section>
  );
};

export default Admindashboard;
