import { useState } from "react";
import { useEffect } from "react";
import { Shuffle } from "./shuffle.jsx";
import { Cards } from "./cards.jsx";
import { Score } from "./score.jsx";
import "./style.css";

function App() {
  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(0);
  const [bestScore, setScore] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_1RXeoaDwML2loOXZ2rvQ0gRFX9ClnhtcZg4X5TGLEhKjW3NAphLwXeZaT2OfEvn3"
    )
      .then((pics) => {
        return pics.json();
      })
      .then((data) => {
        setImages(
          data.map((img) => ({
            url: img.url,
            breed: img.breeds[0].name,
            clicked: false,
          }))
        );
      });
    // return () => {
    //   refresh = false;
    // };
  }, []);

  console.log(images);

  const clearKitties = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].clicked = false;
    }
  };

  const toggleShuffle = (stillPlaying) => {
    let newArray = images.slice();

    if (stillPlaying == true && counter < 9) {
      setCounter(counter + 1);
      if (counter + 1 > bestScore) setScore(counter + 1);
    } else if (stillPlaying == false) {
      setCounter(0);
      alert("you lose");
      clearKitties(newArray);
    } else if (stillPlaying == true && counter == 9) {
      setScore(10);
      alert("YOU GOT EM ALL!");
      setCounter(0);
      clearKitties(newArray);
    }

    Shuffle(newArray);
    setImages(newArray);
  };

  // let newImages = images.slice();

  return (
    <>
      <Score counter={counter} bestScore={bestScore} />
      {/* <button onClick={toggleShuffle}>Shuffle Me</button> */}
      <Cards imgArray={images} shuffle={toggleShuffle} />
    </>
  );
}

export default App;
