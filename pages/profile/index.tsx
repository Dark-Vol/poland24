import { useTranslation } from "next-i18next";
import { doc, getDoc } from "@firebase";
import { GetServerSideProps, NextPage } from "next";

import type User from "@entities/user";
import Error from "@components/Error";
import Profile from "@components/Profile";
import UserPageLayout from "@components/Layout/UserPage";

type ProfilePageProps = {
  userData: User;
  errorCode: number;
};

const ProfilePage: NextPage<ProfilePageProps> = ({ userData, errorCode }) => {
  const { t } = useTranslation("header");

  return (
    <>
      {errorCode ? (
        <Error statusCode={errorCode} />
      ) : (
        <UserPageLayout title={t("editProfile")}>
          <Profile userData={userData} />
        </UserPageLayout>
      )}
    </>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.req.cookies.userId as string;
  if (!userId) return { props: { errorCode: 401 } };

  try {
    const usersRef = doc(`users/${userId}`);
    const userData: User | any = await getDoc(usersRef).then((res) => {
      return res.data();
    });

    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    return {
      props: { errorCode: error?.status },
    };
  }
};
