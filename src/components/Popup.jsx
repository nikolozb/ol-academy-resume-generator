import { Button } from "reactstrap";

const Popup = ({ popupRef }) => {
  return (
    <div className="popup">
      <div className="popup__container" ref={popupRef}>
        <span className="popup__title">Do you want to save this resume?</span>
        <div className="popup__block">
          <Button>Yes</Button>
          <Button>No</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
