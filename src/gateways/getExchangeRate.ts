import axios from "axios";

export const getExchangeRate = async () => {
  const { data } = await axios.get(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );

  return data;
};
