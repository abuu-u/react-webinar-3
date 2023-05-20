import { cn as bem } from "@bem-react/classname";
import PropTypes from "prop-types";
import React from "react";
import CartItem from "../cart-item";
import "./style.css";

function Cart({ onClose, onDelete, items }) {
  const cn = bem("Cart");

  return (
    <div className={cn()}>
      <div className={cn("body")}>
        <div className={cn("top")}>
          <p className={cn("header")}>Корзина</p>

          <button onClick={() => onClose()}>Закрыть</button>
        </div>

        <div>
          {items.map((item) => (
            <CartItem key={item.code} item={item} onDelete={onDelete} />
          ))}
        </div>

        <p className={cn("total")}>
          <span>Итого</span>

          <span>
            {items.reduce((a, b) => a + b.price * b.countInCart, 0)} ₽
          </span>
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
