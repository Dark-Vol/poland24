import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "next-i18next";
import FormControl from "@mui/material/FormControl";

import { doc, setDoc } from "@firebase";
import { useRouter } from "next/router";
import * as Styled from "./Select.styled";

const Select = ({ options, locale, data }) => {
  const { t } = useTranslation(locale);
  const router = useRouter();

  const handleChange = async (e) => {
    const ref = doc(`${locale}s/${data.id}`);
    await setDoc(ref, { ...data, status: e.target.value });
    router.replace(router.asPath);
  };

  return (
    <FormControl fullWidth variant="standard">
      <Styled.Select value={data.status} onChange={handleChange}>
        {Object.entries(options).map(([key, value]: [string, string]) => (
          <MenuItem key={key} value={key}>
            {t(value)}
          </MenuItem>
        ))}
      </Styled.Select>
    </FormControl>
  );
};

export default Select;
