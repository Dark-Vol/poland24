import { NextPage } from "next";

import Faq from "@components/Faq";
import PageLayout from "@components/Layout/Page";

const FaqPage: NextPage = () => {
  return (
    <PageLayout title="FAQ">
      <Faq />
    </PageLayout>
  );
};

export default FaqPage;
