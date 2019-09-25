import React from "react";

const NumberButton = ({ number, buttonNumClick }) => {
  if (number === 0) {
    return (
      <button
        className="zeronum-buttons"
        value={number}
        onClick={buttonNumClick}
      >
        {number}
      </button>
    );
  } else {
    return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}

        {
          <button
            className="num-button buttons"
            value={number}
            onClick={buttonNumClick}
          >
            {number}
          </button>
        }
      </>
    );
  }
};
export default NumberButton;
