import { FC } from 'react';

import UpdatePasswordForm from '../../components/update-password-form/update-password-form.component';
import Header from '../../components/header/index.component';
import Footer from '../../components/footer/index.component';
import footerItemsSample from "../../sample/footer/utility-links-sample";
import { FormContainerSC, PageSC } from './update-password.styles';

const UpdatePasswordPage: FC = () => {
  return (
    <>
    <PageSC>
      <Header />
      <FormContainerSC>
        <UpdatePasswordForm />
      </FormContainerSC>
      <Footer footerItems={footerItemsSample} />
    </PageSC>
    </>
  )
}

export default UpdatePasswordPage;