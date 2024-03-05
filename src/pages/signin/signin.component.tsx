import { FC } from 'react';

// component imports
import Header from '../../components/header/header.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

// styling imports
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