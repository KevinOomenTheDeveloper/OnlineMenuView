import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export const Quantity = ({ updateQuantity }) => {
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title="Quantity"
        onSelect={updateQuantity}
      >
        <Dropdown.Item eventKey={1}>1</Dropdown.Item>
        <Dropdown.Item eventKey={2}>2</Dropdown.Item>
        <Dropdown.Item eventKey={3}>3</Dropdown.Item>
        <Dropdown.Item eventKey={4}>4</Dropdown.Item>
        <Dropdown.Item eventKey={5}>5</Dropdown.Item>
        <Dropdown.Item eventKey={6}>6</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Quantity;
