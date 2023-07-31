import "..//MainComponent/CarouselComponent.css"
import left from "../../pictures/Left.svg"
import right from "../../pictures/Right.svg"
import downarrow from "../../pictures/arrow down.svg"

export default function CarouselComponent() {
  return (
    <div className="coverContainer">
      <img src={left} alt="left arrow" className="left-arrow" />
      <img src={right} alt="right arrow" className="right-arrow" />
      <h1>ქონების დაზღვევა</h1>
      <h2>ყველაზე ხელსაყრელი პირობებით</h2>
      <div className="buy-online-div">შეიძინე ონლაინ
      <img src={downarrow} alt="down arrow for buy online" className="arrow-down-logo"/>
      </div>
    </div>
  );
}