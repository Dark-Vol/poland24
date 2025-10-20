import { doc, setDoc } from "@firebase";

export const editOrder = async (orderData) => {
  await setDoc(doc(`orders/${orderData.id}`), orderData);
};
