import { useNavigate } from "react-router-dom";

export function Game() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={(e) => navigate("/home")}>Forside</button>
      <h1>Hello</h1>
    </>
  );
}
