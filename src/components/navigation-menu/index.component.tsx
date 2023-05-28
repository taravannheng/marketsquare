import { FC } from 'react'
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import NavigationMenuItem from '../navigation-menu-item/index.component';
import NavigationMenuInterface from './index.interface'
import { MenuInterface } from './index.interface';
import { NavigationMenuSC, NavigationMenuStackSC } from './index.styles';

const NavigationMenu: FC<NavigationMenuInterface> = ({ menuList }) => {
  return (
    <NavigationMenuSC>
      <NavigationMenuStackSC direction="row"> 
        {!_.isEmpty(menuList) && menuList.map((menu: MenuInterface) => {
          return <NavigationMenuItem {...menu} key={uuidv4()} />
        })}
      </NavigationMenuStackSC>
    </NavigationMenuSC>
  )
}

export default NavigationMenu;