import { FC } from "react";

// component imports
import ListItem from "../list-item/list-item.component";

// props or interfaces imports
import ListComponentInterface from "./list.interface";
import ListItemInterface from "../../interfaces/list-item.interface";

// styling imports
import { ListContainerSC, ListSC, StackSC } from "./list.styles";

const List: FC<ListComponentInterface> = ({ items }) => {
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
