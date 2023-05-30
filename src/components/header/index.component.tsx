import { FC, ReactNode } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Cart from "../cart/index.component";
import NavigationMenu from "../navigation-menu/index.component";
import HeaderProps from "./index.interface";
import { ToolbarSC } from "./index.styles";
import Logo from "../../assets/logos/logo-transparent.png";
import menuList from "../../sample/navigation-menu/navigationMenuSample";
import { ROUTES } from "../../utils/constants";

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <ToolbarSC>
        <Link to={ROUTES.LANDING}>
          <img src={Logo} alt="logo" width="64" height="64" />
        </Link>
        <Cart />
      </ToolbarSC>
      <NavigationMenu menuList={menuList} />
    </AppBar>
  );
};

export default Header;
