import React from "react";
import successPath from "../../images/success.svg";
import goeswrongPath from "../../images/goeswrong.svg";
import usePopupClose from "../../hook/useSideMenuClose";

function InfoTooltip({ isInfoTooltipOpen, onSideMenuClose, isSuccess, handleInfoTooltipStatus }) {
  usePopupClose(isInfoTooltipOpen, onSideMenuClose)
  return (
    <div className={`popup popup_type_tooltip ${isInfoTooltipOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__button-closed button"
          type="button"
          aria-label="Закрыть"
          onClick={onSideMenuClose}
        >
        </button>
        <img className="infoTooltip__status" src={isSuccess ? successPath : goeswrongPath} alt={isSuccess ? "Получилось" : "Что-то пошло не так"} />
        <h2 className="popup__title">{!isSuccess ? handleInfoTooltipStatus : ""}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;