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

            // burger menu 
            const cross = "M 1 1 L 4 4 M 1 4 L 4 1"
            const burgerFull = "M 1 1 L 7 1 M 1 3 L 7 3 M 1 5 L 7 5"
            const burgerSelector = document.querySelector(".burger-menu")
            burgerSelector.addEventListener("click", ()=>{
                if (burgerSelector.classList.contains("cross")) {
                    burgerSelector.classList.remove("cross")
                    burgerSelector.setAttribute("viewBox","0 0 8 6" )
                    burgerSelector.querySelector("path").setAttribute("d",burgerFull)
                    burgerSelector.nextElementSibling.classList.add("hide")
                    burgerSelector.nextElementSibling.classList.remove("show")
                }
                else{
                    burgerSelector.classList.add("cross")
                    burgerSelector.setAttribute("viewBox","0 0 5 5" )
                    burgerSelector.querySelector("path").setAttribute("d",cross)
                    burgerSelector.nextElementSibling.classList.remove("hide")
                    burgerSelector.nextElementSibling.classList.add("show")
                }
            })
            // end burger menu
        })
    // END MENU ADD
})