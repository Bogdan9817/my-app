import { CurrencyDataInterface } from "../../interfaces/CurrencyDataInterface";
import CurrencyBlock from "./CurrencyBlock";

interface CurrencyRowProps extends CurrencyDataInterface {
  isEditable: boolean;
}

export default function CurrencyRow(data: CurrencyRowProps) {
  const { ccy, base_ccy, buy, sale, id, isEditable } = data;
  return (
    <div className='currency-row'>
      <CurrencyBlock value={`${ccy}/${base_ccy}`} />
      <CurrencyBlock id={id} value={buy} type='buy' isEditable={isEditable} />
      <CurrencyBlock id={id} value={sale} type='sale' isEditable={isEditable} />
    </div>
  );
}
