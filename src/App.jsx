import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  let refresh = false;
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((pics) => {
        return pics.json();
      })
      .then((data) => {
        setImages(data.map((img) => img.url));
      });
  }, [refresh]);

  console.log(images[1]);
  return (
    <>
      <h1>HELLO {images[0]}</h1>
      <img src={images[0]} />
      <img src={images[1]} />
      <img src={images[2]} />
    </>
  );
}

export default App;
