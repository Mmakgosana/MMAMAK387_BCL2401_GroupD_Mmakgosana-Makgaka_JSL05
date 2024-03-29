// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Love on the brain", artist: "Rihanna", genre: "Pop" },
    { title: "Tshwala Bami", artist: "Chillies RSA", genre: "Amapiano" },
    { title: "Ghida", artist: "Dj Karri & Dj Gizo", genre:"Amapiano" },
    { title: "My Sharona", artist: "The Knack", genre:"Rock", },
    { title: "The Final Countdown", artist:"Europe", genre:"Rock",},
    
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "Rock",
    "Rocket" : "Rock",
    "Groot" : "Pop",
     // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
 // Use the map() function to create playlists for each Guardian
    // Your code here
    function generatePlaylist(guardians, songs) {
        const playlists = Object.entries(guardians).map(([guardianName, genre]) => {
          const guardianPlaylist = songs.filter((song) => song.genre === genre);
          return { guardianName, songs: guardianPlaylist };
        });
        return playlists;
      }
//Function to display playlists on the webpage      
    function displayPlaylists(playlists) {
        const playlistsContainer = document.getElementById("playlists");
        playlists.forEach((playlist) => {
          const playlistElement = document.createElement("section");
          playlistElement.classList.add("playlist");
      
          const title = document.createElement("h2");
          title.textContent = `${playlist.guardianName}'s Playlist`;
          playlistElement.appendChild(title);
      
          songs.forEach(song => {
      
              const songElement =  document.createElement('div');
              songElement.classList.add('song');
      
              const songTitle = document.createElement('span');
              songTitle.classList.add('song-title');
              songTitle.textContent = song.title;
              songElement.appendChild(songTitle);
      
              const songArtist = document.createElement('span');
              songArtist.textContent = ` by ${song.artist}`;
              songElement.appendChild(songArtist);
      
              playlistElement.appendChild(songElement);
          });
         
          playlistsContainer.appendChild(playlistElement);
        });
      }; 
      
      // Generate playlists and display them
      const generatedPlaylists = generatePlaylist(guardians, songs);
      displayPlaylists(generatedPlaylists);