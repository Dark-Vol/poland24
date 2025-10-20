import {
  collection,
  doc,
  addDoc,
  getDocs,
} from "@firebase";
import { filterEmptyParam } from "@common/utils/filterEmpryParams";
import { getCookie } from "cookies-next";

export const createOrder = async (orderData) => {
  const userId = getCookie("userId");
  const ordersCollection = collection("orders");
  const ordersSnapshot = await getDocs(ordersCollection);
  const ordersCount = ordersSnapshot.size;

  await addDoc(ordersCollection, {
    ...filterEmptyParam(orderData),
    orderNumber: +ordersCount + 1,
    status: "inProgress",
    userId,
    createdDate: new Date().valueOf(),
  });
};
