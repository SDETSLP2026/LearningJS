/*
Array_Assignment-10
PS: Music Playlist Application
Scenario: A music app stores favorite songs.
Question: Declare an array with "Song1", "Song2", "Song3" and:
1. Display playlist in reverse order
2. Remove the last song
3. Add "NewSong" at the beginning
4. Convert playlist into a single string
*/

let playlist = ["Song1", "Song2", "Song3"];
let copiedPlayList = [...playlist];

// 1. Display playlist in reverse order
let revPlaylist = copiedPlayList.reverse();
console.log(revPlaylist); //[ 'Song3', 'Song2', 'Song1' ]

// 2. Remove the last song
let remLastSong = playlist.pop();
console.log(remLastSong); //Song3
console.log(playlist); //[ 'Song1', 'Song2' ]

// 3. Add "NewSong" at the beginning
let addSong = playlist.unshift("NewSong")
console.log(playlist); //[ 'NewSong', 'Song1', 'Song2' ]

// 4. Convert playlist into a single string
let allSongs = playlist.join(" -> ");
console.log(allSongs); //NewSong -> Song1 -> Song2