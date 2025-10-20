import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import { collection, getDocs, query, where } from "@firebase";

import type Order from "@entities/order";
import Error from "@components/Error";
import Orders from "@components/Orders";
import UserPageLayout from "@components/Layout/UserPage";

type OrdersPageProps = {
  ordersData: Order[];
  errorCode: number;
};

const OrdersPage: NextPage<OrdersPageProps> = ({ ordersData, errorCode }) => {
  const { t } = useTranslation("header");

  return (
    <>
      {errorCode ? (
        <Error statusCode={errorCode} />
      ) : (
        <UserPageLayout title={t("myOrders")}>
          <Orders ordersData={ordersData} />
        </UserPageLayout>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.req.cookies.userId as string;
  if (!userId) return { props: { errorCode: 401 } };

  try {
    const ordersRef = collection("orders");
    const q = query(ordersRef, where("userId", "==", userId));
    const ordersSnapshot = await getDocs(q);

    const ordersData: Order[] = [];

    ordersSnapshot.forEach((doc) => {
      ordersData.push(doc.data() as Order);
    });

    return {
      props: {
        ordersData,
      },
    };
  } catch (error) {
    return {
      props: { errorCode: error?.status },
    };
  }
};

export default OrdersPage;
