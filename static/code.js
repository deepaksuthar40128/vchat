let curser = document.getElementById("back")
let curser_img = document.getElementById("curser_img")
let disk_img = document.getElementById("disk_img")
let dot = document.getElementById("dot")
let audio_image_box = document.getElementById("songinfo")
let king = 0;
function play_stop() {
      if (king % 2 == 0) {
            console.log(king);
            curser_img.classList = "happy"
            disk_img.classList = "rotate_disk"
            king++;
            play_audio()
      }

      else {
            curser_img.classList -= "happy"
            disk_img.classList -= "rotate_disk"
            audio.pause()
            king++;
      }
}
let audio_dur = 0;
let song_index = 2;
let song_name = "audio_" + song_index + ".mp3"
function next_song() {
audio.pause()
      song_index++;
      song_name = "audio_" + song_index + ".mp3"
      console.log(song_name)
      audio = new Audio(song_name)
      audio.preload = "metadata"
      audio.onloadedmetadata = function () {
            audio_dur = audio.duration
      };
      play_audio()
}
var audio = new Audio(song_name)
audio.preload = "metadata"
audio.onloadedmetadata = function () {
      audio_dur = audio.duration
};
function play_audio() {
      audio.play();
      dot_tr(audio_dur)
}
function dot_tr(dura) {
      console.log(dura)
      dot.animate([
            { left: '-3px' },
            { left: '234px' }
      ], {
            duration: dura * 1000,
            fill: 'forwards'
      });
}


// const songs = [
//       {
//             name: "audio_1",
//             title: "song1",
//             artist: "parwezj",
//             image: "img1",
//       },
//       {
//             name: "audio_2",
//             title: "song2",
//             artist: "parwezuj",
//             image: "img2",
//       },
//       {
//             name: "audio_3",
//             title: "song3",
//             artist: "parwezh",
//             image: "img3",
//       },
//       {
//             name: "audio_4",
//             title: "song4",
//             artist: "parwez",
//             image: "img1",
//       },
// ];



// const play = document.getElementById("back");
// let isplaying = false;
// const img = document.querySelector("img");
// const music = document.querySelector("audio");

// const artist = document.getElementById("artist");
// const title = document.getElementById("title");
// let list = document.getElementById("items");


// let string = "";
// for (let i = 0; i < songs.length; i++) {
//       string += `
//   <li title="${songs[i].title}" class="hi">${songs[i].artist} - ${songs[i].title}</li>`;
// }
// list.innerHTML = string;

// let i = 0;
// let play_function = () => {
//       isplaying = true;
//       music.play();
//       play.classList.replace("fa-play", "fa-pause");
//       img.classList.add("anime");
// };
// let str = "";
// let k = 0;
// let temp = 0;
// let li = document.querySelector("li");
// li.addEventListener("click", () => {
//       str = li.title;
//       console.log(str);
//       for (let m = 0; m < songs.length; m++) {
//             if (songs[i].title == str) {
//                   temp = i;
//             }
//       }
//       loadsong(songs[temp]);
//       play_function();

//       str = "";
// });

// let pause_function = () => {
//       isplaying = false;
//       music.pause();
//       play.classList.replace("fa-pause", "fa-play");
//       img.classList.remove("anime");
// };

// play.addEventListener("click", () => {
//       if (isplaying == false) {
//             play_function();
//       } else {
//             pause_function();
//       }
// });

// let loadsong = (songs) => {
//       title.textContent = songs.title;
//       artist.textContent = songs.artist;
//       img.src = "/image/" + songs.image + ".jpg";
//       music.src = "/mus/" + songs.name + ".mp3";
// };

// let current_index = 0;
// let song_index = 0;
// let nextsong = () => {
//       loadsong(songs[song_index]);
//       console.log(song_index);
//       current_index = song_index;

//       play_function();
//       song_index++;
//       if (song_index == songs.length) {
//             song_index = 0;
//       }
// };

// const prevsong = () => {
//       loadsong(songs[current_index]);
//       console.log(current_index);
//       current_index--;
//       play_function();

//       if (current_index < 0) {
//             current_index = songs.length - 1;
//       }
// };

// nextt.addEventListener("click", nextsong);
// previous.addEventListener("click", prevsong);




// function playnext() {
//       console.log("123")
//       console.log(55)
// }