import type { Article } from "@entities/order";

export const getInitialtArticle = (): Article => {
  const rate = JSON.parse(localStorage.getItem("rate"));

  return {
    name: "",
    link: "",
    count: 1,
    price: 0,
    deliveryPrice: 0,
    isUsed: false,
    description: "",
    currency: "zł",
    rate: rate?.pln || 0,
  };
};
