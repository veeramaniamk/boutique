import React, { useState , useRef ,useEffect  } from "react";
// import UserNavbar from './Usernavbar';
import image18 from '../boutique-imag/image 18.png';
import image8 from '../boutique-imag/image 8.png';
import image7 from '../boutique-imag/image 7.png';
import image4 from '../boutique-imag/image 4.png';
import { Link } from "react-router-dom";

const Usermain = () => {
  const [activeTab, setActiveTab] = useState('boys');
//   const [boyDesign, setBoyDesign] = useState('');
//   const [boyMaterial, setBoyMaterial] = useState('');
//   const [girlDesign, setGirlDesign] = useState('');
//   const [girlMaterial, setGirlMaterial] = useState('');
//   const [kidsDesign, setkidsDesign] = useState('');
//   const [kidsMaterial, setkidsMaterial] = useState('');

// const [quantity, setQuantity] = useState(0);
// const [color, setColor] = useState('');
// const [size, setSize] = useState('');
// const [price] = useState(150);
const canvasRef = useRef(null);
const contextRef = useRef(null);
const [isDrawing, setIsDrawing] = useState(false);
const [restoreArray, setRestoreArray] = useState([]);
const [startIndex, setStartIndex] = useState(-1);
const [strokeColor] = useState('black');
const [strokeWidth] = useState(2);

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

  // const handleSizeChange = (event) => {
  //   setSize(event.target.value);
  // };

  // const handleQuantityChange = (change) => {
  //   setQuantity(prev => Math.max(0, prev + change));
  // };

  // const handleColorChange = (event) => {
  //   setColor(event.target.value);
  // };

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
    <>
      {/* <UserNavbar /> */}
      <section className="tabiac">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <ul className="nav" style={{ justifyContent: 'center', marginBottom: '26px' }} id="categoryTab" role="tablist">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'boys' ? 'active' : ''} boys-cate-button`}
                    onClick={() => handleTabClick('boys')}
                  >
                    Men
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'girls' ? 'active' : ''} girls-cate-button`}
                    onClick={() => handleTabClick('girls')}
                  >
                    Women
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'kids' ? 'active' : ''} girls-cate-button`}
                    onClick={() => handleTabClick('kids')}
                  >
                    kids
                  </button>
                </li>
              </ul>
             
              <select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Product Assartment</option>
  <option value="1">Blouse</option>
  <option value="2">kuruti</option      >
  <option value="3">T-shirt</option>
</select>

<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Gender</option>
  <option value="1">Boys</option>
  <option value="2">Girls</option>
</select>


<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Color</option>
  <option value="1">Black</option>
  <option value="2">White</option>
  <option value="3">red</option>
</select>

<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Material</option>
  <option value="1">cotton</option>
  <option value="2">slik</option>
  <option value="3">gean</option>
</select>


<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Size</option>
  <option value="1">10-20 cm</option>
  <option value="2">20-30 cm</option>
  <option value="3">30-40</option>
</select>

<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Ratings</option>
  <option value="1">1 to 3</option>
  <option value="2">3 to 5</option>
  <option value="3">5</option>
</select>

            </div>
            <div className="col-lg-9 col-sm-12">
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
        <div className="container dr-se">
      <h3>Custom Design</h3>
         <div className="row">
            <div className="col-lg-6 col-sm-12">
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
            <div className="col-lg-6 col-sm-12">
            <select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Category</option>
  <option value="1">Blouse</option>
  <option value="2">kuruti</option      >
  <option value="3">T-shirt</option>
</select>

<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Gender</option>
  <option value="1">Boys</option>
  <option value="2">Girls</option>
</select>


<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Color</option>
  <option value="1">Black</option>
  <option value="2">White</option>
  <option value="3">red</option>
</select>

<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Fabric</option>
  <option value="1">cotton</option>
  <option value="2">slik</option>
  <option value="3">gean</option>
</select>


<select className="form-select sel-home-cate" aria-label="Default select example">
  <option selected>Size</option>
  <option value="1">10-20 cm</option>
  <option value="2">20-30 cm</option>
  <option value="3">30-40</option>
</select>

<textarea id="w3review" className="tex-idea" placeholder="Give your idea" name="w3review" rows="2" cols="60"></textarea>

<button className='submit-custom-dessign'>Submit</button>

            </div>
         </div>
        </div>
      </section>
    </>
  );
}

export default Usermain;
