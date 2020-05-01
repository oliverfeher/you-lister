class Playlist
{
    constructor(name, id)
    {
        this.name = name;
        this.id = id;
        this.videos = [];
    }

    static renderExistingPlaylists(playlist, currentUser)
    {
        let newPlaylist = new Playlist(playlist.name, playlist.id)
        currentUser.addPlaylist(newPlaylist);
        let newPlaylistElement = document.createElement("option");
        newPlaylistElement.text = playlist.name;
        document.querySelector("#list-playlists").add(newPlaylistElement);
    }

    addVideos(video)
    {
        this.videos.push(video);
    }

    getVideos()
    {
        return this.videos;
    }



}