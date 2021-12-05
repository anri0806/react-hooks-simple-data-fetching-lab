// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((dogData) => setData(dogData.message));
  }, []);

  if (!data) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <img src={data} alt="A Random Dog" />
    </div>
  );
}

export default App;
