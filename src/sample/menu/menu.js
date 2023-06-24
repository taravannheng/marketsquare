import { AccountCircle, Login } from '@mui/icons-material';

const menuListSample = [
  {
    id: "a7B3nR9k",
    text: "Sign Up",
    icon: <AccountCircle />,
    clickHandler: () => {
      alert("Sign Up clicked");
    }
  },
  {
    id: "a7B3nR9j",
    text: "Sign In",
    icon: <Login />,
    clickHandler: () => {
      alert("Sign In clicked");
    }
  },
];

export default menuListSample;