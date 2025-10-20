import { setUserInLocalStorage } from "@common/utils/setUserInLocalStorage";
import { 
  createUserWithEmailAndPassword,
  updateProfile,
  doc, 
  setDoc 
} from "@firebase";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

const useCreateUser = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const saveUser = async ({ email, password, fullName, phone, photoURL }) => {
    setLoading(true);

    try {
      const [firstName, lastName] = fullName.split(" ");
      const userCredential = await createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      const userRef = doc(`users/${user.uid}`);
      await updateProfile({ displayName: fullName });

      const docUser = {
        id: user.uid,
        email,
        firstName,
        lastName,
        phone,
        role: 'user',
        ...(photoURL && { photoURL }),
        createdDate: new Date().valueOf(),
      };

      await setDoc(userRef, docUser);
      setUserInLocalStorage(docUser);

      router.replace(router.asPath);
      enqueueSnackbar("User added!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return { saveUser, isLoading };
};

export default useCreateUser;
