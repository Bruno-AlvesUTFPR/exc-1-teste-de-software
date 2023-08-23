import { DetailedHTMLProps, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resultCalc, setResultCalc] = useState(0);

  const handleCalculate = (numberOne: any, numberTwo: any, calcType: any) => {
    if (calcType === "somar") {
      const calc = Number(numberOne) + Number(numberTwo);

      return setResultCalc(calc);
    } else if (calcType === "subtrair") {
      const calc = Number(numberOne) - Number(numberTwo);

      return setResultCalc(calc);
    } else if (calcType === "multiplicar") {
      const calc = Number(numberOne) * Number(numberTwo);

      return setResultCalc(calc);
    } else if (calcType === "dividir") {
      const calc = Number(numberOne) / Number(numberTwo);

      return setResultCalc(calc);
    }
  };

  const onSubmit = () => {
    const form = document.getElementById("calc-form-submit") || ({} as any);

    form.onsubmit = (data: any) => {
      const numberOne = data.target.elements[0].value;
      const numberTwo = data.target.elements[1].value;
      const calcType = data.target.elements[2].value;

      handleCalculate(numberOne, numberTwo, calcType);

      data.preventDefault();
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste de Software</h1>
      </header>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 360,
          gap: 16,
          width: "auto",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          margin: "80px auto",
        }}
      >
        <form
          id="calc-form-submit"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <input id="numberOne" type="number" name="numberOne" />
          <input id="numberOne" type="number" name="numberTwo" />

          <select id="calcType" name="calcType">
            <option value="somar">somar</option>
            <option value="subtrair">subtrair</option>
            <option value="multiplicar">multiplicar</option>
            <option value="dividir">dividir</option>
          </select>

          <button type="submit" onClick={onSubmit}>
            calcular
          </button>
        </form>

        <h1>Resultado: {resultCalc}</h1>
      </main>
    </div>
  );
}

export default App;
