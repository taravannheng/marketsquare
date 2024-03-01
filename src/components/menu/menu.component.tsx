import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";

// props or interfaces imports
import MenuProps from "./menu.interface";

// styling imports
import { MenuSC, MenuItemSC } from "./menu.style.js";

const Menu: FC<MenuProps> = ({ anchorEl, onClose, menuList }) => {
  return (
    <MenuSC anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      {menuList.map((menuItem, index) => {
        return (
          <MenuItemSC
            key={`menu-item-${menuItem.id}`}
            onClick={menuItem.handleClick}
          >
            {!_.isEmpty(menuItem.icon) && menuItem.icon} {menuItem.text}
          </MenuItemSC>
        );
      })}
    </MenuSC>
  );
};

export default Menu;
