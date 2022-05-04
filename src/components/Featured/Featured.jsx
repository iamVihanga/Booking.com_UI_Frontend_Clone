import "./Featured.css";
import Dublin from "../../assets/dublin.png";
import Reno from "../../assets/reno.png";
import Austin from "../../assets/austin.png";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={Dublin} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={Reno} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={Austin} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
