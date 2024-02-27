import { FC } from "react";

import ListItem from "../list-item/list-item.component";
import { ListContainerSC, ListSC, StackSC } from "./list.styles";
import ListComponentProps from "./list.interface";
import ListItemInterface from "../../interfaces/list-item.interface";

const List: FC<ListComponentProps> = ({ items }) => {
  return (
    <ListContainerSC>
      <nav>
        <ListSC>
          <StackSC spacing={1} direction='column'>
            {items.map((item: ListItemInterface) => (
                <ListItem
                  key={item.id}
                  text={item.text}
                  icon={item.icon}
                  href={item.href ? item.href : ""}
                  onClick={item.onClick ? item.onClick : () => {}}
                />
            ))}
          </StackSC>
        </ListSC>
      </nav>
    </ListContainerSC>
  );
};

export default List;
