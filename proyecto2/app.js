/*Palabras del ahorcado*/
var palabras = ["DAW", "AHORCADO", "MURCIELAGO", "PORTATIL", "ARRAY", "LANISTER", "STARK", "NIEVE", "DRAGON", "TRONO"];
/*Array de botones para usar mas tarde*/
var desac = document.getElementsByClassName("let");
/*Contadores para usar mas tarde*/
var contador = 0;
var contaexiste = 0;
/*Funcion de carga*/

/*Funciones para desactivar los enlaces*/
function desactiva_enlace(enlace) {
    enlace.disabled = 'disabled';
}
function desactiva_todo() {
    /*Uso un for para desactivar todos los botones*/
    for (b = 0; b < desac.length; b++) {
        desac[b].disabled = 'disabled';
    }
}
/*Funciones de manejo del ahorcado*/
function selecciona() {
    var seleccion = parseInt(Math.random() * (10));
    palabraJuego = new Array();
    palabraJuego = palabras[seleccion];
    /*Solo debug, muestra la palabra seleccionada del array de palabras*/
    //document.getElementById("debug").innerHTML = "<p>" + seleccion + "</p>"+"<p>" + palabraJuego + "</p>";
    pintarCaja();
}
function pintarCaja() {
    var divletra = "";
    for (a = 0; a < palabraJuego.length; a++) {
        divletra += "<div class='letra' id='" + a + "'></div>";
        document.getElementById("palabra").innerHTML = divletra;
    }
}
function comprobarLetra(letra) {
    var existeLetra = false;
    for (i = 0; i < palabraJuego.length; i++) {
        if (palabraJuego[i] == letra.toUpperCase()) {
            document.getElementById(i).innerText = letra.toUpperCase();
            contaexiste++;
            existeLetra = true;
            if (contaexiste == palabraJuego.length) {
                alert("Has ganado");
                desactiva_todo();
            }
            /*alert("Existe: " + letra);*/
        }
    }
    if (existeLetra == false) {
        /*alert("ERROR " + letra);*/
        contador++;
        var canvas = document.getElementById('ahorcado');
        var ctx = canvas.getContext('2d');
        switch (contador) {
            /*Aqui va el dibujo*/
            /*Base*/
            case 1:
                ctx.strokeStyle = "#00ff21";
                ctx.moveTo(20, 560);
                ctx.lineTo(200, 560);
                ctx.stroke();
                break;
                /*Mastil*/
            case 2:

                ctx.moveTo(100, 560);
                ctx.lineTo(100, 30);
                ctx.stroke();
                break;
                /*Travesaño*/
            case 3:

                ctx.moveTo(350, 30);
                ctx.lineTo(100, 30);
                ctx.stroke();
                break;
                /*Cuerda*/
            case 4:

                ctx.moveTo(350, 70);
                ctx.lineTo(350, 30);
                ctx.stroke();
                break;
                /*Cuerpo*/
            case 6:

                ctx.moveTo(350, 130);
                ctx.lineTo(350, 300);
                ctx.stroke();
                break;
            case 7:
                /*Izquierda*/
                ctx.moveTo(300, 200);
                ctx.lineTo(350, 150);
                ctx.moveTo(300, 350);
                ctx.lineTo(350, 300);
                ctx.stroke();
                break;
            case 8:
                /*Derecha*/
                ctx.moveTo(400, 200);
                ctx.lineTo(350, 150);
                ctx.moveTo(400, 350);
                ctx.lineTo(350, 300);
                ctx.stroke();
                alert("Has perdido");
                desactiva_todo();
                alert("La palabra correcta era: " + palabraJuego);;
                break;
                /*Cabeza*/
            case 5:
                ctx.beginPath();
                ctx.arc(350, 100, 31.4, 0, Math.PI * 2, false);
                ctx.stroke();
                break;
        }
    }
}
/*Funciones Jquery*/
function fondoDegradado() {
    $('.fondoJQuery.oculto').css('background', degradadoAleat());
    $('.fondoJQuery').toggleClass('oculto');
}
function degradadoAleat() {
    var Inicio = {
        r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255)
    };
    var Fin = {
        r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255)
    };
    Inicio.rgb = 'rgb(' + Inicio.r + ',' + Inicio.g + ',' + Inicio.b + ')';
    Fin.rgb = 'rgb(' + Fin.r + ',' + Fin.g + ',' + Fin.b + ')';
    return 'radial-gradient(at center, ' + Inicio.rgb + ', ' + Fin.rgb + ')';
}
var wordChoices = [
  'Marruecos',
  'Senegal',
  'Nigeria',
  'Sudan',
  'Chad',
  'Camerun',
  'Ghana',
  'Togo',
  'Tunez',
  'Argelia',
  'Sudafrica',
  'Benin',
  'Liberia',
  'Libia',
  'Egipto',
  'Somalia',
  'Gambia',
  'Mali',
  'Mauritania'
];
var result = 0;
var wordStorage = '';
var guesses = '';
var missStorage = '';
var word = document.querySelector('#word');
var guess = document.querySelector('#guess');
var misses = document.querySelector('#misses');
var man = document.querySelectorAll('.man-0');

