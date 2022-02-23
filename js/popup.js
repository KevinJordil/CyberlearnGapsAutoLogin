document.addEventListener('DOMContentLoaded', function() {
    let save_button = document.getElementById("save_button")
    let email = document.getElementById("input-email")
    let password = document.getElementById("input-password")

    chrome.storage.sync.get("user", function(result) {
        if(result.user !== undefined){
            email.value = result.user.email
            password.value = result.user.password
        } 
    })
    save_button.addEventListener("click", function() {

        chrome.storage.sync.set({ 
            "user" : {
                "email": email.value,
                "password": password.value
            }
        }, function() {
            save_button.classList.remove("is-link")
            save_button.innerText = "Saved !"
            save_button.classList.add("is-success")
        })

    }, false)
}, false)