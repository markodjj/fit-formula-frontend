import FetchedImage from "../FetchedImage";
import "./PlanOffer.scss";

const PlanOffer = ({ planName }) => {
  return (
    <div className="plan-offer">
      <div className="plan-offer-container">
        {/* <img src="../src/assets/Plan-ad.png" alt="plan-ad" /> */}
        <FetchedImage itemName={planName} />
        <button>NARUČI</button>
      </div>
    </div>
  );
};

export default PlanOffer;
