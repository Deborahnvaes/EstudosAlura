/* Essa função 'TOCASOM' reproduz os sons dos instrumentos
musicais que estão armazenados dentro de um elemento áudio do HTML e 
fizemos com que esses sons que foram reproduzidos fosse controlado pelos botões. */

function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        //alert{'Elemenro ou seletor não encontrado'}
        console.log('Elemento ou seletor não encontrado.')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

    for (let contador = 0; contador < listaDeTeclas.length; contador++) {
        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`; //tamplate instring

        tecla.onclick = function () {
            tocaSom(idAudio);
        }

        tecla.onkeydown = function(evento){

            if (evento.code === 'Space' || evento.code === 'Enter') {
                tecla.classList.add('ativa');
            }

        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    }
