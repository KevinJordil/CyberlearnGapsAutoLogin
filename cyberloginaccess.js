function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(500)
let connexion_button = (document.querySelectorAll('a[href="https://cyberlearn.hes-so.ch/login/index.php"]'))[0]
console.log(connexion_button)
if (typeof connexion_button !== "undefined") { // Not logged 
    connexion_button.click()
}
