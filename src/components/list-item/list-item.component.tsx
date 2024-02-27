import { FC } from "react";

import ListItemComponentProps from "./list-item.interface";
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
