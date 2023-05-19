import PropTypes from "prop-types";
import React from "react";
import Item from "../item";
import "./style.css";

function List({ list, onAdd }) {
  return (
    <div className="List">
      {list.map((item) => (
        <div key={item.code} className="List-item">
          <Item item={item} onAdd={onAdd} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
  onAdd: PropTypes.func,
};

List.defaultProps = {
  onAdd: () => {},
};

export default React.memo(List);
