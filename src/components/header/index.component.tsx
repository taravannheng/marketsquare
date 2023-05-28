import { FC, ReactNode } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import Cart from "../cart/index.component";
import NavigationMenu from "../navigation-menu/index.component";
import HeaderProps from "./index.interface";
import { ToolbarSC } from './index.styles';
import Logo from '../../assets/logos/logo-transparent.png'
import menuList from '../../sample/navigation-menu/navigationMenuSample';

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 'none', }}>
      <ToolbarSC>
        <img src={Logo} alt="logo" width="64" height="64" />
        <Cart />
      </ToolbarSC>
      <NavigationMenu menuList={menuList} />
    </AppBar>
  );
};

export default Header;
