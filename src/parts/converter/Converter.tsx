import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { CurrencyDataInterface } from "../../interfaces/CurrencyDataInterface";
import ConverterBlock from "./ConverterBlock";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import "./styles.scss";

export default function Converter() {
  const { currencyData, swap } = useContext(CurrencyContext);
  const currencyList = [
    ...currencyData.map((el: CurrencyDataInterface) => el.ccy),
    "UAH",
  ];

  return (
    <div className='converter'>
      <ConverterBlock list={currencyList} type='from' />
      <div className='converter-swap'>
        <SwapVertIcon onClick={swap} />
      </div>
      <ConverterBlock list={currencyList} type='to' />
    </div>
  );
}
