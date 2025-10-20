import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import {
  CollectionReference,
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "@firebase";

import type Store from "@entities/store";
import Shops from "@components/Shops";
import PageLayout from "@components/Layout/Page";
import { ArrayParam, decodeQueryParams } from "serialize-query-params";

type ShopsPageProps = {
  shopsData: Store[];
};

const ShopsPage: NextPage<ShopsPageProps> = ({ shopsData }) => {
  const { t } = useTranslation("navigation");

  return (
    <PageLayout title={t("shops")}>
      <Shops shopsData={shopsData} />
    </PageLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  const shopsRef = collection("shops");

  const { country, category } = decodeQueryParams(
    { country: ArrayParam, category: ArrayParam },
    ctx.query || {}
  );

  let shopsQuery: CollectionReference<DocumentData, DocumentData> = shopsRef;

  if (country?.length) {
    //@ts-ignore
    shopsQuery = query(shopsQuery, where("country", "in", country));
  }

  if (category?.length) {
    //@ts-ignore
    shopsQuery = query(
      shopsQuery,
      where("categories", "array-contains-any", category)
    );
  }

  const shopsSnapshot = await getDocs(shopsQuery);

  const shopsData = [];

  shopsSnapshot.forEach((doc) => {
    shopsData.push(doc.data());
  });

  return {
    props: {
      shopsData,
    },
  };
};

export default ShopsPage;
