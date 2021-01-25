
  var n = 0;
  var l = document.getElementById("number");
  window.setInterval(function(){
    l.innerHTML = n;
    n++;
  },1000);

  var mazo=[
    "cero","cero",
    "uno","uno",
    "dos","dos",
    "tres","tres",
    "cuatro","cuatro",
    "cinco","cinco",
    "seis","seis",
    "siete","siete"]
    console.log(mazo);
    //trae los movimientos del html al javascript
    var movimiento  = document.querySelector("#movimientos");
    //trae el nombre del jugador del html al javascript
    var jugador = document.querySelector("#user");
    //trae los mensajes del html al javascript
    var mensaje = document.querySelector("#mensajes");
    //trae el contenedor del html al javascript
    var contenedor = document.querySelector("#master_container")


    // estado sirve para indicarme el estado de las tarjetas y va del 0 al 2
    var cartaElejida = 0;
    // tarjeta1 te muestra la primer tarjeta seleccionada
    var cartaUno;
    //tarjeta2 te muestra la segunda tarjeta seleccionada
    var cartaDos;
    // te muestra cuantas tarjetas seleccionaste
    var puntaje = 0;

    mazo.sort(function(){
      return 0.5 - Math.random()
    })

    console.log(mazo);
    // esto le dice al contenedor que este atento al click y ejecute la funcion tarjeta
    contenedor.addEventListener("click",tarjeta);

    // esta funcion te guarda la tarjeta seleccionada y las muestra en la consola
    function tarjeta(event) {
      var carta = event.target;
      console.log(carta);

      if (carta.getAttribute("id")=="master_container") {
        mensaje.innerHTML = "selecciona una tarjeta que no sea el contenedor"
        return
      }


      if (cartaElejida==0) {
        if(carta.classList.length != 0) {
          mensajes.innerHTML = "Elegí una carta que no este disponible";
        }else {
          mensaje.innerHTML = "Elegi otra carta que no veas";
          carta.classList.add(mazo[carta.innerHTML]);
          cartaUno = carta;

          cartaElejida ++;


        }
      }else if (cartaElejida==1) {
        if(carta.classList.length != 0) {
          mensajes.innerHTML = "Elegí una carta que no veas.";
        }else {
          carta.classList.add(mazo[carta.innerHTML]);
           cartaDos = carta;
          console.log(cartaDos);


            if (mazo[cartaUno.innerHTML] == mazo[cartaDos.innerHTML]) {
                mensaje.innerHTML = "Muy Bien! Elegiste correctamente";
                chequeaGanador();


            } else {
                mensaje.innerHTML = "Segui intentando!";

            }

            cartaElejida ++;
            console.log(cartaElejida);
          }

      }else {
        mensaje.innerHTML = "Debe elegir una nueva tarjeta";

          if (mazo[cartaUno.innerHTML] == mazo[cartaDos.innerHTML]) {
          puntaje = puntaje + 10;
          movimiento.innerHTML = "puntaje:"+ puntaje;
          chequeaGanador()
        } else {
          cartaUno.classList.remove(mazo[cartaUno.innerHTML]);
          cartaDos.classList.remove(mazo[cartaDos.innerHTML]);
        }
        cartaElejida = 0;
      }
    }


    function chequeaGanador() {
      if ( puntaje == 80   ) {
        mensaje.innerHTML = "Ganaste!!"
      }
    }


var user = document.querySelector("#user");
user.addEventListener("click", cambiarnombre);

function cambiarnombre() {
  var nombre = prompt("Ingrese su nombre")
  user.innerHTML = nombre;
}
