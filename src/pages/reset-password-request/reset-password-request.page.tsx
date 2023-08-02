import { FC } from 'react';

import ResetPasswordRequestForm from '../../components/reset-password-request-form/reset-password-request-form.component';
import Header from '../../components/header/index.component';
import Footer from '../../components/footer/index.component';
import footerItemsSample from "../../sample/footer/utility-links-sample";
import { FormContainerSC, PageSC } from './reset-password-request.styles';

const ResetPasswordRequestPage: FC = () => {
  return (
    <>
    <PageSC>
      <Header />
      <FormContainerSC>
        <ResetPasswordRequestForm />
      </FormContainerSC>
      <Footer footerItems={footerItemsSample} />
    </PageSC>
    </>
  )
}

export default ResetPasswordRequestPage;