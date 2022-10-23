import Product from "./Product";
import Image1 from "../images/Home/image1.jpg"
import Image2 from "../images/Home/image2.jpg"
import Image3 from "../images/Home/image9.png"

import {motion} from 'framer-motion';
import { pageAnimation} from "./Animation"
const Home = () => {
  return (
    <motion.div exit = "exit" variants={pageAnimation} initial ="hidden" animate = "show">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src= {Image1} className="d-block w-100" alt="image1" height= "500px"/>
          </div>
          <div className="carousel-item">
            <img src={Image2}  className="d-block w-100" alt="image2" height= "500px"/>
          </div>
          <div className="carousel-item">
            <img src={Image3}  className="d-block w-100" alt="image3" height= "500px"/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
    </motion.div>
  );
};

export default Home;
