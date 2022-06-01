import React from "react";

function Button({ onClick }) {

  return (
    <button id="show-more-button" className="cards__button cards__button_show" onClick={onClick}>
      Показать еще
    </button>
  );
}

export default Button;
