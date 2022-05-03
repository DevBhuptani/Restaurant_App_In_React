import { Button } from "antd";
import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <Button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </Button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
