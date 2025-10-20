import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ArrayParam, decodeQueryParams } from "serialize-query-params";
import { countryDeliveryConfig } from "@common/configs/countryDelivery";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Checkbox from "@components/UI/inputs/Checkbox";

import * as Styled from "./FiltersAside.styled";

const FilterSection: React.FC<{
  items: string[];
  filterKey: string;
}> = ({ items, filterKey }) => {
  const router = useRouter();
  const filters = decodeQueryParams(
    { [filterKey]: ArrayParam },
    router.query || {}
  );

  const { t } = useTranslation("shopsFilter");

  const handleFilterClick = (name: string) => {
    const currentFilters = filters[filterKey] || [];

    if (currentFilters.includes(name)) {
      router.query[filterKey] = currentFilters.filter((el) => el !== name);
    } else {
      router.query[filterKey] = [...currentFilters, name];
    }

    router.push({ query: router.query });
  };

  return (
    <>
      <Typography
        style={{
          padding: "4px",
          paddingBottom: "8px",
          fontSize: "16px",
          fontWeight: 700,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        {t(`${filterKey}Title`)}
      </Typography>
      <List
        sx={{
          overflow: "auto",
          height: "45%",
        }}
      >
        {items.map((name: string) => (
          <ListItem key={name} disablePadding>
            <ListItemButton
              sx={{ padding: 1, borderBottom: "1px solid #e0e0e0" }}
              dense
              onClick={() => handleFilterClick(name)}
            >
              <ListItemIcon>
                <Checkbox
                  name={name.toString()}
                  checked={filters[filterKey]?.includes(name)}
                  onChange={() => {}}
                />
              </ListItemIcon>
              <ListItemText primary={t(name.toString())} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

const Aside: React.FC = () => {
  return (
    <Styled.Aside>
      <FilterSection
        items={countryDeliveryConfig.map((config) => config.name)}
        filterKey="country"
      />
      <FilterSection
        items={new Array(15).fill(null).map((_, index) => `${index + 1}`)}
        filterKey="category"
      />
    </Styled.Aside>
  );
};

export default Aside;
