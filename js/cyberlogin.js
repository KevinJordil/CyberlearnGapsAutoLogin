let conection_button = document.getElementById("wayf_submit_button")

if (conection_button != null) { // AAI not logged
    document.getElementById("user_idp").value = "https://aai-logon.hes-so.ch/idp/shibboleth"
    conection_button.click()
} else { // AAI already logged
    (document.querySelectorAll('a[href="https://cyberlearn.hes-so.ch/auth/shibboleth/index.php"]'))[0].click()
}