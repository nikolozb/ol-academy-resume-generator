import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Popup = ({ popupRef }) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("data"));
  const saveDate = new Date();

  const yesButtonHandler = () => {
    const receivedData = JSON.parse(localStorage.getItem("all_resumes"));
    const newData = { ...userData, date: saveDate };
    receivedData.push(newData);
    localStorage.setItem("all_resumes", JSON.stringify(receivedData));
    localStorage.removeItem("data");
    navigate("/");
  };

  const noButtonHandler = () => {
    localStorage.removeItem("data");
    navigate("/");
  };

  return (
    <div className="popup">
      <div className="popup__container" ref={popupRef}>
        <span className="popup__title">Do you want to save this resume?</span>
        <div className="popup__block">
          <Button onClick={yesButtonHandler}>Yes</Button>
          <Button onClick={noButtonHandler}>No</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
