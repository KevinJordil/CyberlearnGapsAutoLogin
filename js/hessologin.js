if (document.getElementById("username") != null) {

    let error_message = document.getElementsByClassName("input_error")[0]

    if (error_message === undefined) {
        chrome.storage.sync.get("user", function (result) {
            if (result.user !== undefined) {
                document.getElementById("username").value = result.user.email
                document.getElementById("password").value = result.user.password

                document.getElementById("login-button").click()
            }
        })
    } else { // Connection failed
        error_message.innerHTML =
            `Les informations d'identification fournies dans l'extension sont erronées.<br>
        Veuillez les mettre à jour et réessayer !`

    }


}