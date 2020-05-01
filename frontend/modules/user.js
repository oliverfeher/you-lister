class User
{
    constructor({id, user_name})
    {
        this.id = id;
        this.user_name = user_name;
    }

    myName()
    {
        console.log(`say my name ${this.user_name}`)
    }

    searchVideos(event)
    {
        function renderSearch(videoList)
        {
            Array.from(document.querySelectorAll("iframe")).forEach(video=>video.remove())
            videoList.items.forEach(video=> {
                let vid = document.createElement("iframe");
                vid.setAttribute("src", `https://www.youtube.com/embed/${video.id.videoId}`)
                let container = document.querySelector("#search-result");
                container.appendChild(vid);
            })
        }

        Youtube.get(event.target.parentNode.children[2].value).then(data=> renderSearch(data))
        
    }

}
