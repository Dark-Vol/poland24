export const calculateTotalCost = (
  costOfGoods = 0,
  shippingCost = 0,
  hasInvoice = false,
  quantity = 1
): number => {
  let commission = 0;
  if (!quantity || !costOfGoods) return 0;

  if (hasInvoice && costOfGoods >= 250) {
    commission = costOfGoods * 0.0638;
  } else if (costOfGoods >= 250) {
    commission = costOfGoods * 0.1638;
  } else {
    commission = 50;
  }

  const totalCostInUAH = costOfGoods * quantity + shippingCost + commission;

  return totalCostInUAH;
};
