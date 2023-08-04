import { FC, ReactNode, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Icon,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, ArrowBackIos, Login } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Cookies from "js-cookie";

import Cart from "../cart/index.component";
import NavigationMenu from "../navigation-menu/index.component";
import Search from "../search/search.component";
import Avatar from "../avatar/avatar.component";
import HeaderProps from "./index.interface";
import {
  ToolbarPlaceholderSC,
  ToolbarSC,
  MenuIconSC,
  AvatarContainerSC,
  DrawerSC,
  DrawerContentSC,
  DrawerHeadSC,
  UsernameSC,
  EmailSC,
  DrawerBodySC,
  DrawerBottomSC,
  SignOutSC,
  MobileDrawerSC,
  MobileDrawerContentSC,
  NavigationContainerSC,
  MobileDrawerLogoContainerSC,
  MobileDrawerAuthBlockContainerSC,
  SignUpButtonSC,
  SignInButtonSC,
} from "./index.styles";
import navMenuList from "../../sample/navigation-menu/navigationMenuSample";
import { ROUTES } from "../../utils/constants";
import Menu from "../../components/menu/menu.component";
import menuListSample from "../../sample/menu/menu";
import { selectUser } from "../../store/user/user.selector";
import colors from "../../styles/colors";
import AuthBlock from "../auth-block/auth-block.component";

const Header: FC<HeaderProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const user = useSelector(selectUser);
  const isBigScreen = useMediaQuery("(min-width: 640px)");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const mobileDrawerOpenHandler = () => {
    setIsMobileDrawerOpen(true);
  };

  const mobileDrawerCloseHandler = () => {
    setIsMobileDrawerOpen(false);
  };

  const signOutHandler = () => {
    // close drawer
    handleDrawerClose();

    // remove jwt token
    Cookies.remove("jwt");

    // set user state to null
    dispatch({ type: "SET_USER", payload: null });

    // navigate to landing page
    navigate(`${ROUTES.LANDING}?signedOut=true`);
  };

  const menuList = [
    {
      id: "a7B3nR9k",
      text: "Sign Up",
      icon: <AccountCircle />,
      clickHandler: () => {
        navigate(ROUTES.SIGN_UP);
      },
    },
    {
      id: "a7B3nR9j",
      text: "Sign In",
      icon: <Login />,
      clickHandler: () => {
        navigate(ROUTES.SIGN_IN);
      },
    },
  ];

  return (
    <>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <ToolbarPlaceholderSC></ToolbarPlaceholderSC>
        <ToolbarSC>
          <Link to={ROUTES.LANDING}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/marketsquare-62b8e.appspot.com/o/logos%2Flogo-transparent.svg?alt=media&token=251c1267-68e9-49bf-b04e-c6519ab85019&_gl=1*mparyn*_ga*NzA5MzcyODc5LjE2ODU2MzYyOTA.*_ga_CW55HF8NVT*MTY4NTYzNjI5MC4xLjEuMTY4NTYzNjQ0MC4wLjAuMA.."
              alt="logo"
              width={`${isBigScreen ? "64" : "48"}}`}
              height={`${isBigScreen ? "64" : "48"}}`}
            />
          </Link>
          {isBigScreen && <Search />}
          <NavigationContainerSC>
            <Cart />
            {/* MENU ICON FOR MOBILE */}
            {!isBigScreen && (
              <MenuIconSC
                onClick={mobileDrawerOpenHandler}
                sx={{
                  backgroundColor: `${colors.lightest} !important`,
                  color: `${colors.grey} !important`,
                }}
              >
                <MenuIcon />
              </MenuIconSC>
            )}
          </NavigationContainerSC>
          {/* MENU ICON FOR DESKTOP */}
          {isBigScreen && _.isEmpty(user) && (
            <MenuIconSC
              onClick={handleClick}
              sx={{
                backgroundColor: `${
                  !_.isEmpty(anchorEl) ? colors.primary : colors.light
                } !important`,
                color: `${
                  !_.isEmpty(anchorEl) ? colors.lightest : colors.grey
                } !important`,
              }}
            >
              <MenuIcon />
            </MenuIconSC>
          )}
          {isBigScreen && !_.isEmpty(user) && (
            <AvatarContainerSC>
              <Avatar
                src={user?.profileUrl}
                clickHandler={handleDrawerOpen}
                size="small"
              />
            </AvatarContainerSC>
          )}
        </ToolbarSC>
        <NavigationMenu menuList={navMenuList} />
        <Menu
          menuList={menuList}
          anchorEl={anchorEl}
          handleClose={handleClose}
        />
      </AppBar>
      <DrawerSC anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <DrawerContentSC>
          <DrawerHeadSC>
            {!_.isEmpty(user) && <Avatar src={user?.profileUrl} size="large" />}
            {!_.isEmpty(user) && <UsernameSC>{user.username}</UsernameSC>}
            {!_.isEmpty(user) && <EmailSC>{user.email}</EmailSC>}
          </DrawerHeadSC>
          <DrawerBodySC></DrawerBodySC>
          <DrawerBottomSC>
            <SignOutSC onClick={signOutHandler}>Sign Out</SignOutSC>
          </DrawerBottomSC>
        </DrawerContentSC>
      </DrawerSC>
      {/* MOBILE DRAWER */}

      <MobileDrawerSC
        anchor="right"
        open={isMobileDrawerOpen}
        onClose={mobileDrawerCloseHandler}
      >
        <MobileDrawerContentSC>
          <MobileDrawerLogoContainerSC>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/marketsquare-62b8e.appspot.com/o/logos%2Flogo-transparent.svg?alt=media&token=251c1267-68e9-49bf-b04e-c6519ab85019&_gl=1*mparyn*_ga*NzA5MzcyODc5LjE2ODU2MzYyOTA.*_ga_CW55HF8NVT*MTY4NTYzNjI5MC4xLjEuMTY4NTYzNjQ0MC4wLjAuMA.."
              alt="logo"
              width="64px"
              height="64px"
            />
          </MobileDrawerLogoContainerSC>
          <MobileDrawerAuthBlockContainerSC>
          <SignUpButtonSC type="button" href={`${ROUTES.SIGN_UP}`}>
            Sign Up
          </SignUpButtonSC>
          <SignInButtonSC type="button" href={`${ROUTES.SIGN_IN}`}>
            Sign In
          </SignInButtonSC>
          </MobileDrawerAuthBlockContainerSC>
        </MobileDrawerContentSC>
      </MobileDrawerSC>
    </>
  );
};

export default Header;
