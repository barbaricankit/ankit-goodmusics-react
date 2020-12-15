import React, { useState } from "react";
import "./App.css";
const music = {
  Romance: [
    {
      song: "Tum hi Ho",
      rating: "4.5/5"
    },
    {
      song: "Paani da Rang",
      rating: "4/5"
    },
    {
      song: "Mitti di Khushboo",
      rating: "3.5/5"
    }
  ],
  Rock: [
    {
      song: "Rock On",
      rating: "4/5"
    }
  ],
  Party: [
    {
      song: "Sunny Sunny",
      rating: "4/5"
    },
    {
      song: "Badtameez Dil",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const musicArray = [];
  //const [abc, setabc] = useState([]);
  const [musicDetails, setMusicDetails] = useState([]);
  //const [ratingDetails, setRatingDetails] = useState([]);

  const details = (event) => {
    let genre = event.target.innerText;

    music[genre].map((item) => {
      //setMusicDetails(musicDetails.concat(item.song));
      //setabc(arr=>[...arr,item.song=item.rating])

      musicArray.push(item.song + "-" + item.rating);
      return setMusicDetails(musicArray);

      // setMusicDetails(item.song);
      //setRatingDetails(item.rating);
      // return setMusicDetails((arr) => [...arr, item.song]);
    });
    // console.log(musicArray);
  };
  return (
    <div className="App">
      <h1>good Musics</h1>
      <p>Checkout my favorite musics. Select a genre to get started</p>
      <ul>
        <li onClick={details} className="inline-list">
          Romance
        </li>
        <li onClick={details} className="inline-list">
          Rock
        </li>
        <li onClick={details} className="inline-list">
          Party
        </li>
      </ul>
      <hr />

      {
        //const list=Object.keys(musicDetails)
        <ul>
          <li className="list-nobullets">
            {musicDetails.map((item, index) => {
              let songRating = item.split("-");
              // return songRating.map((item1) => {
              return (
                <li id="list-data">
                  <br />
                  {songRating.map((item1) => {
                    return item1 + " ";
                  })}
                </li>
              );
              // });
            })}
          </li>
        </ul>
      }
      {<ul></ul>}
    </div>
  );
}
