import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const OrderPage = ({ order, setOrder }) => {
  const removeItem = (item) => {
    setOrder(order.filter((x) => x.idDrink !== item.idDrink));
  };

  return (
    <div className="orders">
      <div className="orders__inner">
        <Link to="/">На главную</Link>
        {order.map((item) => {
          return (
            <div className="orders__item" key={item.idDrink}>
              <div className="orders__item-content">
                <img src={item.strDrinkThumb} alt="" />
                <h2>{item.strDrink}</h2>
              </div>
              <button
                className="orders__item-remove"
                onClick={() => removeItem(item)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderPage;
