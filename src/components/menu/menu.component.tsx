import { FC } from "react";
import _ from "lodash";

import MenuInterface from "./menu.interface";
import { MenuSC, MenuItemSC } from "./menu.style.js";

const Menu: FC<MenuInterface> = ({ anchorEl, handleClose, menuList }) => {
  return (
    <MenuSC anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      {menuList.map((menuItem, index) => {
        return (
          <MenuItemSC
            key={`menu-item-${menuItem.id}`}
            onClick={menuItem.clickHandler}
          >
            {!_.isEmpty(menuItem.icon) && menuItem.icon} {menuItem.text}
          </MenuItemSC>
        );
      })}
    </MenuSC>
  );
};

export default Menu;
