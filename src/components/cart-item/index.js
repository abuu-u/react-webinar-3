import { cn as bem } from "@bem-react/classname";
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

function CartItem(props) {
  const callbacks = {
    onDelete: (e) => {
      e.stopPropagation();
      props.onDelete(props.item.code);
    },
  };

  const cn = bem("CartItem");

  return (
    <div className={cn()} onClick={callbacks.onClick}>
      <div className={cn("code")}>{props.item.code}</div>
      <div className={cn("title")}>{props.item.title}</div>
      <div className={cn("price")}>{props.item.price} ₽</div>
      <div className={cn("count")}>{props.item.countInCart} шт</div>
      <div className={cn("actions")}>
        <button onClick={callbacks.onDelete}>Удалить</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
};

CartItem.defaultProps = {
  onDelete: () => {},
};

export default React.memo(CartItem);
