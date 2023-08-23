import { FC } from "react";
import { Grid, Link } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";
import _ from "lodash";

import FooterProps from "./index.interface";
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
import FacebookLogo from "../../assets/socials/social-facebook.png";
import InstagramLogo from "../../assets/socials/social-instagram.png";
import LinkedinLogo from "../../assets/socials/social-linkedin.png";
import TwitterLogo from "../../assets/socials/social-twitter.png";
import YoutubeLogo from "../../assets/socials/social-youtube.png";
import { LOGO_URLS, ROUTES } from "../../utils/constants";

const Footer: FC<FooterProps> = ({ footerItems }) => {
  return (
    <FooterSC>
      <SmallFooterSC>
        <Link href={ROUTES.LANDING}>
          <SmallFooterLogoSC
            image={LOGO_URLS.VERTICAL_WHITE}
            title="logo"
            sx={{ maxHeight: 80 }}
          />
        </Link>
        <UtilityLinkAccordionContainerSC>
          {footerItems.map((utilityLink: any) => {
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
            <Link href="/">
              <SocialLogoContainerSC>
                <SocialLogoSC
                  image={FacebookLogo}
                  title="social facebook logo"
                />
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
                <SocialLogoSC
                  image={LinkedinLogo}
                  title="social linkedin logo"
                />
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
          <Link href={ROUTES.LANDING}>
            <FooterLogoSC
              image={LOGO_URLS.FILLED}
              title="logo"
              sx={{ maxHeight: 240 }}
            />
          </Link>
          <FooterLeftContent>
            <FooterCopyright variant="body1">
              Copyright &copy; {new Date().getFullYear()} &middot; All Rights
              Reserved{" "}
            </FooterCopyright>
          </FooterLeftContent>
        </FooterLeftContainerSC>
        <FooterRightContainerSC>
          <Grid container sx={{ flexGrow: 1 }}>
            {!_.isEmpty(footerItems) &&
              footerItems.map((utilityLink: any) => {
                return (
                  <Grid item xs={3} key={`grid-${utilityLink.id}`}>
                    <UtilityLinkContainerSC>
                      <UtilityLinkTitleSC>
                        {utilityLink.title}
                      </UtilityLinkTitleSC>
                      <UtilityLinkStackSC direction="column" spacing={1}>
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
          <SocialContainerSC>
            <SocialStackSC direction="row" spacing={4}>
              <Link href="/">
                <SocialLogoContainerSC>
                  <SocialLogoSC
                    image={FacebookLogo}
                    title="social facebook logo"
                  />
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
                  <SocialLogoSC
                    image={LinkedinLogo}
                    title="social linkedin logo"
                  />
                </SocialLogoContainerSC>
              </Link>
              <Link href="/">
                <SocialLogoContainerSC>
                  <SocialLogoSC
                    image={YoutubeLogo}
                    title="social youtube logo"
                  />
                </SocialLogoContainerSC>
              </Link>
              <Link href="/">
                <SocialLogoContainerSC>
                  <SocialLogoSC
                    image={TwitterLogo}
                    title="social twitter logo"
                  />
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
