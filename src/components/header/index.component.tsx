import { FC, ReactNode, useState } from "react";
import { AppBar, Box, Toolbar, Typography, Icon, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, Login } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";

import Cart from "../cart/index.component";
import NavigationMenu from "../navigation-menu/index.component";
import Search from "../search/search.component";
import HeaderProps from "./index.interface";
import { ToolbarPlaceholderSC, ToolbarSC, MenuIconSC } from "./index.styles";
import navMenuList from "../../sample/navigation-menu/navigationMenuSample";
import { ROUTES } from "../../utils/constants";
import Menu from "../../components/menu/menu.component";
import menuListSample from "../../sample/menu/menu";

const Header: FC<HeaderProps> = () => {
  const isBigScreen = useMediaQuery("(min-width: 640px)");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuList = [
    {
      id: "a7B3nR9k",
      text: "Sign Up",
      icon: <AccountCircle />,
      clickHandler: () => {
        navigate(ROUTES.SIGN_UP);
      }
    },
    {
      id: "a7B3nR9j",
      text: "Sign In",
      icon: <Login />,
      clickHandler: () => {
        navigate(ROUTES.SIGN_IN);
      }
    },
  ];

  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <ToolbarPlaceholderSC></ToolbarPlaceholderSC>
      <ToolbarSC>
        <Link to={ROUTES.LANDING}>
          <img src="https://firebasestorage.googleapis.com/v0/b/marketsquare-62b8e.appspot.com/o/logos%2Flogo-transparent.svg?alt=media&token=251c1267-68e9-49bf-b04e-c6519ab85019&_gl=1*mparyn*_ga*NzA5MzcyODc5LjE2ODU2MzYyOTA.*_ga_CW55HF8NVT*MTY4NTYzNjI5MC4xLjEuMTY4NTYzNjQ0MC4wLjAuMA.." alt="logo" width="64" height="64" />
        </Link>
        {isBigScreen && (<Search />)}
        <Cart />
        {isBigScreen && <MenuIconSC onClick={handleClick}><MenuIcon /></MenuIconSC>}
      </ToolbarSC>
      <NavigationMenu menuList={navMenuList} />
      <Menu menuList={menuList} anchorEl={anchorEl} handleClose={handleClose}  />
    </AppBar>
  );
};

export default Header;
