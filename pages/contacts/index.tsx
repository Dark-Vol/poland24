import { NextPage } from "next";
import { useTranslation } from "next-i18next";

import Contacts from "@components/Contacts";
import PageLayout from "@components/Layout/Page";

type ContactsPageProps = {};

const ContactsPage: NextPage<ContactsPageProps> = () => {
  const { t } = useTranslation("navigation");

  return (
    <PageLayout title={t("contacts")}>
      <Contacts />
    </PageLayout>
  );
};

export default ContactsPage;
