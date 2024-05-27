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

    let boutonRevenir = document.querySelector('.revenirtBtn');
    let boutonSuivant = document.querySelector('.suivantBtn');
    
    // Fonction pour changer le z-index des images
    function changeZIndex(index) {
        for (let j = 0; j < carrousel__figure.children.length; j++) {
            if (j === index) {
                carrousel__figure.children[j].style.zIndex = 1; // Met en avant l'image sélectionnée
            } else {
                carrousel__figure.children[j].style.zIndex = 0; // Cache les autres images
            }
        }
    }

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
                // Appelle la fonction pour changer le z-index
                changeZIndex(parseInt(this.value));
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

    // Ajout des événements pour les boutons "Précédent" et "Suivant"
    boutonRevenir.addEventListener('click', function() {
        // Récupère l'index de l'image précédente
        let currentIndex = parseInt(carrousel__form.querySelector('input:checked').value);
        let newIndex = currentIndex - 1;
        // Si c'est la première image, passe à la dernière
        if (newIndex < 0) {
            newIndex = galerie__img.length - 1;
        }
        // Appelle la fonction pour changer le z-index
        changeZIndex(newIndex);
        // Coche le bouton radio correspondant
        carrousel__form.querySelector('#carrousel-radio-' + newIndex).checked = true;
    });

    boutonSuivant.addEventListener('click', function() {
        // Récupère l'index de l'image suivante
        let currentIndex = parseInt(carrousel__form.querySelector('input:checked').value);
        let newIndex = currentIndex + 1;
        // Si c'est la dernière image, passe à la première
        if (newIndex >= galerie__img.length) {
            newIndex = 0;
        }
        // Appelle la fonction pour changer le z-index
        changeZIndex(newIndex);
        // Coche le bouton radio correspondant
        carrousel__form.querySelector('#carrousel-radio-' + newIndex).checked = true;
    });

    // Gestion de l'ouverture du carrousel en cliquant sur une image de la galerie
    galerie__img.forEach(function(image, index) {
        image.addEventListener('click', function() {
            // Ouvre le carrousel
            carrousel.classList.add('carrousel--ouvrir');
            // Change l'image affichée dans le carrousel en fonction de l'index de l'image cliquée
            changeZIndex(index);
            // Coche le bouton radio correspondant à l'image cliquée
            carrousel__form.querySelector('#carrousel-radio-' + index).checked = true;
        });
    });


document.addEventListener("DOMContentLoaded", function() {
    // Votre deuxième bloc de code JavaScript ici
    let bouton = document.querySelector('.bouton__ouvrir');
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let carrousel__form = document.querySelector('.carrousel__form');
    let galerie__img = document.querySelectorAll('.wp-block-image');

    bouton.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir');
        document.body.classList.add('no-scroll'); // Ajoute la classe no-scroll au body pour désactiver le défilement de la page
    });

    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--ouvrir');
        document.body.classList.remove('no-scroll'); // Retire la classe no-scroll du body pour réactiver le défilement de la page
    });

    for (let i = 0; i < galerie__img.length; i++) {
        galerie__img[i].addEventListener('click', function() {
            // Ouvre le carrousel
            carrousel.classList.add('carrousel--ouvrir');
            // Change l'image affichée dans le carrousel en fonction de l'index de l'image cliquée
            changeZIndex(i);
            // Coche le bouton radio correspondant à l'image cliquée
            carrousel__form.querySelector('#carrousel-radio-' + i).checked = true;
            document.body.classList.add('no-scroll'); // Ajoute la classe no-scroll au body pour désactiver le défilement de la page
        });
    }
})
})();