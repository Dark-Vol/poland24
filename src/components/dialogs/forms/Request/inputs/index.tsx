import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

import theme from "@theme/index";
import Button from "@components/UI/buttons";
import Title from "@components/dialogs/Title";
import Remove from "public/images/icons/remove.svg";
import DialogTextField from "@components/dialogs/inputs/TextField";

import * as Styled from "./RequestFormInputs.styled";

const RequestFormInputs = ({ control, errors, fields, remove }) => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("request");

  return (
    <>
      <Styled.SectionContainer>
        <Title title={t("contactInfo")} />
        <Styled.UserFields>
          <DialogTextField
            control={control}
            name="name"
            label={t("name")}
            placeholder={t("name")}
            fullWidth
            required
            error={errors.name}
          />
          <DialogTextField
            control={control}
            name="phoneNumber"
            label={t("phone")}
            placeholder={t("phone")}
            fullWidth
            required
            error={errors.phoneNumber}
          />
          <DialogTextField
            control={control}
            name="email"
            label={t("email")}
            placeholder={t("email")}
            fullWidth
            required
            error={errors.email}
          />
        </Styled.UserFields>
      </Styled.SectionContainer>
      <Styled.GridContainer>
        {fields.map((field, index) => (
          <Styled.Article key={index}>
            <Title title={`Товар ${index + 1}`} />
            <DialogTextField
              control={control}
              name={`articles[${index}].articleName`}
              label={t("articleLink")}
              fullWidth
              required
              error={!!errors.articles && errors.articles[index]?.articleName}
            />
            <Styled.ArticleComment>
              <DialogTextField
                control={control}
                name={`articles[${index}].comment`}
                label={t("articleComment")}
                placeholder={t("articleComment")}
                textArea
                fullWidth
              />
              {index > 0 && (
                <Button
                  style={{ flex: "none" }}
                  onClick={() => remove(index)}
                  form="circle"
                  type="button"
                  {...(matches && { size: "medium" })}
                >
                  <Remove />
                </Button>
              )}
            </Styled.ArticleComment>
          </Styled.Article>
        ))}
      </Styled.GridContainer>
    </>
  );
};

export default RequestFormInputs;
