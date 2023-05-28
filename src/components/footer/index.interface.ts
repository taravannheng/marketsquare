import { ReactNode } from "react";

interface LinkInterface {
  text: string;
  route: string;
}

interface FooterItem {
  title: string; links: LinkInterface[];
}

interface FooterInterface {
  children?: ReactNode;
  footerItems: FooterItem[];
}

export default FooterInterface;