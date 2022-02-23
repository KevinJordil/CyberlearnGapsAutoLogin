if(document.getElementById("username") != null){
    chrome.storage.sync.get("user", function(result) {
        if(result.user !== undefined){
            document.getElementById("username").value = result.user.email
            document.getElementById("password").value = result.user.password
        
            document.getElementById("login-button").click()
        } 
    })
}