(function(){
    console.log('début')
    let carrousel = document.querySelector(".carrousel")
    console.log('carrousel')
    let bouton = document.querySelector(".bouton__ouvrir")
    let carrousel__x = document.querySelector(".carrousel__x")

    let galerie = document.querySelector('.galerie')


    let carrousel__figure = document.querySelector(".carrousel__figure")


    let galerie__img = galerie.querySelectorAll('img') //Collection des images de la galerie

    let carrousel__form = document.querySelector('.carrousel__form');

// Boucle pour carrousel 
    for (const elm of galerie__img){

        let carrousel__img = document.createElement('img')
        carrousel__img.classList.add('carrousel__img')
        console.log(elm.src)
        carrousel__img.src = elm.src
        console.log(carrousel__img.src)
        carrousel__figure.appendChild(carrousel__img)
    }

    for (let i = 0; i < galerie__img.length; i++) {

        let radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'carrousel-radio';
        radioBtn.value = i;
        radioBtn.id = 'carrousel-radio-' + i;

        // Ajoute un écouteur d'événements pour détecter les changements de sélection
        radioBtn.addEventListener('change', function() {
            if (this.checked) {
                // Met en avant l'image correspondante en ajustant le z-index
                let index = parseInt(this.value);
                for (let j = 0; j < carrousel__figure.children.length; j++) {
                    if (j === index) {
                        carrousel__figure.children[j].style.zIndex = 1; // Met en avant l'image sélectionnée
                    } else {
                        carrousel__figure.children[j].style.zIndex = 0; // Cache les autres images
                    }
                }
            }
        });

        carrousel__form.appendChild(radioBtn);
    }

    // Permet que le premier bouton radio est coché par défaut
    carrousel__form.firstChild.checked = true;

    // met en avant la première image du carrousel
    carrousel__figure.children[0].style.zIndex = 1;

    // Assure que le premier bouton radio est coché par défaut
    carrousel__form.firstChild.checked = true;

    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir')
    })

    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir')
    })

})()