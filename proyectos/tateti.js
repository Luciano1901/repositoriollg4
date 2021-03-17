

//window.onload = start;
let turno = "O";
let turnocont = 0;


function EnviarUsuarios(){
const jugador1 = document.getElementById("input1").value;
const jugador2 = document.getElementById("input2").value;
console.log(jugador1 +" "+  jugador2);
};

function jugar() {
    document.getElementById("id").addEventListener(click, cambiaTurno());
};


function comprobar(id, val){
    const b1 = document.getElementById('b1').innerHTML;
    const b2 = document.getElementById('b2').innerHTML;
    const b3 = document.getElementById('b3').innerHTML;
    const b4 = document.getElementById('b4').innerHTML;
    const b5 = document.getElementById('b5').innerHTML;
    const b6 = document.getElementById('b6').innerHTML;
    const b7 = document.getElementById('b7').innerHTML;
    const b8 = document.getElementById('b8').innerHTML;
    const b9 = document.getElementById('b9').innerHTML;


    
    if ((b1 == val && b2 == val  && b3 == val) || (b4 == val && b5 == val && b6 == val) || (b7 == val && b8 == val && b9 == val)){
        document.getElementById("ganador").innerHTML = "El ganador es: " + val;
        alert("El ganador es: " + val);
        reiniciar(true);
    }
    else if((b1 == val && b4 == val && b7 == val) || (b2 == val && b5 == val && b8 == val) || (b3 == val && b6 == val && b9 == val))
    {
         document.getElementById("ganador").innerHTML = "El ganador es: " + val;
         reiniciar(true);
    }
    else if ((b1 == val && b5 == val && b9 == val) || (b3 == val && b5 == val && b7 == val)) {
        document.getElementById("ganador").innerHTML = "El ganador es: " + val;
        reiniciar(true);
    }
    else if ((turnocont > 7 && b1 == val && b2 == val && b3 != val) || (turnocont > 7 && b1 == val && b2 != val && b3 == val) || (turnocont > 7 && b1 != val && b2 == val && b3 == val)
            || (turnocont > 7 && b1 == val &&  b4 == val && b7 != val) || ( turnocont > 7 && b1 == val &&  b4 != val && b7 == val) || ( turnocont > 7 && b1 != val &&  b4 == val && b7 == val)
            || ( turnocont > 7 && b2 == val && b5 == val && b8 != val) || ( turnocont > 7 && b2 == val && b5 != val && b8 == val) || ( turnocont > 7 && b2 != val && b5 == val && b8 == val)
            || ( turnocont > 7 && b3 == val && b5 == val && b7 != val) || ( turnocont > 7 && b3 == val && b5 != val && b7 == val) || ( turnocont > 7 && b3 != val && b5 == val && b7 == val)
            || ( turnocont > 7 && b3 == val && b6 == val && b9 != val) || ( turnocont > 7 && b3 == val && b6 != val && b9 == val) || ( turnocont > 7 && b3 != val && b6 == val && b9 == val))
            {
        alert("EMPATEEEEEE");
        }      
            
       
    };


function cambiaTurno(id){
    
    
    document.getElementById(id).disable = true;
    turno = (turno == "O") ? "X" : "O";
    document.getElementById(id).innerHTML = turno;
    document.getElementById('turno').innerHTML = "Turno: " + turno ;
    comprobar(id, turno);
    turnocont++;
    
    //document.getElementById(id).innerHTML = turno ;
    //document.getElementById(id).disable = true;
};

function reiniciar(i)
{
    //start();

    for(i = 0; i <= 8; i++ ){
     document.getElementById("id").innerHTML="-";
       // btn.innerHTML("-");
    }
    
        /*turno = "X";
       // turnoz = 0;
        document.getElementById('turno').innerHTML = "turno: " + turno;
        if(!a)
            document.getElementById('ganador').innerHTML = "";
        for (var i=1; i<= 9; i++)
        {
            document.getElementById('b' + i).disable + enadis;
            if(!a)
            document.getElementById('b' + i).innerHTML = "-";
        }*/
};

function start(){
 window.onload
 jugar();
 
}