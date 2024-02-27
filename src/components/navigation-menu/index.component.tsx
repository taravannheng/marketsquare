import { FC } from 'react'
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import NavigationMenuItem from '../navigation-menu-item/index.component';
import NavigationMenuProps from './index.interface'
import { MenuInterface } from './index.interface';
import { NavigationMenuSC, NavigationMenuStackSC } from './index.styles';

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