import { FC } from 'react';

// 3rd-party dependencies imports
import _ from 'lodash';

// component imports
import NavigationMenuItem from '../navigation-menu-item/index.component';

// props or interfaces imports
import NavigationMenuProps from './navigation-menu.interface'
import { MenuInterface } from './navigation-menu.interface';

// styling imports
import { NavigationMenuSC, NavigationMenuStackSC } from './navigation-menu.styles';

const NavigationMenu: FC<NavigationMenuProps> = ({ menuList }) => {
  return (
    <NavigationMenuSC>
      <NavigationMenuStackSC direction="row"> 
        {!_.isEmpty(menuList) && menuList.map((menu: MenuInterface) => {
          return <NavigationMenuItem {...menu} key={menu.id} />
        })}
      </NavigationMenuStackSC>
    </NavigationMenuSC>
  )
}

export default NavigationMenu;