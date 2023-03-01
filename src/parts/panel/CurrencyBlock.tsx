import { useContext, useState } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import CurrencyForm from "./CurrencyForm";
import Edit from "@mui/icons-material/Edit";
import { CurrencyDataInterface } from "../../interfaces/CurrencyDataInterface";
interface CurrencyBlockProps {
  id?: string;
  value: string;
  isEditable?: boolean;
  type?: "buy" | "sale";
}

export default function CurrencyBlock({
  id,
  value,
  type,
  isEditable,
}: CurrencyBlockProps) {
  const { setCurrencyData } = useContext(CurrencyContext);
  const [edit, setEdit] = useState<boolean>(false);

  const reset = () => {
    setEdit(false);
  };

  const submit = (data: string) => {
    if (type === undefined) return;
    setCurrencyData((prev: CurrencyDataInterface[]) => {
      return prev.map((el: CurrencyDataInterface) => {
        if (el.id === id) {
          el[type] = data;
        }
        return el;
      });
    });
    setEdit(false);
  };

  return (
    <div key={id + value} className='currency-block'>
      {edit ? (
        <CurrencyForm reset={reset} submit={submit} val={value} />
      ) : (
        value
      )}
      {isEditable && (
        <span className={edit ? "none" : "hint"} onClick={() => setEdit(true)}>
          <Edit color='primary' fontSize='inherit' />
        </span>
      )}
    </div>
  );
}
