import { FC } from "react";

// 3rd-party dependencies imports
import { Grid, Link } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";
import _ from "lodash";

// props or interfaces imports
import FooterProps from "./index.interface";

// styling imports
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
  AccordionSC,
  AccordionSummarySC,
  AccordionDetailsSC,
  UtilityLinkAccordionContainerSC,
  SiteDescriptionSC,
} from "./index.styles";

// constants or helper function imports
import { LOGO_URLS, ROUTES } from "../../utils/constants";

// asset imports
import FacebookLogo from "../../assets/socials/social-facebook.png";
import InstagramLogo from "../../assets/socials/social-instagram.png";
import LinkedinLogo from "../../assets/socials/social-linkedin.png";
import TwitterLogo from "../../assets/socials/social-twitter.png";
import YoutubeLogo from "../../assets/socials/social-youtube.png";

const Footer: FC<FooterProps> = ({ footerItems }) => {
  const isEmptyFooterItems = footerItems && footerItems.length === 0;
  const SOCIAL_LOGOS = [
    {
      id: "sl_fb",
      href: "/",
      image: FacebookLogo,
      title: "social facebook logo",
    },
    {
      id: "sl_ig",
      href: "/",
      image: InstagramLogo,
      title: "social instagram logo",
    },
    {
      id: "sl_li",
      href: "/",
      image: LinkedinLogo,
      title: "social linkedin logo",
    },
    {
      id: "sl_twt",
      href: "/",
      image: TwitterLogo,
      title: "social twitter logo",
    },
    {
      id: "sl_yt",
      href: "/",
      image: YoutubeLogo,
      title: "social youtube logo",
    },
  ];

  return (
    <FooterSC>
      <SmallFooterSC>
        <Link href={ROUTES.LANDING}>
          <FooterLogoSC
            image={LOGO_URLS.TRANSPARENT_WHITE}
            title="logo"
            sx={{ maxHeight: 56 }}
          />
        </Link>
        <SiteDescriptionSC>
          Marketsquare is a fictitious e-commerce website built with MERN stack.
        </SiteDescriptionSC>
        <UtilityLinkAccordionContainerSC>
          {!isEmptyFooterItems &&
            footerItems.map((utilityLink: any) => {
              return (
                <AccordionSC disableGutters key={`accordion-${utilityLink.id}`}>
                  <AccordionSummarySC expandIcon={<ExpandCircleDown />}>
                    <UtilityLinkTitleSC>{utilityLink.title}</UtilityLinkTitleSC>
                  </AccordionSummarySC>
                  <AccordionDetailsSC>
                    <UtilityLinkContainerSC>
                      <UtilityLinkStackSC direction="column" spacing={1}>
                        {utilityLink.links.map((link: any) => {
                          return (
                            <UtilityLinkSC
                              href={link.route}
                              key={`accordion-${link.id}`}
                            >
                              {link.text}
                            </UtilityLinkSC>
                          );
                        })}
                      </UtilityLinkStackSC>
                    </UtilityLinkContainerSC>
                  </AccordionDetailsSC>
                </AccordionSC>
              );
            })}
        </UtilityLinkAccordionContainerSC>
        <SocialContainerSC>
          <SocialStackSC direction="row" spacing={4}>
            {SOCIAL_LOGOS.map((socialLogo) => {
              return (
                <Link href={socialLogo.href} key={socialLogo.id}>
                  <SocialLogoContainerSC>
                    <SocialLogoSC
                      image={socialLogo.image}
                      title={socialLogo.title}
                    />
                  </SocialLogoContainerSC>
                </Link>
              );
            })}
          </SocialStackSC>
        </SocialContainerSC>
        <FooterCopyright variant="body1">
          Copyright &copy; {new Date().getFullYear()} &middot; All Rights
          Reserved{" "}
        </FooterCopyright>
      </SmallFooterSC>
      <LargeFooterSC>
        <FooterLeftContainerSC>
          <Link href={ROUTES.LANDING}>
            <FooterLogoSC
              image={LOGO_URLS.TRANSPARENT_WHITE}
              title="logo"
              sx={{ maxHeight: 56 }}
            />
          </Link>
          <FooterLeftContent>
          <SiteDescriptionSC>
            Marketsquare is a fictitious ecommerce website built with MERN stack.
          </SiteDescriptionSC>
          <SocialContainerSC>
            <SocialStackSC direction="row" spacing={4}>
              {SOCIAL_LOGOS.map((socialLogo) => {
                return (
                  <Link href={socialLogo.href} key={socialLogo.id}>
                    <SocialLogoContainerSC>
                      <SocialLogoSC
                        image={socialLogo.image}
                        title={socialLogo.title}
                      />
                    </SocialLogoContainerSC>
                  </Link>
                );
              })}
            </SocialStackSC>
          </SocialContainerSC>
            <FooterCopyright variant="body1">
              Copyright &copy; {new Date().getFullYear()} &middot; All Rights
              Reserved{" "}
            </FooterCopyright>
          </FooterLeftContent>
        </FooterLeftContainerSC>
        <FooterRightContainerSC>
          <Grid container sx={{ flexGrow: 1 }}>
            {!isEmptyFooterItems &&
              footerItems.map((utilityLink: any) => {
                return (
                  <Grid item xs={3} key={`grid-${utilityLink.id}`}>
                    <UtilityLinkContainerSC>
                      <UtilityLinkTitleSC>
                        {utilityLink.title}
                      </UtilityLinkTitleSC>
                      <UtilityLinkStackSC direction="column" spacing={2}>
                        {utilityLink.links.map((link: any) => {
                          return (
                            <UtilityLinkSC
                              href={link.route}
                              key={`grid-${link.id}`}
                            >
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
        </FooterRightContainerSC>
      </LargeFooterSC>
    </FooterSC>
  );
};

export default Footer;
