function makeAlbum(artistName, albumTitle, numberOfTracks = undefined) {
    return {
        artistName,
        albumTitle,
        numberOfTracks
    };
}
;
let album1 = makeAlbum("muneeb", "muneeb's album", 20);
let album2 = makeAlbum("shahmeer", "shahmeer's album", 10);
let album3 = makeAlbum("mudassir", "mudassir's album");
console.log(album1);
console.log(album2);
console.log(album3);
export {};
