

























































// /* ==========================================================
//    SPOTIFY APPLICATION LOGIC & AUDIO ENGINE
//    ========================================================== */

// // Mock Audio Database
// const musicDatabase = [
//     { id: 1, title: "180° - أغنية تامر حسني", artist: "تامر حسني", category: "music", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://picsum.photos/300/300?random=10" },
//     { id: 2, title: "يا ساحر", artist: "عمرو دياب", category: "music", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://picsum.photos/300/300?random=11" },
//     { id: 3, title: "بودكاست الفن والتصميم", artist: "عالم التقنية", category: "podcast", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://picsum.photos/300/300?random=12" },
//     { id: 4, title: "راديو تيتو بندق", artist: "حمو بيكا - تيتو", category: "music", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://picsum.photos/300/300?random=13" },
//     { id: 5, title: "Triệu Đóa Hoa Hồng", artist: "Gia Huy", category: "music", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", cover: "https://picsum.photos/300/300?random=14" }
// ];

// // App Global State
// let currentIndex = -1;
// let isPlaying = false;
// let isShuffle = false;
// let isRepeat = false;
// let isFav = false;

// const audio = document.getElementById('main-audio-engine');

// // Document Ready Initialization
// document.addEventListener('DOMContentLoaded', () => {
//     initAudioListeners();
// });

// // Play Audio Function
// function playTrack(id) {
//     const track = musicDatabase.find(t => t.id === id);
//     if (!track) return;

//     currentIndex = musicDatabase.findIndex(t => t.id === id);
//     audio.src = track.src;

//     // Update Player Elements
//     document.getElementById('player-title').innerText = track.title;
//     document.getElementById('player-artist').innerText = track.artist;
//     document.getElementById('player-cover').src = track.cover;

//     // Update Right Details Panel
//     document.getElementById('panel-title').innerText = track.title;
//     document.getElementById('panel-artist').innerText = track.artist;
//     document.getElementById('panel-cover').src = track.cover;

//     audio.play();
//     isPlaying = true;
//     updatePlayPauseState();
// }

// // Toggle Play/Pause
// function togglePlay() {
//     if (currentIndex === -1) {
//         playTrack(musicDatabase[0].id);
//         return;
//     }

//     if (isPlaying) {
//         audio.pause();
//         isPlaying = false;
//     } else {
//         audio.play();
//         isPlaying = true;
//     }
//     updatePlayPauseState();
// }

// function updatePlayPauseState() {
//     const mainIcon = document.getElementById('main-play-icon');
//     mainIcon.className = isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
// }

// // Track Switching
// function nextSong() {
//     if (currentIndex === -1) return;
//     if (isShuffle) {
//         currentIndex = Math.floor(Math.random() * musicDatabase.length);
//     } else {
//         currentIndex = (currentIndex + 1) % musicDatabase.length;
//     }
//     playTrack(musicDatabase[currentIndex].id);
// }

// function prevSong() {
//     if (currentIndex === -1) return;
//     currentIndex = (currentIndex - 1 + musicDatabase.length) % musicDatabase.length;
//     playTrack(musicDatabase[currentIndex].id);
// }

// // Controls Modifications
// function toggleFavorite() {
//     isFav = !isFav;
//     const icon = document.getElementById('like-btn-icon');
//     icon.className = isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
//     icon.style.color = isFav ? "var(--spotify-green)" : "#fff";
// }

// function toggleShuffle() {
//     isShuffle = !isShuffle;
//     document.getElementById('shuffle-icon').style.color = isShuffle ? "var(--spotify-green)" : "var(--spotify-text-gray)";
// }

// function toggleRepeat() {
//     isRepeat = !isRepeat;
//     document.getElementById('repeat-icon').style.color = isRepeat ? "var(--spotify-green)" : "var(--spotify-text-gray)";
// }

// // Audio Event Listeners
// function initAudioListeners() {
//     audio.addEventListener('timeupdate', () => {
//         if (!audio.duration) return;
//         const progress = (audio.currentTime / audio.duration) * 100;
//         document.getElementById('progress-fill').style.width = `${progress}%`;

//         document.getElementById('current-time').innerText = formatTime(audio.currentTime);
//         document.getElementById('total-duration').innerText = formatTime(audio.duration);
//     });

//     audio.addEventListener('ended', () => {
//         if (isRepeat) {
//             audio.play();
//         } else {
//             nextSong();
//         }
//     });
// }

// function formatTime(seconds) {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
// }

// function seekAudio(e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const pos = (e.clientX - rect.left) / rect.width;
//     audio.currentTime = pos * audio.duration;
// }

// function changeVolume(val) {
//     audio.volume = val / 100;
// }

// function toggleMute() {
//     audio.muted = !audio.muted;
//     document.getElementById('volume-icon').className = audio.muted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
// }

// // UI Navigation Handlers
// function navigateTo(page) {
//     const dynamicArea = document.getElementById('dynamic-content-area');
//     const searchBar = document.getElementById('top-search-bar');

//     if (page === 'search') {
//         searchBar.style.display = 'block';
//         dynamicArea.innerHTML = `
//             <h2>البحث السريع</h2>
//             <p style="color: var(--spotify-text-gray); margin-top: 8px;">ابحث عن أغنيتك، أو الفنان المفصل لك.</p>
//         `;
//     } else if (page === 'home') {
//         location.reload();
//     } else {
//         alert("انتقال لصفحة: " + page);
//     }
// }