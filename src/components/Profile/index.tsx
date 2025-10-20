import type User from "@entities/user";
import UserForm from "@components/dialogs/forms/User";

import * as Styled from "./Profile.styled";

type ProfileProps = {
  userData: User;
};

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  return (
    <Styled.Content>
      <UserForm userData={userData} />
    </Styled.Content>
  );
};

export default Profile;
