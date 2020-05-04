// FETCHING FROM YOUTUBE API, MAX RESULT 5
class Youtube 
{
    static KEY = YOUTUBE_API_KEY;
    static baseURL = "https://www.googleapis.com/youtube/v3/search";

    static get(query)
    {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=${Youtube.KEY}&q=${query}`).then(response=>response.json())
    }
}

