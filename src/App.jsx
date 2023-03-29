import { useEffect, useState } from "react";
import { fetchAdvice } from "./utils/http";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import Dice from "./images/icon-dice.svg";
import "./App.css";
import Spinner from "./spinner/spinner";

function App() {
  const [advice, setAdvice] = useState({
    id: "",
    advice: "",
  });
  const [loading, setLoading] = useState(true);
  const [reloadAdvice, setRealoadAdvice] = useState(false);

  useEffect(() => {
    setLoading(true);
      setTimeout(async () => {
        const data = await fetchAdvice();
        if (data) setAdvice({ id: data.slip.id, advice: data.slip.advice }); setLoading(false);
      }, 700)
  }, [reloadAdvice]);

  return (
    <main className="main-container">
      <div className="card-container">
        <div className="header-container">
          <h3 className="header">Advice #{advice.id}</h3>
        </div>
        <div className="advice-container">
          {loading === true && <div className="spinner"><Spinner /></div> }
          {loading === false && <p>"{advice.advice}"</p>}
        </div>
        <div className="button-container">
          <img className="divider" src={dividerDesktop} alt="divider" />
        </div>
        <div className="dice-btn-container" onClick={() => setRealoadAdvice(!reloadAdvice)}>
        <span className="dice-container-over"></span>
          <span className="dice-container">
            <img className="dice" src={Dice} alt="dice" />
          </span>
         
        </div>
      </div>
    </main>
  );
}

export default App;
