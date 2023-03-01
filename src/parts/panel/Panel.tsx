import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { CurrencyDataInterface } from "../../interfaces/CurrencyDataInterface";
import CurrencyRow from "./CurrencyRow";
import "./styles.scss";

export default function Panel() {
  const { currencyData } = useContext(CurrencyContext);

  const info = {
    ccy: "Currency",
    base_ccy: "Current Date",
    buy: "Buy",
    sale: "Sell",
    id: "randomID",
    isEditable: false,
  };

  return (
    <div className='panel'>
      <CurrencyRow {...info} />
      {currencyData.map((el: CurrencyDataInterface) => {
        return <CurrencyRow {...el} isEditable={true} key={el.id} />;
      })}
    </div>
  );
}
