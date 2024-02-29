import { FC, useState } from "react";

// 3rd-party dependencies imports
import _ from "lodash";
  
// props or interfaces imports
import NavigationMenuItemProps from "./index.interface";

// styling imports
import {
CategoryContainerSC,
CategoryItemSC,
CategoryItemStackSC,
CategoryItemTitleSC,
CategorySC,
LinkSC,
MenuSC,
MenuTextSC,
NavigationMenuItemSC,
SubMenuMediaSC,
SubMenuSC,
} from "./index.styles";

const NavigationMenuItem: FC<NavigationMenuItemProps> = ({
  imgUrl,
  categories,
  title,
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleShowDropdown = () => {
    setShowSubMenu(true);
  };

  const handleHideDropdown = () => {
    setShowSubMenu(false);
  };

  return (
    <NavigationMenuItemSC>
      <MenuSC
        sx={{ backgroundColor: `${showSubMenu && "#758AE3"}` }}
        onClick={handleShowDropdown}
        onMouseLeave={handleHideDropdown}
        onMouseEnter={handleShowDropdown}
      >
        <MenuTextSC sx={{ color: `${showSubMenu && "#FFF"}` }}>
          {title}
        </MenuTextSC>
      </MenuSC>
      {showSubMenu && (
        <SubMenuSC
          onMouseEnter={handleShowDropdown}
          onMouseLeave={handleHideDropdown}
        >
          <CategoryContainerSC direction="row" spacing={8}>
            {!_.isEmpty(categories) &&
              categories.map((category: any) => {
                return (
                  <CategorySC key={category.id}>
                    <CategoryItemTitleSC>{category.title}</CategoryItemTitleSC>
                    <CategoryItemStackSC direction="column" spacing={1.5}>
                      {!_.isEmpty(category.categoryListItem) &&
                        category.categoryListItem.map((categoryItem: any) => {
                          return (
                            <CategoryItemSC key={categoryItem.id}>
                              <LinkSC href={categoryItem.url}>
                                {categoryItem.text}
                              </LinkSC>
                            </CategoryItemSC>
                          );
                        })}
                    </CategoryItemStackSC>
                  </CategorySC>
                );
              })}
          </CategoryContainerSC>
        </SubMenuSC>
      )}
    </NavigationMenuItemSC>
  );
};

export default NavigationMenuItem;
