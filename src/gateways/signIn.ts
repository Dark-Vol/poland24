import { auth, signInWithEmailAndPassword } from "@firebase";

export const login = async ({ email, password }) => {
  await signInWithEmailAndPassword(email, password);
};
