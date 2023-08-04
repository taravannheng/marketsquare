import { FC } from "react";

import ListItemComponentInterface from "./list-item.interface";
import {
  ListItemSC,
  ListItemButtonSC,
  ListItemIconSC,
  ListItemTextSC,
} from "./list-item.styles";

const ListItem: FC<ListItemComponentInterface> = ({
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
