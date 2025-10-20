import { 
  signInWithPopup, 
  FacebookAuthProvider,
  collection,
  doc,
  query,
  setDoc,
  where,
  getDocs
} from "@firebase";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/router";

export const useSignInWithFacebook = (onClose: () => void) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    const provider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(provider);
      const user = result.user;
      const [firstName, lastName] = user.displayName?.split(" ") || ['', ''];

      const userRef = doc(`users/${user.uid}`);

      const usersQuery = query(collection("users"), where("id", "==", user.uid));
      const snap = await getDocs(usersQuery);

      if (snap.empty) {
        await setDoc(userRef, {
          id: user.uid,
          email: user.email,
          firstName,
          lastName,
          phone: user.phoneNumber || '',
          role: 'user',
          createdDate: new Date().valueOf(),
        });
      }
      
      setLoading(false);
      enqueueSnackbar("Login!", { variant: "success" });
      onClose();
      router.replace(router.asPath);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
      setLoading(false);
    }
  };

  return { loading, handleSignIn };
};
