import { Button, TextField } from "@mui/material";
import { SetStateAction, useState } from "react";
import percentCompare from "../../helpers/percentCompare";

interface CurrencyFormProps {
  submit: (data: string) => void;
  reset: () => void;
  val: string;
}

export default function CurrencyForm({
  submit,
  reset,
  val,
}: CurrencyFormProps) {
  const [value, setValue] = useState<string>(val);
  const [error, setError] = useState<string>("");
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
    setError("");
  };

  const validateAndSubmit = () => {
    percentCompare(val, value)
      ? submit(value)
      : setError("Value should be +-10% from current");
  };

  return (
    <div className='currency-form'>
      <div>
        {error && <p className='error'>{error}</p>}
        <TextField variant='outlined' onChange={handleChange} value={value} />

        <div className='currency-btns'>
          <div>
            <Button variant='outlined' size='medium' onClick={reset}>
              Reset
            </Button>
          </div>
          <div>
            <Button
              size='medium'
              variant='contained'
              color='success'
              onClick={validateAndSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
