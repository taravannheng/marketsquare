import { FC } from 'react';

import Header from '../../components/header/index.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Footer from '../../components/footer/index.component';
import { SignUpPageSC, SignUpFormContainerSC } from './signup.styles';
import footerItemsSample from "../../sample/footer/utility-links-sample";

const SignUpPage: FC = () => {
  return (
    <SignUpPageSC>
      <Header />
      <SignUpFormContainerSC>
        <SignUpForm />
      </SignUpFormContainerSC>
      <Footer footerItems={footerItemsSample} />
    </SignUpPageSC>
  )
}

export default SignUpPage;