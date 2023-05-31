import { FC, ReactNode } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Cart from "../cart/index.component";
import NavigationMenu from "../navigation-menu/index.component";
import HeaderProps from "./index.interface";
import { ToolbarSC } from "./index.styles";
import menuList from "../../sample/navigation-menu/navigationMenuSample";
import { ROUTES } from "../../utils/constants";

const Header: FC<HeaderProps> = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <ToolbarSC>
        <Link to={ROUTES.LANDING}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/marketsquare-62b8e.appspot.com/o/logos%2Flogo-transparent.svg?alt=media&token=251c1267-68e9-49bf-b04e-c6519ab85019&_gl=1*1rzqx3t*_ga*MTcyMjg1OTQuMTY4NTMxNjU0MA..*_ga_CW55HF8NVT*MTY4NTU2MTAwMC40LjEuMTY4NTU2MTE1OS4wLjAuMA.."
            alt="logo"
            width="64"
            height="64"
          />
        </Link>
        <Cart />
      </ToolbarSC>
      <NavigationMenu menuList={menuList} />
    </AppBar>
  );
};

export default Header;
