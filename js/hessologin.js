if (document.getElementById("username") != null) {

    let error_message = document.getElementsByClassName("text-danger")[0]

    if (error_message === undefined) {
        chrome.storage.sync.get("user", function (result) {
            if (result.user !== undefined) {
                if (document.getElementById("password") == null) { // First page with username only
                    document.getElementById("username").value = result.user.email
                    document.getElementById("button-submit").click()
                } else { // Second page with username and password
                    document.getElementById("username").value = result.user.email
                    document.getElementById("password").value = result.user.password
                    document.getElementById("button-proceed").click()
                }



            }
        })
    } else { // Connection failed
        error_message.innerHTML =
            `Les informations d'identification fournies dans l'extension sont erronées.<br>
        Veuillez les mettre à jour et réessayer !`

    }


}