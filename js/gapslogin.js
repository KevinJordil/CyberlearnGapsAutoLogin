let conection_button = document.getElementById("wayf_submit_button")

if (conection_button != null) {
    document.getElementById("user_idp").value = "https://aai-logon.hes-so.ch/idp/shibboleth"
    conection_button.click()
}