import { FC } from 'react';

import ResetPasswordRequestForm from '../../components/reset-password-request-form/reset-password-request-form.component';
import Header from '../../components/header/index.component';
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