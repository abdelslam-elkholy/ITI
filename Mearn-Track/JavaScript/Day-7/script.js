"use strict";

const artistsList = document.getElementById("artist");

const openArtistPage = () => {
  const selectedartist = artistsList.value;

  if (selectedartist !== "") {
    console.log(selectedartist);
    window.open(selectedartist, "_blank");
  }
};

const getArtistsData = () => {
  const choosenBand = document.getElementById("band").value;

  const xhr = new XMLHttpRequest();
  xhr.open("Get", "./rockbands.json");

  xhr.onload = () => {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.response);
      console.log(data);

      let artists = data[choosenBand];
      console.log(artists);

      artistsList.innerHTML = "";
      artists.map((artist) => {
        artistsList.innerHTML += `<option  value=${artist.value}>${artist.name}</option>`;
      });
    }
  };

  xhr.send();
};
