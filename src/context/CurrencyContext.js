import { useEffect, useState } from "react";
import convertTo from "../helpers/convertTo";
import React from "react";

export const CurrencyContext = React.createContext();

export default function CurrencyContextProvider({ children }) {
  const [currencyData, setCurrencyData] = useState([]);
  const [convertOptions, setConvertOptions] = useState({
    from: {
      ccy: "",
      value: "",
    },
    to: {
      ccy: "",
      value: "",
    },
  });

  const convertObject = currencyData.reduce((acc, cur) => {
    return { ...acc, [cur.ccy]: { buy: cur.buy, sale: cur.sale } };
  }, {});

  const convert = convertTo.bind(convertObject);

  const autoConvert = () => {
    const from = convertOptions.from.ccy;
    const to = convertOptions.to.ccy;
    const value = convertOptions.from.value;
    const res = convert(from, to, value);

    setConvertOptions({
      ...convertOptions,
      to: { ...convertOptions.to, value: res || "" },
    });
  };

  const swap = () => {
    const from = convertOptions.to.ccy;
    const to = convertOptions.from.ccy;
    const value = convertOptions.to.value;
    setConvertOptions({
      from: {
        ccy: from,
        value: value,
      },
      to: {
        ccy: to,
        value: "",
      },
    });
  };

  useEffect(() => {
    autoConvert();
  }, [convertOptions.from, convertOptions.to.ccy]);

  return (
    <CurrencyContext.Provider
      value={{
        currencyData,
        setCurrencyData,
        convertOptions,
        setConvertOptions,
        swap,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
