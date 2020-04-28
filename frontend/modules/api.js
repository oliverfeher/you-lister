const baseURL = "";

document.querySelector("#login").addEventListener("click", login);

// LOGGING IN
function login(event)
{
    event.preventDefault();

    fetch("http://localhost:3000/api/v1/login", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            user: {
                user_name: event.target.parentNode[0].value
            }
        })
    })
    .then(response => response.json())
    // ERROR IF INVALID USER
    .then(data=>validateLogin(data))

}



function signUp(event)
{
    event.preventDefault();

    fetch("http://localhost:3000/api/v1/users", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            user: {
                user_name: event.target.form[0].value
            }
        })
    })
    .then(response => response.json())
    .then(data => validateLogin(data))
}