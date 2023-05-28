import { FC, useState } from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import NavigationMenuItemInterface from './index.interface';
import { CategoryContainerSC, CategoryItemSC, CategoryItemStackSC, CategoryItemTitleSC, CategorySC, LinkSC, MenuSC, MenuTextSC, NavigationMenuItemSC, SubMenuMediaSC, SubMenuSC } from './index.styles';

const NavigationMenuItem: FC<NavigationMenuItemInterface> = ({ imgUrl, categories, title }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  
  const showDropdownHandler = () => {
    setShowSubMenu(true);
  }

  const hideDropdownHandler = () => {
    setShowSubMenu(false);
  }

  return (
    <NavigationMenuItemSC>
      <MenuSC sx={{ backgroundColor: `${showSubMenu && '#758AE3'}` }} onClick={showDropdownHandler} onMouseLeave={hideDropdownHandler} onMouseEnter={showDropdownHandler}><MenuTextSC sx={{ color: `${showSubMenu && '#FFF'}` }}>{title}</MenuTextSC></MenuSC>
      {showSubMenu && <SubMenuSC onMouseEnter={showDropdownHandler} onMouseLeave={hideDropdownHandler}>
          <CategoryContainerSC>
          {!_.isEmpty(categories) && categories.map((category: any) => {
            return <CategorySC key={uuidv4()}>
              <CategoryItemTitleSC>{category.title}</CategoryItemTitleSC>
              <CategoryItemStackSC direction="column" spacing={1.5}>
              {!_.isEmpty(category.categoryListItem) && category.categoryListItem.map((categoryItem: any) => {
                return <CategoryItemSC>
                 <LinkSC href={categoryItem.url}>{categoryItem.text}</LinkSC> 
                </CategoryItemSC>
              })}
              </CategoryItemStackSC>
            </CategorySC>
          })}

          </CategoryContainerSC>
          <SubMenuMediaSC image={imgUrl} />
        </SubMenuSC>}
      
    </NavigationMenuItemSC>
  )
}

export default NavigationMenuItem;