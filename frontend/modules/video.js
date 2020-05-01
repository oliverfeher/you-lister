class Video
{
    constructor(title, video_id)
    {
        this.title = title;
        this.video_id = video_id;
    }


    // RENDER ITSELF ON THE DOM
    render(playlists)
    {
        // IFRAME VARIABLES
        let youtubeContainer = document.createElement("div");
        let vid = document.createElement("iframe");
        let p = document.createElement("p");
        let p2 = document.createElement("p");
        let container = document.querySelector("#search-result");
        let selectBar = document.createElement("select");
        let addButton = document.createElement("button");
        playlists.forEach(element => {
            let selectOption = document.createElement("option");
            selectOption.text = element.name;
            selectOption.setAttribute("value", element.id)
            selectBar.add(selectOption)
        });
        youtubeContainer.setAttribute("class", "result-video-container")
        selectBar.setAttribute("id", "select-bar");
        addButton.innerText = "Add"
        vid.setAttribute("src", `https://www.youtube.com/embed/${this.video_id}`)
        p.innerText = this.title;
        p2.innerText = "Add to your playlist:"

        // ACTUAL RENDERING
        youtubeContainer.append(p, vid, p2, selectBar, addButton);
        container.appendChild(youtubeContainer)
    }
}