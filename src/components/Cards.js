import React from "react";
import logo from "../image/logo.png";
import { json } from "../utils/Constans";

function Cards({ onCarrient }) {
  function handleClick() {
    onCarrient();
  }
  const el = json.result.flights;

  const cards = el.map((item) => {
    return (
      <div className="container">
        <div className="cards__header">
          <img alt="лого" className="cards__logo" src={logo} />
          <div className="cards__header-container">
            <p className="cards__price">
              {item.flight.price.passengerPrices[0].total.amount} <span className="cards__price-currency">RUB</span>
            </p>
            <span className="cards__info">
              Стоимость для одного взрослого пассажира
            </span>
          </div>
        </div>
        <div className="cards__container">
          <div className="cards__to">
            <div className="cards__itinerary">
              <span className="cards__departure-city">{item.flight.legs[0].segments.length > 1 ? item.flight.legs[0].segments[1].departureCity.caption : item.flight.legs[0].segments[0].departureCity.caption}</span>,
              <span className="cards__departure-airport-caption"> {item.flight.legs[0].segments.length > 1 ? item.flight.legs[0].segments[1].departureAirport.caption : item.flight.legs[0].segments[0].departureAirport.caption}</span>
              <span className="cards__departure-airport-uid"> ({item.flight.legs[0].segments.length > 1 ? item.flight.legs[0].segments[1].departureAirport.uid : item.flight.legs[0].segments[0].departureAirport.uid})</span>
              &rarr; <span className="cards__arrival-city"> {item.flight.legs[0].segments[0].arrivalCity.caption}</span>,
              <span className="cards__arrival-airport-caption"> {item.flight.legs[0].segments.length > 1 ? item.flight.legs[0].segments[1].arrivalAirport.caption : item.flight.legs[0].segments[0].arrivalAirport.caption}</span>
              <span className="cards__arrival-airport-uid"> ({item.flight.legs[0].segments.length > 1 ? item.flight.legs[0].segments[1].arrivalAirport.uid : item.flight.legs[0].segments[0].arrivalAirport.uid})</span>
            </div>
            <hr className="cards__line" />
            <div className="cards__times">
              <div className="cards__time-container">
                <p className="cards__departure-time">{item.flight.legs[0].segments.length > 1 ? item.flight.legs[0].segments[1].departureDate : item.flight.legs[0].segments[0].departureDate}</p>
                <span className="cards__departure-date">18 авг. вт </span>
              </div>

              <p className="cards__duration">
                <span className="cards__duration-hours">🕑 { Math.trunc(item.flight.legs[0].duration/60)}</span> ч
                <span className="cards__duration-minutes"> {Math.trunc(item.flight.legs[0].duration%60)} </span> мин
              </p>
              <div className="cards__time-container">
                <span className="cards__arrival-date">18 авг. вт </span>
                <p className="cards__arrival-time">00:00</p>
              </div>
            </div>
            <div className="cards__transfer">
              <hr className="cards__line_grey" />
              <span className="cards__transfer-num">{item.flight.legs[0].segments.length > 1 ? '1 пересадка' : 'без пересадок'}</span>
              <hr className="cards__line_grey" />
            </div>
            <p className="cards__aircompany">Рейс выполняет: {item.flight.carrier.caption}</p>
          </div>
          <hr className="cards__line_blue" />
          <div className="cards__container">
            <div className="cards__itinerary">
              <span className="cards__departure-city">Лондон</span>,
              <span className="cards__departure-airport-caption">
                {" "}
                Хитроу Лондон
              </span>
              <span className="cards__departure-airport-uid"> (LHR)</span>
              &rarr;
              <span className="cards__arrival-city"> Москва</span>,
              <span className="cards__arrival-airport-caption">
                {" "}
                Шереметьево
              </span>
              <span className="cards__arrival-airport-uid"> (SVO)</span>
            </div>
            <hr className="cards__line" />
            <div className="cards__times">
              <div className="cards__time-container">
                <p className="cards__departure-time">00:00</p>
                <span className="cards__departure-date">18 авг. вт</span>
              </div>
              <p className="cards__duration">
                <span className="cards__duration-hours">🕑 { Math.trunc(item.flight.legs[0].duration/60)} </span> ч
                <span className="cards__duration-minutes"> {Math.trunc(item.flight.legs[0].duration%60)} </span> мин
              </p>
              <div className="cards__time-container">
                <span className="cards__arrival-date">18 авг. вт </span>
                <p className="cards__arrival-time">0:00</p>
              </div>
            </div>
            <div className="cards__transfer">
              <hr className="cards__line_grey" />
              <span className="cards__transfer-num">{item.flight.legs[0].segments.length > 1 ? '1 пересадка' : 'без пересадок'}</span>
              <hr className="cards__line_grey" />
            </div>
            <p className="cards__aircompany">Рейс выполняет: {item.flight.carrier.caption}</p>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="cards__button cards__button_place"
          type="submit"
        >
          выбрать
        </button>
      </div>
    );
  });
  return <div className="cards">{cards}</div>;
}
export default Cards;
