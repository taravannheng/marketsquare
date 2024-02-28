import { FC } from 'react';

// 3rd-party dependencies imports
import _ from 'lodash';

// component imports
import NavigationMenuItem from '../navigation-menu-item/index.component';

// props or interfaces imports
import NavigationMenuInterface from './index.interface'
import { MenuInterface } from './index.interface';

// styling imports
import { NavigationMenuSC, NavigationMenuStackSC } from './index.styles';

const NavigationMenu: FC<NavigationMenuInterface> = ({ menuList }) => {
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