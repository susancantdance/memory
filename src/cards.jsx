/* eslint-disable react/prop-types */
// import { Shuffle } from "./shuffle.jsx";

export default function Cards({ imgArray, shuffle }) {
  const clicked = (key) => {
    let index = imgArray.indexOf(imgArray.find((img) => img.url == key));
    if (imgArray[index].clicked == false) {
      imgArray[index].clicked = true;
      shuffle(true);
    } else if (imgArray[index].clicked == true) {
      //reset counter and cats
      shuffle(false);
    } else {
      alert("uh oh somethings wrong");
    }
  };

  return (
    <>
      <div className="card-container">
        {imgArray.map((img) => {
          return (
            <div className="card" key={img.url}>
              <div className="photo">
                <img
                  src={img.url}
                  key={img.url}
                  onClick={() => clicked(img.url)}
                ></img>
              </div>
              <span className="breed">{img.breed}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Cards };
