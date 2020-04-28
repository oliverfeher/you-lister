class User
{
    constructor(user_name, id)
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
        console.log(event.target.parentNode.children[1].value)
    }

}
