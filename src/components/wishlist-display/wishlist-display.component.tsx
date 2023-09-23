import { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TransitionGroup } from "react-transition-group";
import { Collapse } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  TitleSC,
  WishlistDisplaySC,
  WishlistEmptyDescriptionSC,
  WishlistEmptyIconSC,
  WishlistEmptySC,
} from "./wishlist-display.styles";

import WishlistItem from "../wishlist-item/wishlist-item.component";
import Button from "../button/button.component";

import WishlistInterface from "../../interfaces/wishlist.interface";
import { selectWishlists } from "../../store/wishlist/wishlist.selector";
import { space } from "../../styles/styles";
import { ROUTES } from "../../utils/constants";

const WishlistDisplay: FC = () => {
  let wishlists = useSelector(selectWishlists);

  // filter items that are not in wishlist
  wishlists = wishlists.filter(
    (wishlist: WishlistInterface) => wishlist.isInWishlist
  );

  return (
    <WishlistDisplaySC>
      <TitleSC>Wishlist</TitleSC>
      {!_.isEmpty(wishlists) && (
        <TransitionGroup>
          {wishlists.map((wishlist: WishlistInterface) => {
            return (
              <Collapse
                key={`wishlist-item-${wishlist._id}`}
                sx={{
                  "&:not(:last-child)": {
                    marginBottom: `${space.m} !important`,
                  },
                }}
              >
                <WishlistItem {...wishlist} />
              </Collapse>
            );
          })}
        </TransitionGroup>
      )}
      {_.isEmpty(wishlists) && (
        <WishlistEmptySC>
          <WishlistEmptyIconSC>
            <FavoriteIcon />
          </WishlistEmptyIconSC>
          <WishlistEmptyDescriptionSC>
            There are no items in Wishlist.
          </WishlistEmptyDescriptionSC>
          <Button href={ROUTES.LANDING} rounded>Browse Products</Button>
        </WishlistEmptySC>
      )}
    </WishlistDisplaySC>
  );
};

export default WishlistDisplay;
