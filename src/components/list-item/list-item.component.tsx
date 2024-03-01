import { FC } from "react";

// props or interfaces imports
import ListItemComponentProps from "./list-item.interface";

// styling imports
import {
  ListItemSC,
  ListItemButtonSC,
  ListItemIconSC,
  ListItemTextSC,
} from "./list-item.styles";

const ListItem: FC<ListItemComponentProps> = ({
  text,
  icon,
  href,
  onClick,
}) => {
  return (
    <ListItemSC>
      <ListItemButtonSC
        component="a"
        href={href ? href : ""}
        onClick={onClick ? onClick : ""}
      >
        <ListItemIconSC>{icon}</ListItemIconSC>
        <ListItemTextSC primary={text} />
      </ListItemButtonSC>
    </ListItemSC>
  );
};

export default ListItem;
