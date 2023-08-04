import styled from "styled-components";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Icon,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const AppBarSC = styled(AppBar)``;

export const ToolbarPlaceholderSC = styled(Box)`
  width: 100%;
  height: 100px;
  background-color: ${colors.lightest} !important;
`;

export const ToolbarSC = styled(Toolbar)`
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  height: clamp(100px, 100px, 100px);
  border-bottom: 1px solid ${colors.light};
  padding: 0 24px !important;
  background-color: ${colors.lightest};
  box-shadow: none;

  @media only screen and (min-width: 1080px) {
    padding: 0 48px !important;
  }
`;

export const NavigationContainerSC = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const LogoContainerSC = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  height: clamp(64px, 64px, 64px);
  margin-bottom: 48px;
`;

export const MenuIconSC = styled(Icon)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: clamp(40px, 40px, 40px) !important;
  height: clamp(40px, 40px, 40px) !important;
  border-radius: ${borderRadius.s} !important;
  margin-left: 24px;
  cursor: pointer;
  color: ${colors.dark};
  transition: background-color 0.3s ease-in-out;
  background-color: ${colors.light} !important;

  &:hover {
    color: ${colors.primary} !important;
  }

  @media only screen and (min-width: 640px) {
    &:hover {
      background-color: ${colors.primary} !important;
      color: ${colors.lightest} !important;
    }
  }
`;

export const AvatarContainerSC = styled(Box)`
  margin-left: ${space.l};
`;

export const DrawerSC = styled(Drawer)`
  position: relative;
`;

export const DrawerContentSC = styled(Box)`
  padding: 56px 24px 180px 24px;
  width: clamp(360px, 360px, 360px);
  height: auto;
  background-color: ${colors.lightest};
`;

export const DrawerHeadSC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DrawerBodySC = styled(Box)``;

export const DrawerBottomSC = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(360px, 360px, 360px);
  padding: 12px 24px 48px 24px;
  background-color: ${colors.lightest};
`;

export const UsernameSC = styled(Typography)`
  margin-top: ${space.xs} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  color: ${colors.darkest} !important;
`;

export const EmailSC = styled(Typography)`
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  color: ${colors.dark} !important;
`;

export const SignOutSC = styled(Link)`
  text-decoration: none !important;
  color: ${colors.dark} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;

  &:hover {
    color: ${colors.red} !important;
    cursor: pointer;
  }
`;

// MOBILE DRAWER

export const MobileDrawerSC = styled(Drawer)`
  position: relative;
`;

export const MobileDrawerContentSC = styled(Box)`
  position: relative;
  padding: 56px 24px 180px 24px;
  width: clamp(360px, 360px, 360px) !important;
  height: 100vh !important;
  background-color: ${colors.lightest};
  overflow: hidden !important;
`;

export const MobileDrawerHeadSC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MobileDrawerBodySC = styled(Box)`

`;

export const MobileDrawerBottomSC = styled(Box)`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%) !important;
  background-color: ${colors.lightest};
`;

export const MobileSignOutContainerSC = styled(Box)`
  padding: 12px 24px 48px 24px;
`;