import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ROUTES } from "../../utils/constants"

const listSample = [
  {
    id: 'list-sample-1',
    text: 'Profile',
    icon: <AccountCircleIcon />,
    href: `${ROUTES.LANDING}`,
  },
  {
    id: 'list-sample-2',
    text: 'Wishlist',
    icon: <FavoriteIcon />,
    href: `${ROUTES.SETTINGS}`,
  },
  {
    id: 'list-sample-3',
    text: 'Order History',
    icon: <ShoppingBagIcon />,
    href: `${ROUTES.LOGOUT}`,
  },
  {
    id: 'list-sample-4',
    text: 'Settings',
    icon: <SettingsIcon />,
    href: `${ROUTES.LOGOUT}`,
  },
];

export default listSample;