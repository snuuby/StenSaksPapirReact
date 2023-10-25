import reactLogo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `Game`;
    navigate(path);
  };
  return (
    <>
      <h1>Sten-Saks-Papir</h1>
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Lavet med React + Vite</h2>
      <h3>På CodeSandbox!</h3>
      <button onClick={routeChange}>Begynd!</button>
      <p className="read-the-docs">
        Lavet af Jakob Østenkjær Hansen som begynder React selvstudie projekt
      </p>
    </>
  );
}
