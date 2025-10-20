import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { collection, getDocs } from "@firebase";

import type Request from "@entities/request";
import AdminTable from "@components/admin/Table";
import UserPageLayout from "@components/Layout/UserPage";
import { requestsConfig } from "@common/configs/admin/cells/requests";

type RequestsPageProps = {
  requestsData: Request[];
};

const RequestsPage: NextPage<RequestsPageProps> = ({ requestsData }) => {
  const { t } = useTranslation("header");

  return (
    <UserPageLayout title={t("requests")}>
      <AdminTable<Request> data={requestsData} cellsConfig={requestsConfig} />
    </UserPageLayout>
  );
};

export const getServerSideProps = async () => {
  const requestsRef = collection("requests");
  const requestsSnapshot = await getDocs(requestsRef);

  const requestsData: Request[] = [];

  requestsSnapshot.forEach((doc) => {
    requestsData.push(doc.data() as Request);
  });

  return {
    props: {
      requestsData,
    },
  };
};

export default RequestsPage;