function generateWordStorage() {
  wordStorage = wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

function generateGuessWord() {
  var guessWord = '';
  var isFinish = true;

  for (var i = 0; i < wordStorage.length; i++) {
    if (wordStorage[i] != ' ') {
      if (guesses.toUpperCase().indexOf(wordStorage[i].toUpperCase()) >= 0) {
        guessWord += wordStorage[i].toUpperCase() + '&nbsp;';
      }
      else {
        guessWord += '_&nbsp;';

        isFinish = false;
      }
    }
    else {
      guessWord += '&nbsp;&nbsp;';
    }
  }

  word.innerHTML = 'WORD: ' + guessWord;

  if (isFinish) {
    result = 1;
  }
}

function generateMisses() {
  var missedLetters = '';

  for (var i = 0; i < man.length; i++) {
    man[i].style.display = 'none';
  }

  for (var i = 0; i < missStorage.length; i++) {
    document.querySelector('.man-' + (i + 1)).style.display = 'block';

    missedLetters += missStorage[i] + ', ';
  }

  missedLetters = missedLetters.substring(0, missedLetters.length - 2);
  misses.innerHTML = 'MISSES: ' + missedLetters;

  if (missStorage.length >= 6) {
    result = 2;
  }
}

function initializeGame() {
  result = 0;
  wordStorage = '';
  guesses = '';
  missStorage = '';

  word.innerText = '';
  guess.value = '';
  misses.innerText = '';

  generateWordStorage();
  generateGuessWord();
  generateMisses();

  guess.disabled = false;
}

initializeGame();

guess.addEventListener('keypress', function(evt) {
  if (evt.keyCode === 13) {
    if (result === 0) {
      var getTime = setInterval(function() {
        if (wordStorage.toUpperCase().indexOf(guess.value.toUpperCase()) >= 0) {
          guesses += guess.value.toUpperCase();
        }
        else {
          if (missStorage.toUpperCase().indexOf(guess.value.toUpperCase()) < 0) {
            missStorage += guess.value.toUpperCase();
          }
        }

        guess.value = '';

        generateGuessWord();
        generateMisses();

        clearInterval(getTime);

        var getTime2 = setInterval(function() {
          if (result === 1) {
            guess.disabled = true;

            if (confirm('Ganaste! Tuviste ' + missStorage.length + ' falla(s). ' + 'Te gustaría intentar devuelta?')) {
              initializeGame();
            }
          }
          else if (result === 2) {
            guess.disabled = true;

            if (confirm('Perdiste! La respuesta era "' + wordStorage + '". Suerte la proxx. Te gustaría intentar devuelta?')) {
              initializeGame();
            }
          }

          clearInterval(getTime2);
        });
      }, 100);
    }
  }
});
