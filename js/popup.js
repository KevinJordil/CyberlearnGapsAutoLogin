document.addEventListener('DOMContentLoaded', function() {
    window.resizeBy(800, 600)

    let save_button = document.getElementById("save-button")
    let input_email = document.getElementById("input-email")
    let input_password = document.getElementById("input-password")
    let show_password = document.getElementById("show-password")

    chrome.storage.sync.get("user", function(result) {
        if(result.user !== undefined){
            input_email.value = result.user.email
            input_password.value = result.user.password
        } 
    })

    document.addEventListener('keydown', function(e) {
        if(e.key === 'Enter'){
            save_button.click()
        }
    })

    save_button.addEventListener("click", function() {

        chrome.storage.sync.set({ 
            "user" : {
                "email": input_email.value,
                "password": input_password.value
            }
        }, function() {
            save_button.classList.remove("is-link")
            save_button.innerText = "Sauvé !"
            save_button.classList.add("is-success")
        })

    }, false)


    show_password.addEventListener("click", function() {

        if(input_password.type == "password"){
            input_password.type = "text"
            show_password.classList.remove("fa-eye")
            show_password.classList.add("fa-eye-slash")
        }
        else if(input_password.type == "text"){
            input_password.type = "password"
            show_password.classList.remove("fa-eye-slash")
            show_password.classList.add("fa-eye")
        }

    }, false)


}, false)