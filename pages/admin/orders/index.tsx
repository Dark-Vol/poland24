import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { collection, getDocs } from "@firebase";

import type Order from "@entities/order";
import AdminTable from "@components/admin/Table";
import UserPageLayout from "@components/Layout/UserPage";
import { ordersConfig } from "@common/configs/admin/cells/orders";

type OrdersPageProps = {
  ordersData: Order[];
};

const OrdersPage: NextPage<OrdersPageProps> = ({ ordersData }) => {
  const { t } = useTranslation("header");

  return (
    <UserPageLayout title={t("orders")}>
      <AdminTable<Order> data={ordersData} cellsConfig={ordersConfig} />
    </UserPageLayout>
  );
};

export const getServerSideProps = async () => {
  const ordersRef = collection("orders");
  const ordersSnapshot = await getDocs(ordersRef);

  const ordersData: Order[] = [];

  ordersSnapshot.forEach((doc) => {
    ordersData.push(doc.data() as Order);
  });

  return {
    props: {
      ordersData,
    },
  };
};

export default OrdersPage;
