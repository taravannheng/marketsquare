import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";
import { useSelector } from "react-redux";
import { Collapse } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TransitionGroup } from "react-transition-group";

// component imports
import WishlistItem from "../wishlist-item/wishlist-item.component";
import Button from "../button/button.component";

// state management imports
import { selectWishlists } from "../../store/wishlist/wishlist.selector";

// props or interfaces imports
import WishlistInterface from "../../interfaces/wishlist.interface";

// styling imports
import {
  TitleSC,
  WishlistDisplaySC,
  WishlistEmptyDescriptionSC,
  WishlistEmptyIconSC,
  WishlistEmptySC,
} from "./wishlist-display.styles";
import { space } from "../../styles/styles";

// constants or helper function imports
import { ROUTES } from "../../utils/constants";

const WishlistDisplay: FC = () => {
  let wishlists = useSelector(selectWishlists);

  // filter items that are not in wishlist
  if (wishlists) {
    wishlists = wishlists.filter(
      (wishlist: WishlistInterface) => wishlist.isInWishlist
    );
  }

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
