import React from "react";
import "./style.scss";

const HomePage = ({ authState, cocktails, setOrder, order }) => {
  const addToOrder = (item) => {
    console.log(item);
    if (order.find((x) => x.idDrink === item.idDrink) === undefined) {
      setOrder([...order, item]);
    }
  };

  return (
    <div className="home">
      <div className="home__inner">
        {cocktails.map((item) => {
          return (
            <div className="product" key={item.idDrink}>
              <img src={item.strDrinkThumb} alt="" />
              <h2>{item.strDrink}</h2>
              {authState.authenticated &&
                (order.find((x) => x.idDrink === item.idDrink) === undefined ? (
                  <button onClick={() => addToOrder(item)}>
                    Добавить в заказ
                  </button>
                ) : (
                  <p>Добавлено</p>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
