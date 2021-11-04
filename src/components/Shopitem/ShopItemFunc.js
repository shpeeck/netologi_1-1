import React from "react";
import PropTypes from "prop-types";

export default function ShopItemFunc({ item }) {
  // const data = props.data;
  return (
    <div className={"main-content"}>
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className={"description"}>{item.descriptionFull}</div>
      <div className={"highlight-window"}>
        <div className={"highlight-overlay"}></div>
      </div>
      <div className={"divider"}></div>
      <div className={"purchase-info"}>
        <div className={"price"}>£{item.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.object.isRequired
};
