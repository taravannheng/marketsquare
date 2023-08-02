import { FC } from 'react';

import ResetPasswordVerifyForm from '../../components/reset-password-verify-form/reset-password-verify-form.component';
import Header from '../../components/header/index.component';
import Footer from '../../components/footer/index.component';
import footerItemsSample from "../../sample/footer/utility-links-sample";
import { FormContainerSC, PageSC } from './reset-password-verify.styles';

const ResetPasswordVerifyPage: FC = () => {
  return (
    <>
    <PageSC>
      <Header />
      <FormContainerSC>
        <ResetPasswordVerifyForm />
      </FormContainerSC>
      <Footer footerItems={footerItemsSample} />
    </PageSC>
    </>
  )
}

export default ResetPasswordVerifyPage;