import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>acer laptop</Dropdown.Item>
          <Dropdown.Item>asus laptop</Dropdown.Item>
          <Dropdown.Item>dell laptop</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to ="/cart">Sepete git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
