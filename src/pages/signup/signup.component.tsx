import { FC } from 'react';

import Header from '../../components/header/index.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { SignUpPageSC, SignUpFormContainerSC } from './signup.styles';

const SignUpPage: FC = () => {
  return (
    <SignUpPageSC>
      <Header />
      <SignUpFormContainerSC>
        <SignUpForm />
      </SignUpFormContainerSC>
    </SignUpPageSC>
  )
}

export default SignUpPage;