const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
const randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

// Ruta corregida para el archivo de música
const musica = new Audio('/musica/Manu Chao - Me gustas tu.mp3');

// Si acepta: 
btnSi.addEventListener('click', () => {
    // Ruta corregida para la imagen
    randomPic.src = './assets/fotos/2.jpg';
    question.innerText = ' Uwu!!!!! :3 ';
    question.classList.add('question-style');

    btnSi.style.display = 'none';
    btnNo.style.display = 'none';

    musica.play();
});

// Lógica: 
let contador = 0;

btnNo.addEventListener('click', () => {
    switch (contador) {
        case 0:
            btnNo.innerText = 'Segura?';
            btnSi.classList.add('estilo-1');
            randomPic.src = './assets/fotos/2.jpg'; // Ruta corregida
            break;

        case 1:
            btnNo.innerText = 'Segurísima?';
            btnSi.classList.add('estilo-2');
            randomPic.src = './assets/fotos/3.jpg'; // Ruta corregida
            break;

        case 2:
            btnNo.innerText = 'Apoco si :( ?';
            btnSi.classList.add('estilo-3');
            randomPic.src = './assets/fotos/4.jpg'; // Ruta corregida
            break;

        case 3:
            btnNo.innerText = 'Ni modo...';
            btnSi.classList.add('estilo-4');
            randomPic.src = './assets/fotos/5.jpg'; // Ruta corregida
            break;

        case 4:
            btnNo.innerText = 'Duren... ';
            btnSi.classList.add('estilo-5');
            randomPic.src = './assets/fotos/6.jpg'; // Ruta corregida
            break;
    }

    contador++;
});
