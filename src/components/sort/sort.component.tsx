import { FC, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  MenuList,
  Icon,
  useMediaQuery,
} from "@mui/material";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import SortProps from "./sort.interface";
import {
  BottomSheetMenuItemSC,
  BottomSheetMenuListSC,
  BottomSheetTitleSC,
  LabelContainerSC,
  LabelIconSC,
  LabelSC,
  MenuItemSC,
  SelectContainerSC,
  SelectSC,
  SortSC,
} from "./sort.style";
import { COLORS, BREAKPOINTS, typography } from "../../styles/styles";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 4,
    outline: 0,
    position: "relative",
    backgroundColor: `${COLORS.NEUTRAL.N0}`,
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    color: `${COLORS.NEUTRAL.N500}`,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: ["Inter", "sans-serif"].join(","),
    "&:focus": {
      outline: 0,
      borderRadius: 4,
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const Sort: FC<SortProps> = ({ sortMenuItem, setSortMenuItem }) => {
  const isLargeScreen = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`);
  const label = isLargeScreen ? "Sort by: " : "Sort";
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const changeSort = (value: number) => {
    setSortMenuItem(value);
    closeBottomSheet();
  };

  const handleSortChange = (event: any) => {
    setSortMenuItem(event.target.value);
  };

  const openBottomSheet = () => {
    const isSmallScreen = !isLargeScreen;

    if (isSmallScreen) {
      setIsBottomSheetOpen(true);
    }
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      <SortSC onClick={openBottomSheet}>
        <LabelContainerSC>
          <LabelSC>{label}</LabelSC>
          {!isLargeScreen && (<LabelIconSC>
            <ExpandMoreIcon />
          </LabelIconSC>)}
        </LabelContainerSC>
        {isLargeScreen && (
          <SelectContainerSC>
            <FormControl fullWidth>
              <SelectSC
                id="demo-simple-select"
                value={sortMenuItem}
                label="sort"
                onChange={handleSortChange}
                input={<BootstrapInput />}
              >
                <MenuItemSC
                  value={0}
                  sx={{
                    backgroundColor: `${
                      sortMenuItem === 0
                        ? `${COLORS.PRIMARY.P400} !important`
                        : `${COLORS.NEUTRAL.N0} !important`
                    }`,
                    color: `${
                      sortMenuItem === 0
                        ? `${COLORS.NEUTRAL.N0} !important`
                        : `${COLORS.NEUTRAL.N900} !important`
                    }`,
                  }}
                >
                  Default
                </MenuItemSC>
                <MenuItemSC
                  value={1}
                  sx={{
                    backgroundColor: `${
                      sortMenuItem === 1
                        ? `${COLORS.PRIMARY.P400} !important`
                        : `${COLORS.NEUTRAL.N0} !important`
                    }`,
                    color: `${
                      sortMenuItem === 1
                        ? `${COLORS.NEUTRAL.N0} !important`
                        : `${COLORS.NEUTRAL.N900} !important`
                    }`,
                  }}
                >
                  Price Low to High
                </MenuItemSC>
                <MenuItemSC
                  value={2}
                  sx={{
                    backgroundColor: `${
                      sortMenuItem === 2
                        ? `${COLORS.PRIMARY.P400} !important`
                        : `${COLORS.NEUTRAL.N0} !important`
                    }`,
                    color: `${
                      sortMenuItem === 2
                        ? `${COLORS.NEUTRAL.N0} !important`
                        : `${COLORS.NEUTRAL.N900} !important`
                    }`,
                  }}
                >
                  Price High to Low
                </MenuItemSC>
              </SelectSC>
            </FormControl>
          </SelectContainerSC>
        )}
      </SortSC>
      <BottomSheet
        open={isBottomSheetOpen}
        onDismiss={closeBottomSheet}
        header={<BottomSheetTitleSC>Sort</BottomSheetTitleSC>}
      >
        <BottomSheetMenuListSC>
          <BottomSheetMenuItemSC
            sx={{
              color: `${
                sortMenuItem === 0
                  ? `${COLORS.PRIMARY.P500} !important`
                  : `${COLORS.NEUTRAL.N500} !important`
              }`,
              fontWeight: `${
                sortMenuItem === 0
                  ? `${typography.body2.fontWeight} !important`
                  : `${typography.body1.fontWeight} !important`
              }`,
            }}
            onClick={() => {
              changeSort(0);
            }}
            disableRipple
          >
            Default
            {sortMenuItem === 0 && (
              <Icon>
                <CheckIcon />
              </Icon>
            )}
          </BottomSheetMenuItemSC>
          <BottomSheetMenuItemSC
            sx={{
              color: `${
                sortMenuItem === 1
                  ? `${COLORS.PRIMARY.P500} !important`
                  : `${COLORS.NEUTRAL.N500} !important`
              }`,
              fontWeight: `${
                sortMenuItem === 1
                  ? `${typography.body2.fontWeight} !important`
                  : `${typography.body1.fontWeight} !important`
              }`,
            }}
            onClick={() => {
              changeSort(1);
            }}
            disableRipple
          >
            Price Low to High
            {sortMenuItem === 1 && (
              <Icon>
                <CheckIcon />
              </Icon>
            )}
          </BottomSheetMenuItemSC>
          <BottomSheetMenuItemSC
            sx={{
              color: `${
                sortMenuItem === 2
                  ? `${COLORS.PRIMARY.P500} !important`
                  : `${COLORS.NEUTRAL.N500} !important`
              }`,
              fontWeight: `${
                sortMenuItem === 2
                  ? `${typography.body2.fontWeight} !important`
                  : `${typography.body1.fontWeight} !important`
              }`,
            }}
            onClick={() => {
              changeSort(2);
            }}
            disableRipple
          >
            Price High to Low
            {sortMenuItem === 2 && (
              <Icon>
                <CheckIcon />
              </Icon>
            )}
          </BottomSheetMenuItemSC>
        </BottomSheetMenuListSC>
      </BottomSheet>
    </>
  );
};

export default Sort;
