const songs = [
  {
    title: "Die, die my darling",
    id: 1,
    band: "Misfits",
    genre: "Horror Punk",
    duration: 100,
    year: 1986,
    wasAHit: false,
  },
  {
    title: "Devuélveme a mi chica",
    id: 2,
    band: "Hombres G",
    genre: "Pop",
    duration: 240,
    year: 1985,
    wasAHit: true,
  },
  {
    title: "Esto es un atraco",
    id: 3,
    band: "Burning",
    genre: "Rock n roll",
    duration: 230,
    year: 1987,
    wasAHit: false,
  },
  {
    title: "Dispárame",
    id: 4,
    band: "Los Zigarros",
    genre: "rock n roll",
    duration: 260,
    year: 2016,
    wasAHit: true,
  },
  {
    title: "Infinito",
    id: 5,
    band: "Bunbury",
    genre: "Rock de cantautor",
    duration: 240,
    year: 2013,
    wasAHit: false,
  },
];

const addSongToList = (song) => {
  songs.push(song);
};

const removeSongFromListByTitle = (titleSong) => {
  const songTitles = songs.map((song) => song.title);
  const songsTitlesPosition = songTitles.indexOf(titleSong);
  songs.splice(songsTitlesPosition, 1);
  return songs;
};
