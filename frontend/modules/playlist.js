class Playlist
{
    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }

    static renderExistingPlaylists(playlist)
    {
        let newPlaylist = new Playlist(playlist.name, playlist.id)
        let newPlaylistElement = document.createElement("option");
        newPlaylistElement.text = playlist.name;

        document.querySelector("#list-playlists").add(newPlaylistElement);
    }



}