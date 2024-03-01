import { FC } from 'react';

// component imports
import Header from '../../components/header/index.component';
import Footer from '../../components/footer/index.component';
import UpdatePasswordForm from '../../components/update-password-form/update-password-form.component';

// styling imports
import { FormContainerSC, PageSC } from './update-password.styles';

// constants or helper functions imports
import footerItemsSample from "../../sample/footer/utility-links-sample";

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