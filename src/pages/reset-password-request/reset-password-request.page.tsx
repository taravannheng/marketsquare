import { FC } from 'react';

// component imports
import Header from '../../components/header/header.component';
import ResetPasswordRequestForm from '../../components/reset-password-request-form/reset-password-request-form.component';

// styling imports
import { FormContainerSC, PageSC } from './reset-password-request.styles';

const ResetPasswordRequestPage: FC = () => {
  return (
    <>
    <PageSC>
      <Header />
      <FormContainerSC>
        <ResetPasswordRequestForm />
      </FormContainerSC>
    </PageSC>
    </>
  )
}

export default ResetPasswordRequestPage;