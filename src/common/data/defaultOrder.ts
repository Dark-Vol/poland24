import type Order from "@entities/order";
import type { Intersect } from "src/types";
import { getInitialtArticle } from "./defaultArticle";

export type OerderFields = Pick<
  Order,
  | "isEmail"
  | "isViber"
  | "isTelegram"
  | "fullName"
  | "phone"
  | "email"
  | "post"
  | "reservedPost"
  | "comment"
  | "isCall"
  | "isLicense"
  | "articles"
>;

export const orderInitailValues = {
  isEmail: false,
  isViber: false,
  isTelegram: false,
  fullName: "",
  phone: '',
  email: "",
  post: "",
  reservedPost: "",
  comment: "",
  isCall: false,
  isLicense: true,
  articles: [],
} as const;

export type OrderInitialValues = Intersect<
  OerderFields,
  typeof orderInitailValues
>;

const getPost = (city = "", post = "") => {
  if (!city && !post) return;

  return `${city} ${post}`.trim();
};

export const getInitialValue = (
  orderData?: Partial<Order>
): OrderInitialValues => {
  const { email, firstName, lastName, phone, city, post } = JSON.parse(
    localStorage.getItem("userData")
  );

  return {
    ...orderData,
    isEmail: orderData?.isEmail || orderInitailValues.isEmail,
    isViber: orderData?.isViber || orderInitailValues.isViber,
    isTelegram: orderData?.isTelegram || orderInitailValues.isTelegram,
    fullName: orderData
      ? orderData?.fullName || orderInitailValues.fullName
      : `${firstName} ${lastName}`,
    phone: orderData?.phone || phone || orderInitailValues.phone,
    email: orderData?.email || email || orderInitailValues.email,
    post: orderData?.post || getPost(city, post) || orderInitailValues.post,
    reservedPost: orderData?.reservedPost || orderInitailValues.reservedPost,
    comment: orderData?.comment || orderInitailValues.comment,
    isCall: orderData?.isCall || orderInitailValues.isCall,
    isLicense: orderData?.isLicense || orderInitailValues.isLicense,
    articles: orderData?.articles || [getInitialtArticle()],
  };
};
