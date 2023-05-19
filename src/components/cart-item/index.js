import { cn as bem } from "@bem-react/classname";
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

function CartItem(props) {
  const callbacks = {
    onAdd: (e) => {
      e.stopPropagation();
      props.onAdd(props.item.code);
    },
  };

  const cn = bem("CartItem");

  return (
    <div className={cn()} onClick={callbacks.onClick}>
      <div className={cn("code")}>{props.item.code}</div>
      <div className={cn("title")}>{props.item.title}</div>
      <div className={cn("price")}>{props.item.price} ₽</div>
      <div className={cn("actions")}>
        <button onClick={callbacks.onAdd}>Добавить</button>
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
  onAdd: PropTypes.func,
};

CartItem.defaultProps = {
  onAdd: () => {},
};

export default React.memo(CartItem);
