class User
{
    constructor({id, user_name})
    {
        this.id = id;
        this.user_name = user_name;
        this.playlists = [];
    }
    
    // TESTING
    myName()
    {
        console.log(`say my name ${this.user_name}`)
    }

    addPlaylist(playlist)
    {
        this.playlists.push(playlist)
    }

    getPlaylists()
    {
        return this.playlists;
    }

    // SEARCH FOR VIDEOS + RENDER THE RESULTS
    searchVideos = (event) =>
    {

        // RENDER EACH VIDEO BY CREATING VIDEO INSTANCES
        const renderSearch = (videoList) =>
        {
            // REMOVE ALL IFRAME UPON NEW SEARCH
            Array.from(document.querySelectorAll(".result-video-container")).forEach(video=>video.remove());

            // CREATE VIDEO INSTANCES AND CALL ISNTANCE METHOD RENDER
            videoList.items.forEach(video=> {
                let youtubeVid = new Video(video.snippet.title, video.id.videoId);
                youtubeVid.render(this.playlists, this);
            })
        }

        // FETCH FROM CUSTOM MADE YOUTUBE GET REQUEST
        Youtube.get(event.target.parentNode.children[2].value).then(data=> renderSearch(data))
        
    }

    createPlaylist = (event) =>
    {
        console.log(event.target.parentNode.children[2].value)
        fetch("http://localhost:3000/api/v1/playlists", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                user: {
                    user_id: this.id,
                    playlist: {
                        name: event.target.parentNode.children[2].value
                    }
                }
            })
        })
        .then(response=>response.json())
        .then(data=>createAndRender(data))
        

        const createAndRender = (playlist) => {
            let playlistElement = document.createElement("option");
            let newPlaylist = new Playlist(playlist.name, playlist.id);
            playlistElement.text = playlist.name
            playlistElement.setAttribute("value", playlist.id);
            this.playlists.push(newPlaylist)
            
            document.querySelector("#list-playlists").add(playlistElement);

        }
    }

    addVideoToPlaylist = (event) =>
    {
        fetch("http://localhost:3000/api/v1/videos", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                user_id: this.id,
                playlist_id: event.target.previousSibling.value,
                video: {
                    url: event.target.parentNode.children[1].src,
                    title: event.target.parentNode.children[0].innerText
                }
            })
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }

    renderOnChange = (event) =>
    {
        fetch("http://localhost:3000/api/v1/videos",{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                user_id: this.id,
                playlist_id: event.target.value,
                })
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }
}
