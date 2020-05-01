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
        Youtube.get(event.target.parentNode.children[2].value).then(data=>console.log(data))
    }

}
