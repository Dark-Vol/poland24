import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Drawer, Pagination, useMediaQuery } from "@mui/material";

import type Store from "@entities/store";
import FiltersCountries from "./Toolbar";
import Button from "@components/UI/buttons";
import theme from "@theme/index";
import ShopsList from "./List";
import Aside from "./FiltersAside";

import * as Styled from "./Shops.styled";

type ShopsProps = {
  shopsData: Store[];
};

const Shops: React.FC<ShopsProps> = ({ shopsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [state, setState] = useState(false);
  const toggleDrawer = () => setState(!state);
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const itemsPerPage = 20;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const shopsToDisplay = shopsData.slice(startIndex, endIndex);

  const handlePageChange = (_, newPage) => {
    setCurrentPage(newPage);
  };

  const { t } = useTranslation("shopsFilter");

  return (
    <>
      <Styled.Wrapper>
        {matches && <Aside />}
        <Styled.Container>
          {!matches && (
            <Button
              size="small"
              variant="secondary"
              style={{ marginBottom: "16px" }}
              onClick={toggleDrawer}
            >
              {t("filter")}
            </Button>
          )}
          <FiltersCountries />
          {!matches && (
            <Drawer anchor="right" open={state} onClose={toggleDrawer}>
              <Aside />
            </Drawer>
          )}
          <ShopsList shops={shopsToDisplay} />
        </Styled.Container>
      </Styled.Wrapper>
      {shopsData.length >= itemsPerPage && (
        <Pagination
          sx={{ display: "flex", justifyContent: "center" }}
          count={Math.ceil(shopsData.length / itemsPerPage)}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Shops;
