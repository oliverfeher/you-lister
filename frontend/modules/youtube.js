// FETCHING FROM YOUTUBE API, MAX RESULT 5
class Youtube 
{
    static KEY = 
    static baseURL = "https://www.googleapis.com/youtube/v3/search";

    static get(query)
    {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=AIzaSyDRQsr63W-2NK-C9nTM_g3odYYY00umsww&q=${query}`).then(response=>response.json())
    }
}

