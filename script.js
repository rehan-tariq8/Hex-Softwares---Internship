const songs = [
  {
    title: "Baby Calm Down",
    artist: "VOVI Music",
    duration: "11:55",
    src: "Songs/Baby Calm Down.mpeg",
    cover: "Images/Baby Calm Down.webp",
  },

  {
    title: "Bamb Agya",
    artist: "Gur Sidhu, Jasmine Sandlas, Kaptaan",
    duration: "3:29",
    src: "Songs/Bamb Agya.mpeg",
    cover: "Images/Bamb Agya.jpg",
  },

  {
    title: "Believer",
    artist: "Imagine Dragons",
    duration: "3:24",
    src: "Songs/Believer.mpeg",
    cover: "Images/Believer.jpg",
  },

  {
    title: "Bilionera",
    artist: "Otilia, Sak Noel",
    duration: "3:05",
    src: "Songs/Bilionera.mpeg",
    cover: "Images/Bilionera.jpg",
  },

  {
    title: "California Love",
    artist: "Cheema Y, Gur Sidhu",
    duration: "2:37",
    src: "Songs/California Love.mpeg",
    cover: "Images/California Love.jpeg",
  },

  {
    title: "Dhurandar- Title Track",
    artist: "Shashwat Sachdev, Hanumankind, Jasmine Sandlas",
    duration: "2:39",
    src: "Songs/Dhurandar- Title Track.mpeg",
    cover: "Images/Dhurandar- Title Track.jpg",
  },

  {
    title: "For A Reason",
    artist: "Karan Aujla, Ikky",
    duration: "2:40",
    src: "Songs/For A Reason.mpeg",
    cover: "Images/For A Reason.jpg",
  },

  {
    title: "Gehra Hua",
    artist: "Saregama Music",
    duration: "3:51",
    src: "Songs/Gehra Hua.mpeg",
    cover: "Images/Gehra Hua.jpg",
  },

  {
    title: "Hath Fadke",
    artist: "AKE, Sidhu Moosewala",
    duration: "3:42",
    src: "Songs/Hath Fadke.mpeg",
    cover: "Images/Hath Fadke.jpg",
  },

  {
    title: "Hellallallo",
    artist: "A.R. Rehman, Rakshita Suresh",
    duration: "3:56",
    src: "Songs/Hellallallo.mpeg",
    cover: "Images/Hellallallo.jpeg",
  },

  {
    title: "Jhoome Jo Pathaan",
    artist: "Arijit Singh",
    duration: "3:22",
    src: "Songs/Jhoome Jo Pathaan.mpeg",
    cover: "Images/Jhoome Jo Pathaan.jpg",
  },

  {
    title: "Lehnga",
    artist: "Diljit Dosanjh",
    duration: "2:47",
    src: "Songs/Lehnga.mpeg",
    cover: "Images/Lehnga.jpg",
  },

  {
    title: "Lut Le Gya",
    artist: "Saregama Music",
    duration: "2:04",
    src: "Songs/Lut Le Gya.mpeg",
    cover: "Images/Lut Le Gya.jpeg",
  },

  {
    title: "Mercy",
    artist: "Badshah",
    duration: "2:56",
    src: "Songs/Mercy.mpeg",
    cover: "Images/Mercy.jpeg",
  },

  {
    title: "Na Ja",
    artist: "Pav Dharia",
    duration: "4:10",
    src: "Songs/Na Ja.mpeg",
    cover: "Images/Na Ja.jpeg",
  },

  {
    title: "Naal Nachna",
    artist: "Afsana Khan",
    duration: "2:05",
    src: "Songs/Naal Nachna.mpeg",
    cover: "Images/Naal Nachna.jpg",
  },

  {
    title: "Shararat",
    artist: "Madhubanti Bagchi",
    duration: "3:49",
    src: "Songs/Shararat.mpeg",
    cover: "Images/Shararat.jpg",
  },

  {
    title: "Wavy",
    artist: "Karan Aujla",
    duration: "2:40",
    src: "Songs/Wavy.mpeg",
    cover: "Images/Wavy.jpg",
  },
];

const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");

const cover = document.getElementById("cover");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTimeEl = document.getElementById("currentTime");

const durationEl = document.getElementById("duration");

let currentSong = 0;

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);

  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function loadSong(index) {
  const song = songs[index];

  cover.src = song.cover;

  songTitle.textContent = song.title;

  artist.textContent = song.artist;

  audio.src = song.src;

  progress.value = 0;

  currentTimeEl.textContent = "0:00";

  durationEl.textContent = "0:00";

  updatePlaylist();
}

function playSong() {
  audio.play();

  playBtn.innerHTML = '<i class="fas fa-pause"></i>';

  requestAnimationFrame(updateProgressSmooth);
}

function pauseSong() {
  audio.pause();

  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener("click", () => {
  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);

  playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong--;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSong(currentSong);

  playSong();
});

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);

  progress.value = 0;

  progress.style.background = "linear-gradient(to right,#FFD400 0%,#444 0%)";
});

function updateProgressSmooth() {
  if (!audio.paused && !audio.ended) {
    if (audio.duration) {
      const percentage = (audio.currentTime / audio.duration) * 100;

      progress.value = percentage;

      progress.style.background = `linear-gradient(
                to right,
                #FFD400 0%,
                #FFD400 ${percentage}%,
                #444 ${percentage}%,
                #444 100%
            )`;
    }

    currentTime.textContent = formatTime(audio.currentTime);

    duration.textContent = formatTime(audio.duration);

    requestAnimationFrame(updateProgressSmooth);
  }
}

progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});

volume.addEventListener("input", () => {
  audio.volume = volume.value / 100;
});

function createPlaylist() {
  playlist.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <div>
            <strong>${song.title}</strong><br>
            <small>${song.artist}</small>
        </div>

        <span>${song.duration}</span>
        `;

    li.addEventListener("click", () => {
      currentSong = index;

      loadSong(index);

      playSong();
    });

    playlist.appendChild(li);
  });

  updatePlaylist();
}

function updatePlaylist() {
  const items = document.querySelectorAll("#playlist li");

  items.forEach((item, index) => {
    item.classList.remove("active-song");

    if (index === currentSong) {
      item.classList.add("active-song");
    }
  });
}

audio.addEventListener("ended", () => {
  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);

  playSong();
});

audio.volume = 1;

loadSong(currentSong);
createPlaylist();
