import { FC } from 'react';

// component imports
import Header from '../../components/header/index.component';
import Footer from '../../components/footer/index.component';
import NotFoundDisplay from '../../components/notfound-display/notfound-display.component';

// constants or helper functions imports
import footerUtilityLinksSample from '../../sample/footer/utility-links-sample';

const NotFoundPage: FC = () => {
  return (
    <>
      <Header />
      <NotFoundDisplay />
      <Footer footerItems={footerUtilityLinksSample} />
    </>
  )
}

export default NotFoundPage;