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

import Cart from "../cart/cart.component";
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
  MobileDrawerHeadSC,
  LogoContainerSC,
  MobileDrawerBodySC,
  MobileDrawerBottomSC,
  MobileSignOutContainerSC,
} from "./index.styles";
import navMenuList from "../../sample/navigation-menu/navigationMenuSample";
import { LOGO_URLS, ROUTES } from "../../utils/constants";
import Menu from "../../components/menu/menu.component";
import menuListSample from "../../sample/menu/menu";
import { selectUser } from "../../store/user/user.selector";
import COLORS from "../../styles/colors";
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

  // DETERMINE LOGO SIZE
  const smallLogoSize = "48";
  const bigLogoSize = "64";
  const logoSize = isBigScreen ? bigLogoSize : smallLogoSize;


  // HANDLERS
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
              src={LOGO_URLS.TRANSPARENT}
              alt="logo"
              width={logoSize}
              height={logoSize}
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
                  backgroundColor: `${COLORS.NEUTRAL.N0} !important`,
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
                  !_.isEmpty(anchorEl) ? COLORS.PRIMARY.P500 : colors.light
                } !important`,
                color: `${
                  !_.isEmpty(anchorEl) ? COLORS.NEUTRAL.N0 : colors.grey
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
          {!_.isEmpty(user) && (
            <DrawerHeadSC>
              {!_.isEmpty(user) && (
                <Avatar src={user?.profileUrl} size="large" />
              )}
              {!_.isEmpty(user) && <UsernameSC>{user.username}</UsernameSC>}
              {!_.isEmpty(user) && <EmailSC>{user.email}</EmailSC>}
            </DrawerHeadSC>
          )}
          {_.isEmpty(user) && (
            <MobileDrawerHeadSC>
              <LogoContainerSC>
                <img
                  src={LOGO_URLS.TRANSPARENT}
                  alt="logo"
                  width={bigLogoSize}
                  height={bigLogoSize}
                />
              </LogoContainerSC>
            </MobileDrawerHeadSC>
          )}
          <MobileDrawerBodySC></MobileDrawerBodySC>
          {_.isEmpty(user) && (
            <MobileDrawerBottomSC>
              <AuthBlock />
            </MobileDrawerBottomSC>
          )}
          {!_.isEmpty(user) && (
            <MobileDrawerBottomSC>
              <MobileSignOutContainerSC>
                <SignOutSC onClick={signOutHandler}>Sign Out</SignOutSC>
              </MobileSignOutContainerSC>
            </MobileDrawerBottomSC>
          )}
        </MobileDrawerContentSC>
      </MobileDrawerSC>
    </>
  );
};

export default Header;
