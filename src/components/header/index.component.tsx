import { FC, useState } from "react";
import {
  AppBar,
  useMediaQuery,
} from "@mui/material";
import ReviewsIcon from '@mui/icons-material/Reviews';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle, ArrowBackIos, Login } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Cookies from "js-cookie";

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
  ButtonContainerSC,
  MobileDrawerHeadSC,
  LogoContainerSC,
  MobileDrawerBodySC,
  MobileDrawerBottomSC,
  MobileSignOutContainerSC,
  ToolbarContainerSC,
  SearchContainerSC,
  BackIconSC,
  SearchIconSC,
  BigSearchContainerSC,
} from "./index.styles";

import Cart from "../cart/cart.component";
// import NavigationMenu from "../navigation-menu/index.component";   DISABLE MENU TEMPORARILY
import Search from "../search/search.component";
import Avatar from "../avatar/avatar.component";
import Menu from "../../components/menu/menu.component";
import AuthBlock from "../auth-block/auth-block.component";
import List from "../list/list.component";

import HeaderProps from "./index.interface";
// import navMenuList from "../../sample/navigation-menu/navigationMenuSample"; DISABLE MENU TEMPORARILY
// import menuListSample from "../../sample/menu/menu"; DISABLE MENU TEMPORARILY
import { LOGO_URLS, ROUTES } from "../../utils/constants";
import { selectUser } from "../../store/user/user.selector";
import { COLORS, space } from "../../styles/styles";
import WISHLIST_ACTION_TYPES from "../../store/wishlist/wishlist.types";
import listSample from "../../sample/list/list.sample";

const Header: FC<HeaderProps> = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const user = useSelector(selectUser);
  const isBigScreen = useMediaQuery("(min-width: 640px)");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  // LIST ITEMS
  const listItems = [
    {
      id: 'list-item-1',
      text: 'Profile',
      icon: <AccountCircleIcon />,
      href: `${ROUTES.LANDING}`,
    },
    {
      id: 'list-item-2',
      text: 'Wishlist',
      icon: <FavoriteIcon />,
      href: `${ROUTES.WISHLIST}`,
    },
    {
      id: 'list-item-3',
      text: 'Order History',
      icon: <ShoppingBagIcon />,
      href: `${ROUTES.LANDING}`,
    },
    {
      id: 'list-item-4',
      text: 'Reviews',
      icon: <ReviewsIcon />,
      href: `${ROUTES.LANDING}`,
    },
  ];
  
  // DETERMINE LOGO SIZE
  const smallLogoSize = "32";
  const bigLogoSize = "44";
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

  const mobileSearchHandler = () => {
    setShowMobileSearch(prevState => !prevState);
  };

  const signOutHandler = () => {
    // close drawer
    handleDrawerClose();

    // close mobile drawer
    mobileDrawerCloseHandler();

    // remove jwt token
    Cookies.remove("jwt");

    // reset wishlist state
    dispatch({ type: WISHLIST_ACTION_TYPES.RESET_WISHLISTS });


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
        <ToolbarContainerSC sx={{ transform: `${showMobileSearch ? 'translateX(-100%)' : 'translateX(0%)'}` }}>
        <ToolbarSC>
          <Link to={ROUTES.LANDING}>
            <img
              src={LOGO_URLS.TRANSPARENT}
              alt="logo"
              width={logoSize}
              height={logoSize}
            />
          </Link>
          {isBigScreen && <BigSearchContainerSC><Search /></BigSearchContainerSC>}
          <ButtonContainerSC>
            {!isBigScreen && <SearchIconSC onClick={mobileSearchHandler}>
              <SearchIcon />
            </SearchIconSC>}
            <Cart />
            {/* MENU ICON FOR MOBILE */}
            {!isBigScreen && _.isEmpty(user) && (
              <MenuIconSC
                onClick={mobileDrawerOpenHandler}
                sx={{
                  backgroundColor: `${COLORS.NEUTRAL.N0} !important`,
                  color: `${COLORS.NEUTRAL.N300} !important`,
                }}
              >
                <MenuIcon />
              </MenuIconSC>
            )}
          {/* MENU ICON FOR DESKTOP */}
          {isBigScreen && _.isEmpty(user) && (
            <MenuIconSC
              onClick={handleClick}
            >
              <MenuIcon />
            </MenuIconSC>
          )}
          {!_.isEmpty(user) && (
            <AvatarContainerSC sx={{ marginLeft: isBigScreen ? `${space.m} !important` : `0` }}>
              <Avatar
                src={user?.profileUrl}
                clickHandler={handleDrawerOpen}
                size={isBigScreen ? "medium" : "small"}
              />
            </AvatarContainerSC>
          )}
          </ButtonContainerSC>
        </ToolbarSC>
            {!isBigScreen && <SearchContainerSC>
              <BackIconSC onClick={mobileSearchHandler}>
                <ArrowBackIos />
              </BackIconSC>
              <Search />
            </SearchContainerSC>}
        </ToolbarContainerSC>
        {/* <NavigationMenu menuList={navMenuList} /> */}
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
          <DrawerBodySC>
            <List items={listItems} />
          </DrawerBodySC>
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
                  width={64}
                  height={64}
                />
              </LogoContainerSC>
            </MobileDrawerHeadSC>
          )}
          <MobileDrawerBodySC>
          </MobileDrawerBodySC>
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
