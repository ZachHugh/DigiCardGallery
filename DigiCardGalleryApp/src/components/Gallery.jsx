import React from 'react'

let requestOptions = "";
let result = "";
let error = "";
let response = "";

fetch("https://digimoncard.io/api-public/getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

console.log(result);


function Gallery() {
  return (
    <div>Gallery</div>
  )
}

export default Gallery