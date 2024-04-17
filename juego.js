const boton = document.getElementsByClassName('botones');
const numTurno = document.getElementById('trn');


var turno;
var tablero;


function iniciarPartida(){
    tablero = [100,100,100,100,100,100];
    mostrarTablero();
    quienEmpieza();
}

function restar(celda){
    if(tablero[celda] - document.getElementById('inputJugador').value < 0){
        tablero[celda] = 0;
    } else {
        tablero[celda] -= document.getElementById('inputJugador').value;
    }
    mostrarTablero();
    if(comprobarVictoria()){
        alert("Victoria del jugador "+turno)
    }
    cambiarTurno();
}

function cambiarTurno(){
    if(turno==1){
        turno = 2;
    }
    else {
        turno = 1;
    }
    document.getElementById('trn').innerHTML = turno;
}



function quienEmpieza(){
    turno = parseInt((Math.random()*2)+1);
    document.getElementById('trn').innerHTML = turno;
}

function comprobarVictoria(){
    let cont = 6;
    for(i=0,j=tablero.length;i<j;i++){
        if(tablero[i]==0){
            cont--;
        }
    }
    return (cont==0 ? true : false);
}

function mostrarTablero(){
    for(i=0;i<6;i++){
        document.getElementById('celda'+(i+1)).innerHTML = tablero[i];
    }
}
