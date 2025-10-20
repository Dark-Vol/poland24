import { NextPage } from "next";
import { useTranslation } from "next-i18next";

import About from "@components/About";
import PageLayout from "@components/Layout/Page";

const AboutPage: NextPage = () => {
  const { t } = useTranslation("about");

  return (
    <PageLayout title={t("title")}>
      <About />
    </PageLayout>
  );
};

export default AboutPage;
