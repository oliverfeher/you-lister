
renderLogin();

// RENDER LOG IN PAGE

function renderLogin()
{
    document.querySelector("#main").innerHTML = `
        <div id="log-in-form">        
            <form action="#" >
                <label>Username:</label>
                <br/>
                <input type="text">
                <br/>
                <button type="submit">Log in</button>
                <button>Sign Up</button>
            </form>
        </div>
`
}