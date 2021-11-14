function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(500)

let conection_button = document.getElementById("wayf_submit_button")
if (typeof element !== "undefined") { // AAI not logged
    conection_button.click()
} else { // AAI already logged
    (document.querySelectorAll('a[href="https://cyberlearn.hes-so.ch/auth/shibboleth/index.php"]'))[0].click()
}