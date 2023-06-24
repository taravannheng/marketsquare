import { FC, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import { styled } from "@mui/material/styles";
import { FormControl, InputBase, InputLabel, MenuItem } from "@mui/material";

import SortInterface from "./sort.interface";
import {
  LabelContainerSC,
  LabelIconSC,
  LabelSC,
  MenuItemSC,
  SelectContainerSC,
  SelectSC,
  SortSC,
} from "./sort.style";
import colors from "../../styles/colors";

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
    backgroundColor: `${colors.light}`,
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    color: `${colors.darkest}`,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "Inter",
      "sans-serif",
    ].join(","),
    "&:focus": {
      outline: 0,
      borderRadius: 4,
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const Sort: FC<SortInterface> = ({ sortMenuItem, setSortMenuItem }) => {
  const handleChange = (event: any) => {
    setSortMenuItem(event.target.value);
  };

  return (
    <SortSC>
      <LabelContainerSC>
        <LabelIconSC>
          <SortIcon />
        </LabelIconSC>
        <LabelSC>Sort</LabelSC>
      </LabelContainerSC>
      <SelectContainerSC>
        <FormControl fullWidth>
          <SelectSC
            id="demo-simple-select"
            value={sortMenuItem}
            label="sort"
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItemSC
              value={0}
              sx={{
                backgroundColor: `${
                  sortMenuItem === 0
                    ? `${colors.lightPrimary} !important`
                    : `${colors.lightest} !important`
                }`,
                color: `${
                  sortMenuItem === 0
                    ? `${colors.lightest} !important`
                    : `${colors.darkest} !important`
                }`,
              }}
            >
              None
            </MenuItemSC>
            <MenuItemSC
              value={1}
              sx={{
                backgroundColor: `${
                  sortMenuItem === 1
                    ? `${colors.lightPrimary} !important`
                    : `${colors.lightest} !important`
                }`,
                color: `${
                  sortMenuItem === 1
                    ? `${colors.lightest} !important`
                    : `${colors.darkest} !important`
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
                    ? `${colors.lightPrimary} !important`
                    : `${colors.lightest} !important`
                }`,
                color: `${
                  sortMenuItem === 2
                    ? `${colors.lightest} !important`
                    : `${colors.darkest} !important`
                }`,
              }}
            >
              Price High to Low
            </MenuItemSC>
          </SelectSC>
        </FormControl>
      </SelectContainerSC>
    </SortSC>
  );
};

export default Sort;
