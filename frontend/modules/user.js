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

    // CREATE PLAYLIST BASED ON USERS INPUT AND ADD TO THE DROPDOWN LIST
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

    // ADD VIDEOS TO SELECTED PLAYLISTS FROM SEARCH RESULTS
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
        .then(data=>this.ifSelectedAdd(data))
    }

    // DROPDOWN BAR ON CHANGE RENDERS THE VIDEOS FROM SELECTED PLAYLISTS
    renderOnChange = (event) =>
    {
        fetch("http://localhost:3000/api/v1/playlist/videos",{
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
        .then(data=>this.renderVideosFromPlaylist(data))
    }

    // ON VIDEO ADD, IF THE PLAYLIST IS THE SAMEPLAYLIST THE IS CURRENTLY SELECTED RENDERS THE VIDEO RIGHT AWAY
    ifSelectedAdd(data){
        // if(document.querySelector("#list-playlists").value === )
        let videos = data.playlists.filter(playlist=> playlist.id === parseInt(document.querySelector("#list-playlists").value))
        // debugger;
        this.renderVideosFromPlaylist(videos[0]);
    }


    // DELETE SELECTED VIDEO FROM PLAYLIST
    deleteVideoFromPlaylist = (event) =>
    {
        console.log(event.target.parentNode.parentNode.parentNode.children[1].dataset.set);
        fetch(`http://localhost:3000/api/v1/videos/${event.target.parentNode.children[1].id}`, {
            method: "DELETE"
        })
        .then(response=>response.json())
        .then(data=>this.removeVideoFromDOM(data))
    }


    // RENDER VIDEOS TO THE DOM FROM THE SELECTED PLAYLIST
    renderVideosFromPlaylist = (obj) =>
    {
        let playlistVideos = [...document.querySelector("#playlist-videos").children];
        playlistVideos.forEach(container=> container.remove())
        obj.videos.forEach(video => {
            // IFRAME VARIABLES
            let youtubeContainer = document.createElement("div");
            let vid = document.createElement("iframe");
            let p = document.createElement("p");
            let container = document.querySelector("#playlist-videos");
            let deleteButton = document.createElement("button");


            youtubeContainer.setAttribute("class", "playlist-video-container")
            deleteButton.innerText = "Delete"
            deleteButton.setAttribute("class", "delete-video-to-playlist")
            


            vid.setAttribute("src", video.url);
            vid.setAttribute("id", video.id)
            p.innerText = video.title;

            // ACTUAL RENDERING
            youtubeContainer.append(p, vid, deleteButton);
            container.appendChild(youtubeContainer)
        })
        console.log(currentUser)
        document.querySelectorAll(".delete-video-to-playlist").forEach((button)=>
            {
                button.addEventListener("click", this.deleteVideoFromPlaylist)
            })
    }


    // DELETE VIDEO FROM DOM
    removeVideoFromDOM(data)
    {
        [...document.querySelectorAll("iframe")].find(e=> e.id === data.video_id).parentNode.remove();
    }
}
