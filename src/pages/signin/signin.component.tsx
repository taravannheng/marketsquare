import { FC } from 'react';

import Header from '../../components/header/index.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import Footer from '../../components/footer/index.component';
import { SignInPageSC, SignInFormContainerSC } from './signin.styles';
import footerItemsSample from "../../sample/footer/utility-links-sample";

const SignInPage: FC = () => {
  return (
    <SignInPageSC>
      <Header />
      <SignInFormContainerSC>
        <SignInForm />
      </SignInFormContainerSC>
      <Footer footerItems={footerItemsSample} />
    </SignInPageSC>
  )
}

export default SignInPage;