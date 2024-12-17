document.addEventListener('DOMContentLoaded', function () {
    // MENU ADD
    fetch("/components/menu.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("menu non trouvé : " + response.status)
            }
            return response.text()
        })
        .then(data => {
            document.querySelector(".container").prepend(document.createRange().createContextualFragment(data))
        })
    // END MENU ADD
})