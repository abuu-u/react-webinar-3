import { cn as bem } from "@bem-react/classname";
import PropTypes from "prop-types";
import React from "react";
import Item from "../item";
import "./style.css";

function Cart({ onClose, items }) {
  const cn = bem("Cart");

  return (
    <div className={cn()}>
      <div className={cn("body")}>
        <div className={cn("top")}>
          <p className={cn("header")}>Корзина</p>

          <button onClick={() => onClose()}>Перейти</button>
        </div>

        <div>
          {items.map(({ code, countInCart, price, title }) => (
            <Item key={code} item={{ code, title }} />
          ))}
        </div>

        <p>
          <span>Итого</span>

          <span>{items.reduce((a, b) => a + b.price * b.countInCart, 0)}</span>
        </p>
      </div>
    </div>
  );
}

Cart.propTypes = {
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      countInCart: PropTypes.number,
      price: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

Cart.defaultProps = {
  onClose: () => {},
  onDelete: () => {},
  items: [],
};

export default React.memo(Cart);
