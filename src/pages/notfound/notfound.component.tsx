import { FC } from 'react';

import Header from '../../components/header/index.component';
import NotFoundDisplay from '../../components/notfound-display/notfound-display.component';
import Footer from '../../components/footer/index.component';
import footerUtilityLinksSample from '../../sample/footer/utility-links-sample';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <NotFoundDisplay />
      <Footer footerItems={footerUtilityLinksSample} />
    </>
  )
}

export default NotFoundPage;