import { FC } from 'react';

import Header from '../../components/header/index.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { SignInPageSC, SignInFormContainerSC } from './signin.styles';

const SignInPage: FC = () => {
  return (
    <SignInPageSC>
      <Header />
      <SignInFormContainerSC>
        <SignInForm />
      </SignInFormContainerSC>
    </SignInPageSC>
  )
}

export default SignInPage;