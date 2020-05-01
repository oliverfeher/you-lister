class Video
{
    constructor(title, video_id)
    {
        this.title = title;
        this.video_id = video_id;
    }

    render()
    {
        let vid = document.createElement("iframe");
        let p = document.createElement("p");
        let container = document.querySelector("#search-result");

        vid.setAttribute("src", `https://www.youtube.com/embed/${this.video_id}`)
        p.innerText = this.title;

        container.append(p, vid);
    }
}