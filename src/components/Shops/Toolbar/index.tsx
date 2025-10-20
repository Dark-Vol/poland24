import Image from "next/image";
import { Chip } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ArrayParam, decodeQueryParams } from "serialize-query-params";

import * as Styled from "./Toolbar.styled";

const FiltersCountries: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("shopsFilter");
  const { country, category } = decodeQueryParams(
    { country: ArrayParam, category: ArrayParam },
    router.query
  );

  const renderChip = (data: string[], key: string) => {
    return data.map((el) => (
      <Chip
        color="primary"
        sx={{ background: "#596266", color: "#fff", fontWeight: 700 }}
        key={el}
        label={t(el)}
        onDelete={() =>
          router.push({
            query: {
              ...router.query,
              [key]: data.filter((name) => name !== el),
            },
          })
        }
      />
    ));
  };

  return (
    <>
      {(country || category) && (
        <Styled.FiltersToolbar>
          {country && renderChip(country, "country")}
          {category && renderChip(category, "category")}
          <Chip
            label={
              <span
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                <Image
                  src="/images/icons/delete-one.png"
                  height={16}
                  width={16}
                  alt="delete"
                />
                {t("clearFilter")}
              </span>
            }
            sx={{
              background: "none !important",
              fontWeight: 700,
            }}
            onClick={() =>
              router.push({
                query: {},
              })
            }
          />
        </Styled.FiltersToolbar>
      )}
    </>
  );
};

export default FiltersCountries;
