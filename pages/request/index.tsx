import { NextPage } from "next";

import Request from "@components/Request";
import PageLayout from "@components/Layout/Page";

const RequestPage: NextPage = () => {
  return (
    <PageLayout>
      <Request />
    </PageLayout>
  );
};

export default RequestPage;
