class User
{
    constructor({id, user_name})
    {
        this.id = id;
        this.user_name = user_name;
    }
    
    // TESTING
    myName()
    {
        console.log(`say my name ${this.user_name}`)
    }

    // SEARCH FOR VIDEOS + RENDER THE RESULTS
    searchVideos(event)
    {

        // RENDER EACH VIDEO BY CREATING VIDEO INSTANCES
        function renderSearch(videoList)
        {
            // REMOVE ALL IFRAME UPON NEW SEARCH
            Array.from(document.querySelectorAll("iframe")).forEach(video=>video.remove());

            // CREATE VIDEO INSTANCES AND CALL ISNTANCE METHOD RENDER
            videoList.items.forEach(video=> {
                let youtubeVid = new Video(video.snippet.title, video.id.videoId);
                youtubeVid.render();
            })
        }

        // FETCH FROM CUSTOM MADE YOUTUBE GET REQUEST
        Youtube.get(event.target.parentNode.children[2].value).then(data=> renderSearch(data))
        
    }

}
