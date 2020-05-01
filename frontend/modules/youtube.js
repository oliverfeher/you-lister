class Youtube 
{

    static KEY = "AIzaSyDSKjl19sMQAmB5ccuTJHtk7ZvlNRdWxu0";
    static baseURL = "https://www.googleapis.com/youtube/v3/search";

    static get()
    {
        return fetch(baseURL,{
            params: {
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        });
    }
}

