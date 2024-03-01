import { FC } from 'react';

// component imports
import Header from '../../components/header/index.component';
import Footer from '../../components/footer/index.component';
import ResetPasswordVerifyForm from '../../components/reset-password-verify-form/reset-password-verify-form.component';

// styling imports
import { FormContainerSC, PageSC } from './reset-password-verify.styles';

// constants or helper functions imports
import footerItemsSample from "../../sample/footer/utility-links-sample";

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