import React, { useState} from 'react';
import image8 from '../boutique-imag/image 8.png';


const Userproductview = () =>{
    const [quantity, setQuantity] = useState(0);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [price] = useState(150);

    const handleSizeChange = (event) => {
        setSize(event.target.value);
      };
    
      const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(0, prev + change));
      };
    
      const handleColorChange = (event) => {
        setColor(event.target.value);
      };

    return(
<section className="pro-view-sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <img className="product-view-image" src={image8} alt="" />̥
                <div className="content-subb">
                <button className="buynow">Buy Now</button>
                <button className="cartt">Add to Cart</button>
                </div>
            </div>
            <div className="col-lg-6 product-detl-row">
            <center><h4 className="detat-sleeve">Bell Sleeve Readymade Saree Blouse</h4></center>
            <form>
              <label className="lab-size" htmlFor="size">Size*</label>
              <br />
              <select name="size" className="sizee" id="size" value={size} onChange={handleSizeChange}>
                <option value="">Select size</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
              <br />
              <label className="lab-size" htmlFor="quantity">Quantity*</label>
              <br />
              <div className="quantity-field sizee">
                <button type="button" className="value-button decrease-button " onClick={() => handleQuantityChange(-1)} title="Decrease">-</button>
                <div className="number">{quantity}</div>
                <button type="button" className="value-button increase-button " onClick={() => handleQuantityChange(1)} title="Increase">+</button>
              </div>
              <br />
              <label className="lab-size" htmlFor="color">Color*</label>
              <br />
              <input type="radio" className="input-col" id="blue" name="color" value="blue" checked={color === 'blue'} onChange={handleColorChange} />
              <label htmlFor="blue">Blue</label>
              {/* <input type="radio" className="input-col" id="red" name="color" value="red" checked={color === 'red'} onChange={handleColorChange} />
              <label htmlFor="red">Red</label> */}
              <br />
              <label className="lab-size" htmlFor="price">Price*</label>
              <p className="price">₹ `{price}</p>
              {/* <div className="content-subb">
                <button className="buynow">Buy Now</button>
                <button className="cartt">Add to Cart</button>
              </div> */}
              <br /><br />
              <h4 className="prot-det">Product Details</h4>
              <div className="pro-det">
                <ul style={{ listStyleType: 'none' }}>
                  <li style={{ margin: '8px 0px' }}><strong>Material: </strong>Cotton</li>
                  <li style={{ margin: '8px 0px' }}><strong>Sleeve Style: </strong>Bell Sleeve</li>
                  <li style={{ margin: '8px 0px' }}><strong>Neck Style: </strong>Round Neck</li>
                  <li style={{ margin: '8px 0px' }}><strong>Blouse Length: </strong>15 inch</li>
                  <li style={{ margin: '8px 0px' }}><strong>Care Instruction: </strong>Hand Wash Only</li>
                </ul>
              </div>
            </form>
          </div>    
        </div>
    </div>
</section>

    )
}

export default Userproductview;