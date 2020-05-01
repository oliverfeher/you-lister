class Playlist
{
    constructor(name, id)
    {
        this.name = name;
        this.id = id;
    }

    static renderExistingPlaylists(playlist, currentUser)
    {
        let newPlaylist = new Playlist(playlist.name, playlist.id)
        currentUser.addPlaylist(newPlaylist);
        debugger
        let newPlaylistElement = document.createElement("option");
        newPlaylistElement.text = playlist.name;

        document.querySelector("#list-playlists").add(newPlaylistElement);
    }

    addVideos(videos)
    {
        this.videos = videos;
    }

    getVideos()
    {
        return this.videos;
    }



}