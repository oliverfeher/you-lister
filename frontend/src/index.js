
// INIT
renderLogin();
document.querySelector("#signup").addEventListener("click", renderSignUp)


// RENDER LOG IN PAGE

function renderLogin()
{
    document.querySelector("#main").innerHTML = `
        <div id="log-in-form">     
            <p id="logo">You(r)Tube Lister</p>   
            <form>
                <label>Username:</label>
                <br/>
                <input type="text">
                <br/>
                <button type="submit" id="login">Log in</button>
                </form>
                <button id="signup">Sign Up</button>
        </div>
`

}

function renderSignUp()
{
    renderSignUpForm();
    document.querySelector("#signup-actual").addEventListener("click", signUp)
}

function renderSignUpForm()
{
    document.querySelector("#main").innerHTML = `
        <div id="log-in-form">     
            <p id="logo">You(r)Tube Lister</p>
            <p>Sign Up</p>      
            <form >
                <label>Username:</label>
                <br/>
                <input type="text">
                <br/>
                <button id="signup-actual" type="submit">Sign Up</button>
            </form>
        </div>
        `
}

function validateLogin(obj)
{
    if (obj.hasOwnProperty("error"))
    {
        
        document.querySelector("#log-in-form").remove();
        document.querySelector("#main").innerHTML = `
        <div id="log-in-form">     
            <p id="logo">You(r)Tube Lister</p> 
            <p style="color: red;">Username doesn't exist!</p>  
            <form>
                <label>Username:</label>
                <br/>
                <input type="text">
                <br/>
                <button type="submit" id="login">Log in</button>
                </form>
                <button id="signup">Sign Up</button>
        </div>
`
        document.querySelector("#login").addEventListener("click", login);
    }
    else
    {
        const currentUser = new User(obj) // what couild use instead writing obj.user_name
        console.log(currentUser);
        renderMainPage(currentUser)
    }
}

// RENDER 
function renderMainPage(currentUser)
{
    document.querySelector("#main").innerHTML =`
    <div id="home-container">
        <div id="welcome">     
            <p id="logo">You(r)Tube Lister</p>
            <p>Welcome back, <span>${currentUser.user_name}</span> !</p>      
        </div>

        <div id="action-container">
            <label>Search for Videos</label>
            <br/>
            <input type="text"/>
            <br/>
            <button id="search-submit">Search</button>
        </div>
        
        <div id ="user-container">

            <div id="search-result">
            <h3>Search Results:</h3>
            </div>
            
            <div id="playlists">
            <h3>Your playlists:</h3>
            <select id="list-playlists">
            <input type="button" value="Create Playlist"/>
            </div>

        </div>
    </div>
    `
    document.querySelector("#search-submit").addEventListener("click", currentUser.searchVideos)
}
