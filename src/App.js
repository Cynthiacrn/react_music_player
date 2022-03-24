import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Vamos A La Playa",
      artist: "Loona",
      cover: "./img/1.jpg",
      source: "./music/vamos_a_la_playa.mp3",
      url: "https://www.youtube.com/watch?v=X-77txuiVXs",
      liked: false,
    },
    {
      title: "Wavin' Flag",
      artist: "K'NAAN",
      cover: "./img/2.jpg",
      source: "./music/wavin_flag.mp3",
      url: "https://www.youtube.com/watch?v=WTJSt4wP2ME",
      liked: false,
    },
    {
      title: "Waka Waka",
      artist: "Shakira",
      cover: "./img/3.jpg",
      source: "./music/waka_waka.mp3",
      url: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
      liked: false,
    },
    {
      title: "Devenire",
      artist: "Ludovico Einaudi",
      cover: "./img/4.jpg",
      source: "./music/divenir.mp3",
      url: "https://www.youtube.com/watch?v=b8SkX9CSJQo",
      liked: false,
    },
    {
      title: "Where Is The Love ?",
      artist: "Black Eyed Peas",
      cover: "./img/5.jpg",
      source: "./music/where_is_the_love.mp3",
      url: "https://www.youtube.com/watch?v=WpYeekQkAdc",
      liked: false,
    },
    {
      title: "Infinity",
      artist: "Jaymes Young",
      cover: "./img/6.jpg",
      source: "./music/infinity.mp3",
      url: "https://www.youtube.com/watch?v=FXdiTWLVIZo",
      liked: false,
    },
    {
      title: "She Knows",
      artist: "J. Cole",
      cover: "./img/7.jpg",
      source: "./music/she_knows.mp3",
      url: "https://www.youtube.com/watch?v=VpNaZHs3QM0",
      liked: false,
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.lenght - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
