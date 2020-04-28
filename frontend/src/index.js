
renderLogin();

// RENDER LOG IN PAGE

function renderLogin()
{
    document.querySelector("#main").innerHTML = `
        <div id="log-in-form">     
            <p id="logo">You(r)Tube Lister</p>   
            <form action="#" >
                <label>Username:</label>
                <br/>
                <input type="text">
                <br/>
                <button type="submit" id="login">Log in</button>
                <button>Sign Up</button>
            </form>
        </div>
`
}

