class Youtube 
{

    static KEY = "AIzaSyDSKjl19sMQAmB5ccuTJHtk7ZvlNRdWxu0";
    static baseURL = "https://www.googleapis.com/youtube/v3/search";

    static get(query)
    {
        return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults5&key=AIzaSyDSKjl19sMQAmB5ccuTJHtk7ZvlNRdWxu0&q=${query}`).then(response=>response.json())

    }
}

