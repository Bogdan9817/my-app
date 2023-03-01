import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "./context/CurrencyContext";
import Converter from "./parts/converter/Converter";
import Panel from "./parts/panel/Panel";

function App() {
  const { setCurrencyData, currencyData } = useContext(CurrencyContext);
  const [error, setError] = useState<null | string>(null);
  const loadData = async () => {
    const tries = localStorage.getItem("tries");
    if (tries && +tries === 5) {
      localStorage.setItem("tries", "0");
      return setError("Too much requests on SERVER");
    }
    const response = await axios.get("/p24api/pubinfo?json&exchange&coursid=5");
    const result = response.data.map((el: any) => {
      return { ...el, id: `${el.ccy}-to-${el.base_ccy}` };
    });
    localStorage.setItem("tries", `${tries ? +tries + 1 : 1}`);
    setCurrencyData(result);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='App'>
      <header>HEADER</header>
      {!!error && <div className='error-message'>{error}</div>}
      {currencyData && !!!error && (
        <>
          <Panel />
          <Converter />
        </>
      )}
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
