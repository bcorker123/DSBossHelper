import "../App.css";
import { useEffect, useState } from "react";

function App() {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    fetch("/bosses")
      .then((r) => r.json())
      .then((data) => setBosses(data));
  }, []);

  const bossesMap = bosses.map((boss) => {
    return (
      <div key={boss.id}>
        <div>
          <strong>{boss.name}</strong>
        </div>
        <div>
          <em>{boss.location}</em>
        </div>
        <div style={{ color: "red" }}>{boss.health}HP</div>
      </div>
    );
  });

  return (
    <div className="App">
      <div>{bossesMap}</div>
    </div>
  );
}

export default App;
