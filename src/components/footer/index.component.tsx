import { FC } from "react";
import { Grid, Link } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import FooterInterface from "./index.interface";
import {
  FooterSC,
  SmallFooterSC,
  LargeFooterSC,
  FooterLeftContainerSC,
  FooterLogoSC,
  FooterLeftContent,
  FooterCopyright,
  FooterRightContainerSC,
  UtilityLinkContainerSC,
  UtilityLinkTitleSC,
  UtilityLinkStackSC,
  UtilityLinkSC,
  SocialStackSC,
  SocialContainerSC,
  SocialLogoContainerSC,
  SocialLogoSC,
  SmallFooterLogoSC,
  AccordionSC,
  AccordionSummarySC,
  AccordionDetailsSC,
  UtilityLinkAccordionContainerSC,
} from "./index.styles";
import Logo from "../../assets/logos/logo-filled.png";
import LogoWhite from "../../assets/logos/logo-white.png";
import FacebookLogo from "../../assets/socials/social-facebook.png";
import InstagramLogo from "../../assets/socials/social-instagram.png";
import LinkedinLogo from "../../assets/socials/social-linkedin.png";
import TwitterLogo from "../../assets/socials/social-twitter.png";
import YoutubeLogo from "../../assets/socials/social-youtube.png";

const Footer: FC<FooterInterface> = ({ footerItems }) => {
  return (
    <FooterSC>
      <SmallFooterSC>
        <SmallFooterLogoSC image={LogoWhite} title="logo" sx={{ maxHeight: 64 }} />
        <UtilityLinkAccordionContainerSC>
          {footerItems.map((utilityLink: any) => {
            return <AccordionSC disableGutters key={uuidv4()}>
              <AccordionSummarySC expandIcon={<ExpandCircleDown />}>
                <UtilityLinkTitleSC>{utilityLink.title}</UtilityLinkTitleSC>
              </AccordionSummarySC>
              <AccordionDetailsSC>
              <UtilityLinkContainerSC>
                    <UtilityLinkStackSC direction="column" spacing={1}>
                      {utilityLink.links.map((link: any) => {
                        return (
                          <UtilityLinkSC href={link.route} key={uuidv4()}>
                            {link.text}
                          </UtilityLinkSC>
                        );
                      })}
                    </UtilityLinkStackSC>
                  </UtilityLinkContainerSC>
              </AccordionDetailsSC>
            </AccordionSC>
          })}
        </UtilityLinkAccordionContainerSC>
        <SocialContainerSC>
          <SocialStackSC direction="row" spacing={4}>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC image={FacebookLogo} title="social facebook logo" />
            </SocialLogoContainerSC>
            </Link>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC
                image={InstagramLogo}
                title="social instagram logo"
              />
            </SocialLogoContainerSC>
            </Link>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC image={LinkedinLogo} title="social linkedin logo" />
            </SocialLogoContainerSC>
            </Link>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC image={YoutubeLogo} title="social youtube logo" />
            </SocialLogoContainerSC>
            </Link>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC image={TwitterLogo} title="social twitter logo" />
            </SocialLogoContainerSC>
            </Link>
          </SocialStackSC>
        </SocialContainerSC>
        <FooterCopyright variant="body1">
            Copyright &copy; {new Date().getFullYear()} &middot; All Rights
            Reserved{" "}
          </FooterCopyright>
      </SmallFooterSC>
    <LargeFooterSC>
      <FooterLeftContainerSC>
        <FooterLogoSC image={Logo} title="logo" sx={{ maxHeight: 240 }} />
        <FooterLeftContent>
          <FooterCopyright variant="body1">
            Copyright &copy; {new Date().getFullYear()} &middot; All Rights
            Reserved{" "}
          </FooterCopyright>
        </FooterLeftContent>
      </FooterLeftContainerSC>
      <FooterRightContainerSC>
        <Grid container sx={{ flexGrow: 1, }}>
          {!_.isEmpty(footerItems) &&
            footerItems.map((utilityLink: any) => {
              return (
                <Grid item xs={3} key={uuidv4()}>
                  <UtilityLinkContainerSC>
                    <UtilityLinkTitleSC>{utilityLink.title}</UtilityLinkTitleSC>
                    <UtilityLinkStackSC direction="column" spacing={1}>
                      {utilityLink.links.map((link: any) => {
                        return (
                          <UtilityLinkSC href={link.route} key={uuidv4()}>
                            {link.text}
                          </UtilityLinkSC>
                        );
                      })}
                    </UtilityLinkStackSC>
                  </UtilityLinkContainerSC>
                </Grid>
              );
            })}
        </Grid>
        <SocialContainerSC>
          <SocialStackSC direction="row" spacing={4}>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC image={FacebookLogo} title="social facebook logo" />
            </SocialLogoContainerSC>
            </Link>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC
                image={InstagramLogo}
                title="social instagram logo"
              />
            </SocialLogoContainerSC>
            </Link>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC image={LinkedinLogo} title="social linkedin logo" />
            </SocialLogoContainerSC>
            </Link>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC image={YoutubeLogo} title="social youtube logo" />
            </SocialLogoContainerSC>
            </Link>
            <Link href="/">
            <SocialLogoContainerSC>
              <SocialLogoSC image={TwitterLogo} title="social twitter logo" />
            </SocialLogoContainerSC>
            </Link>
          </SocialStackSC>
        </SocialContainerSC>
      </FooterRightContainerSC>
    </LargeFooterSC>
    </FooterSC>
  );
};

export default Footer;
