import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Spinner() {
  let [timer, setTimer] = useState(4);
  let navigate = useNavigate();
  let location=useLocation()
  useEffect(() => {
    let id = setInterval(() => {
      setTimer(--timer);
    }, 1000);
    if (timer == 0) navigate("/signin",{state:location.pathname});
    return () => {
      clearInterval(id);
    };
  }, [timer]);
  return (
    <div className="container" style={{height:"800px"}}>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <h6> redirect to you in {timer} secound</h6>

          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
