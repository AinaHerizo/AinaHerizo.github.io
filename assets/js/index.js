document.addEventListener('DOMContentLoaded', function () {
    // CV Download
    const buttonDownload = document.querySelector("#cvDownload")
    buttonDownload.addEventListener("click", (e)=>{
        e.preventDefault()
        const pdfUrl = 'https://github.com/AinaHerizo/CV/raw/main/CVFinal.pdf'; // Utilisez le lien brut pour le téléchargement
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'CVFinal.pdf'; // Nom du fichier lors du téléchargement
        document.body.appendChild(link);
        link.click(); // Simule un clic sur le lien
        document.body.removeChild(link); // Supprime le lien après le téléchargement
    })



    // SLIDE CATEGORIE
    const categorieFolio = document.querySelectorAll(".folio-group button")
    categorieFolio.forEach(categorieButton => {
        categorieButton.addEventListener("click", function() {
            const categorieShow = document.querySelector(".folio-group button.show")
            categorieShow.classList.remove("show")
            this.classList.add("show")     
        })
    })


    // SLIDE ITEMS CARROUSSEL
    // Initialisation
    const firstItem = document.querySelector(".folio-item:first-child")
    const lastItem = document.querySelector(".folio-item:last-child")
    firstItem.classList.add("center")
    firstItem.before(lastItem)

    // Recupération des boutons du slide
    const slideButton = document.querySelectorAll(".folio-slide .arrow");
    const folioParent = document.querySelector(".folio-slide_carroussel")

    // Fonction pour les click event sur chacun d'eux
    slideButton.forEach(arrow => {
        arrow.addEventListener("click", function(){
            if(this.classList.contains("left")){
                animationFolio("left")
                setTimeout(()=>{moveFolio("left")},1000)             
            }
            else{
                animationFolio("right")
                setTimeout(()=>{moveFolio("right")},1000)
            }
        })
    })

        // les evenemnt lié au bouton du slide
        // ANIMATION
        const animationFolio = (direction) => {
            const folioItem = document.querySelectorAll(".folio-item")
                folioItem.forEach((item,index) => {
                    item.style.transform = direction === "left" ? "translateX(-128%)" : "translateX(128%)"
                    item.style.transition= "transform 1s ease-in-out"
                    if (direction === "left") {
                        if (index === 0) {
                            item.style.opacity = "0"
                            item.style.transition= "transform 1s ease-in-out, opacity .3s ease-in-out"
                        }
                        else if (index === 1){
                            item.style.opacity = "0.5"
                            item.style.boxShadow = "0 0 10px 0px #2e2e2e59"
                            item.style.scale = "1"
                            item.style.transition = "transform 1s ease-in-out, box-shadow 1s ease-in-out, opacity 1s ease-in-out"
                        }
                        else if (index === 2) {
                            item.style.transform = "scale(1.2) translateX(-106%)"
                            item.style.boxShadow = "0 0 10px 0px #ecd196"
                            item.style.opacity = "1"
                            item.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out, box-shadow 1s ease-in-out"
                        }
                        else if (index === 3) {
                            item.style.right = "30px";
                            item.style.opacity = "0.5";
                            item.style.visibility = "visible"
                            item.style.transform = "translateX(0)"
                            item.style.transition = "right 1s ease-in-out, opacity 1.3s ease-in-out, visibility 1s ease-in-out"
                        }
                    }
                    else{
                        if (index === 2) {
                            item.style.opacity = "0"
                            item.style.transition= "transform 1s ease-in-out, opacity .3s ease-in-out"
                        }
                        else if (index === 0) {
                            item.style.transform = "scale(1.2) translateX(106%)"
                            item.style.boxShadow = "0 0 10px 0px #ecd196"
                            item.style.opacity = "1"
                            item.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out, box-shadow 1s ease-in-out"
                        }
                        else if (index === 1){   
                            item.style.opacity = "0.5"
                            item.style.boxShadow = "0 0 10px 0px #2e2e2e59"
                            item.style.scale = "1"
                            item.style.transition = "transform 1s ease-in-out, box-shadow 1s ease-in-out, opacity 1s ease-in-out"
                        }
                        else if (index === folioItem.length - 1) {
                            item.style.left = "-100%";
                            item.style.opacity = "0.5";
                            item.style.visibility = "visible"
                            item.style.transform = "translateX(37%)"
                            item.style.transition = "left 1s ease-in-out, opacity 1.3s ease-in-out, visibility 1s ease-in-out, transform 1s ease-in-out"
                        }
                    }
                    setTimeout(()=>{
                        item.removeAttribute("style")
                    },1000)
                })
        }

        // MOUVEMENT
        const moveFolio = (direction) => {
            // Selectionne tous les éléments qui seront touchés par l'event
            const folioCenter = document.querySelector(".folio-item.center")
            const folioDirectionSiblings = direction === "left" ? folioCenter.nextElementSibling : folioCenter.previousElementSibling
            const folioLast = document.querySelector(".folio-item:last-child")
            const folioFirst = document.querySelector(".folio-item:first-child")
            
            // supprime et ajoute les class
            folioCenter.classList.remove("center")
            folioDirectionSiblings.classList.add("center")
            
            //deplace les element en fonction
            if (direction === "left") {
                folioParent.append(folioFirst);
            }
            else{
                folioParent.prepend(folioLast);
            } 
        }
})


