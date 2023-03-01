import { NativeSelect, TextField } from "@mui/material";
import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";

interface ConverterBlockProps {
  list: string[];
  type: "from" | "to";
}

export default function ConverterBlock(data: ConverterBlockProps) {
  const { list, type } = data;
  const { convertOptions, setConvertOptions } = useContext(CurrencyContext);

  const handleChange = (e: any) => {
    if (+e.target.value < 0) {
      e.target.value = 0;
    }
    setConvertOptions((prev: any) => {
      return { ...prev, [type]: { ...prev[type], value: e.target.value } };
    });
  };

  const handleSelect = (e: any) => {
    setConvertOptions((prev: any) => {
      return { ...prev, [type]: { ...prev[type], ccy: e.target.value } };
    });
  };

  const prevent = (e: any) => {
    if (e.keyCode === 189 || e.keyCode === 69) {
      e.preventDefault();
    }
  };

  return (
    <div className='converter-block'>
      <TextField
        type='number'
        variant='standard'
        onChange={handleChange}
        value={convertOptions[type].value}
        onKeyDown={prevent}
        disabled={type === "to"}
      />

      <NativeSelect
        variant='standard'
        value={convertOptions[type].ccy}
        onChange={handleSelect}
      >
        <option>none</option>
        {list?.map((el: string, index) => (
          <option value={el} key={el + index}>
            {el}
          </option>
        ))}
      </NativeSelect>
    </div>
  );
}
