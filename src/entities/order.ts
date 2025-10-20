export type Article = {
  name: string;
  count: number;
  deliveryPrice: number;
  description: string;
  link: string;
  price: number;
  isUsed: boolean;
  currency: string;
  rate: number;
};

type Order = {
  id: string;
  userId: string;
  post: string;
  phone: number;
  isViber: boolean;
  isTelegram: boolean;
  isEmail: boolean;
  isCall: boolean;
  isLicense: boolean;
  fullName: string;
  email: string;
  createdDate: number;
  comment: string;
  articles: Article[];
  status: Status;
  orderNumber: number;
  reservedPost: string;
};

export enum Status {
  IN_PROGRESS = "inProgress",
  SUCCESS = "success",
  CANCELLED = "cancelled",
  FAILED = "failed",
}

export default Order;
