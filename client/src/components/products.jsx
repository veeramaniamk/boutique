import React, { useState, useRef, useEffect } from 'react';
// import Tabs from './Tabs';
import image18 from '../boutique-imag/image 18.png';
import image8 from '../boutique-imag/image 8.png';
import image7 from '../boutique-imag/image 7.png';
import image4 from '../boutique-imag/image 4.png';


const ProductSection = () => {
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [price] = useState(150);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [restoreArray, setRestoreArray] = useState([]);
  const [startIndex, setStartIndex] = useState(-1);
  const [strokeColor] = useState('black');
  const [strokeWidth] = useState(2);

  const [activeTab, setActiveTab] = useState('boys');
  const [boyDesign, setBoyDesign] = useState('');
  const [boyMaterial, setBoyMaterial] = useState('');
  const [girlDesign, setGirlDesign] = useState('');
  const [girlMaterial, setGirlMaterial] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    const newRestoreArray = [...restoreArray, contextRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)];
    setRestoreArray(newRestoreArray);
    setStartIndex(startIndex + 1);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.strokeStyle = strokeColor;
    contextRef.current.lineWidth = strokeWidth;
    contextRef.current.lineCap = "round";
    contextRef.current.lineJoin = "round";
    contextRef.current.stroke();
  };

  const restore = () => {
    if (startIndex <= 0) {
      clearCanvas();
    } else {
      setStartIndex(startIndex - 1);
      setRestoreArray(restoreArray.slice(0, -1));
      contextRef.current.putImageData(restoreArray[startIndex - 1], 0, 0);
    }
  };

  const clearCanvas = () => {
    contextRef.current.fillStyle = "white";
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    contextRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setRestoreArray([]);
    setStartIndex(-1);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(0, prev + change));
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth - 700;
    canvas.height = window.innerHeight * 0.6;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = context;
  }, []);

  return (
    <section className="productt-sect">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 product-detl-row">
            <center><img width="45%" src={image18} alt="Product" /></center>
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
              <div className="quantity-field">
                <button type="button" className="value-button decrease-button" onClick={() => handleQuantityChange(-1)} title="Decrease">-</button>
                <div className="number">{quantity}</div>
                <button type="button" className="value-button increase-button" onClick={() => handleQuantityChange(1)} title="Increase">+</button>
              </div>
              <br />
              <label className="lab-size" htmlFor="color">Color*</label>
              <br />
              <input type="radio" className="input-col" id="blue" name="color" value="blue" checked={color === 'blue'} onChange={handleColorChange} />
              <label htmlFor="blue">Blue</label>
              <input type="radio" className="input-col" id="red" name="color" value="red" checked={color === 'red'} onChange={handleColorChange} />
              <label htmlFor="red">Red</label>
              <br />
              <label className="lab-size" htmlFor="price">Price*</label>
              <p className="price">{price}</p>
              <div className="content-subb">
                <button className="buynow">Buy Now</button>
                <button className="cartt">Add to Cart</button>
              </div>
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
          <div className="col-lg-6 scrollable-row">
          <ul className="nav" style={{ justifyContent: 'center', marginBottom: '26px' }} id="categoryTab" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'boys' ? 'active' : ''} boys-cate-button`}
            onClick={() => handleTabClick('boys')}
          >
            Boys
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'girls' ? 'active' : ''} girls-cate-button`}
            onClick={() => handleTabClick('girls')}
          >
            Girls
          </button>
        </li>
      </ul>

      <div className="tab-content">
        {activeTab === 'boys' && (
          <div className="tab-pane fade show active" id="boys" role="tabpanel">
            <div className="row">
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={boyDesign}
                  onChange={(e) => setBoyDesign(e.target.value)}
                >
                  <option value="">Select design</option>
                  <option value="Shirt">Shirt</option>
                  <option value="Jeans">Jeans</option>
                  <option value="T-Shirt">T-Shirt</option>
                  <option value="Cotton">Cotton</option>
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={boyMaterial}
                  onChange={(e) => setBoyMaterial(e.target.value)}
                >
                  <option value="">Select Material</option>
                  <option value="cotton">Cotton</option>
                  <option value="jeans">Jeans</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'girls' && (
          <div className="tab-pane fade show active" id="girls" role="tabpanel">
            <div className="row">
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={girlDesign}
                  onChange={(e) => setGirlDesign(e.target.value)}
                >
                  <option value="">Select design</option>
                  <option value="Blouse">Blouse</option>
                  <option value="Saree">Saree</option>
                  <option value="Lehenga Choli">Lehenga Choli</option>
                  <option value="Blazer">Blazer</option>
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={girlMaterial}
                  onChange={(e) => setGirlMaterial(e.target.value)}
                >
                  <option value="">Select Material</option>
                  <option value="cotton">Cotton</option>
                  <option value="silk cotton">Silk Cotton</option>
                </select>
              </div>
            </div>
          </div>
        )}
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
          <div className="col-6 col-but" key={index}>
            <div className="card" style={{ width: '90%' }}>
              <img src={item.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="half-sle">{item.title}</h3>
                <h4 className="material">Material: {item.material}</h4>
                <h3 className="rate">{item.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Custom Design</h3>
            <div className="drawing">
              <canvas
              className='canvas-drwa'
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                onMouseOut={finishDrawing}
              />
              <button className='undo-canva' onClick={restore}>Undo</button>
              <button className='clear-canva' onClick={clearCanvas}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
